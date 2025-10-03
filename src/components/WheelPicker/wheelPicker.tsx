import React, { FC, useEffect, useRef } from "react";
import { View, FlatList, NativeSyntheticEvent, NativeScrollEvent, Animated, Pressable, ListRenderItem, } from "react-native";
import { Text } from "../Text";
import { useTheme } from "../../context";
import IWheelPickerProps from "./props";
import { ITEM_HEIGHT } from "./constants";
import styles from "./styles";

const WheelPicker: FC<IWheelPickerProps<any>> = ({ data = [], onChangeItem = () => { } }) => {
    const { colors } = useTheme()
    const scrollY = useRef(new Animated.Value(0)).current;
    const listRef = useRef<FlatList>(null);

    useEffect(() => {
        setTimeout(() => {
            const INDEX = data.findIndex((v) => v.selected)
            listRef.current?.scrollToIndex({ index: INDEX !== -1 ? INDEX : 0, animated: false });
        }, 50);
    }, []);

    const scrollToIndex = (index: number) => {
        listRef.current?.scrollToIndex({ index, animated: true });
    };

    const handleMomentumScrollEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
        const offsetY = e.nativeEvent.contentOffset.y;
        const index = Math.round(offsetY / ITEM_HEIGHT);
        onChangeItem(data[index])
    }

    const renderItem: ListRenderItem<IListData<any>> = (info) => {
        const { item, index } = info
        const center = index * ITEM_HEIGHT;

        const inputRange = [
            center - ITEM_HEIGHT * 3,
            center - ITEM_HEIGHT * 2,
            center - ITEM_HEIGHT,
            center,
            center + ITEM_HEIGHT,
            center + ITEM_HEIGHT * 2,
            center + ITEM_HEIGHT * 3,
        ];


        const scaleY = scrollY.interpolate({
            inputRange,
            outputRange: [2, 1.5, 1.25, 1, 1.25, 1.5, 2],
            extrapolate: "clamp",
        });

        const opacity = scrollY.interpolate({
            inputRange,
            outputRange: [0.25, 0.25, 0.25, 1, 0.25, 0.25, 0.25],
            extrapolate: "clamp",
        });

        const rotateX = scrollY.interpolate({
            inputRange,
            outputRange: ["70deg", "60deg", "40deg", "0deg", "-45deg", "-60deg", "-70deg"],
            extrapolate: "clamp",
        });

        return (
            <Pressable onPress={() => scrollToIndex(index)}>
                <Animated.View style={
                    [
                        styles.item,
                        {
                            transform: [
                                { scaleY },
                                { rotateX }
                            ],
                            opacity
                        }
                    ]
                }>
                    <Text fontFamily="medium" fontSize={18} >
                        {item.title}
                    </Text>
                </Animated.View>
            </Pressable>
        );
    }

    return (
        <View style={styles.container}>
            {/* ortadaki highlight */}
            <View style={[styles.highlight, { backgroundColor: colors.text }]} pointerEvents="none" />

            <Animated.FlatList
                ref={listRef}
                data={data}
                keyExtractor={(_, i) => i.toString()}
                showsVerticalScrollIndicator={false}
                initialScrollIndex={scrollY}
                snapToInterval={ITEM_HEIGHT}
                decelerationRate="fast"
                style={styles.flatlist}
                contentContainerStyle={styles.flatlistContent}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: true })}
                scrollEventThrottle={16}
                getItemLayout={(_, index) => ({ length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index })}
                renderItem={renderItem}
                onMomentumScrollEnd={handleMomentumScrollEnd}
            />
        </View>
    );
}

export default WheelPicker


