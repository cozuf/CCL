import React, { FC, Fragment, useEffect, useRef, useState } from "react";
import ISegmentedButtonProps from "./props";
import { Animated, LayoutChangeEvent, TouchableOpacity, View } from "react-native";
import { Text } from "../Text";
import { Separator } from "../Separator";
import { useTheme } from "../../context";

const SegmentedButton: FC<ISegmentedButtonProps<any>> = ({ data, initialIndex = 0, onSelect = () => { } }) => {
    const { colors, tokens } = useTheme()
    /**
     * 
     */
    const [dataLength, setDataLength] = useState<number>(data.length)

    /**
     * 
     */
    const [dataList, setDataList] = useState<Array<IListData<any>>>(data.map((v, i) => ({ ...v, selected: initialIndex === i })))
    /**
     * 
     */
    const [selectedIndex, setSelectedIndex] = useState<number>(initialIndex)

    /**
     * 
     */
    const [itemWidth, setItemWidth] = useState<number>(0)

    /**
     * 
     */
    const [itemHeight, setItemHeight] = useState<number>(0)

    /**
     * 
     */
    const animatedWidth = useRef(new Animated.Value(tokens.spaces.extraSmall + ((itemWidth + 8) * selectedIndex))).current

    /**
     * 
     */
    useEffect(() => {
        const selectIndex = data.findIndex((v) => v.selected)
        setDataLength(data.length)
        setDataList(data)
        setSelectedIndex(selectIndex !== -1 ? selectIndex : initialIndex)
    }, [data])

    /**
     * 
     */
    useEffect(() => {
        setSelectedIndex(initialIndex)
    }, [initialIndex])

    /**
     * 
     */
    useEffect(() => {
        Animated.timing(animatedWidth, {
            toValue: tokens.spaces.extraSmall + ((itemWidth + 8) * selectedIndex),
            duration: 300,
            useNativeDriver: false,
        }).start();
    }, [selectedIndex, itemWidth]);

    /**
     * 
     * @param event 
     */
    const onContainerLayout = (event: LayoutChangeEvent) => {
        const { height: CONTAINER_HEIGHT, width: CONTAINER_WIDTH } = event.nativeEvent.layout
        const ITEM_WIDTH = (CONTAINER_WIDTH - (tokens.spaces.extraSmall * 2) - ((dataLength - 1) * 8)) / dataLength
        const ITEM_HEIGHT = CONTAINER_HEIGHT - (tokens.spaces.extraSmall * 2)
        setItemWidth(ITEM_WIDTH)
        setItemHeight(ITEM_HEIGHT)
    }

    /**
     * 
     * @param event 
     */
    const onItemLayout = (event: LayoutChangeEvent) => {
        setItemWidth(event.nativeEvent.layout.width)
    }

    /**
     * 
     * @param item 
     * @param index 
     * @returns 
     */
    const renderDataListItem = (item: IListData<any>, index: number) => {
        return (
            <Fragment key={`${index}`}>
                <TouchableOpacity
                    onLayout={onItemLayout}
                    activeOpacity={0.5}
                    disabled={index === selectedIndex}
                    style={{
                        flex: 1,
                        alignItems: "center",
                        paddingVertical: tokens.spaces.extraSmall,
                    }}
                    onPress={() => {
                        onSelect(item.value)
                    }}>
                    <Text
                        fontSize={16}
                        fontFamily="medium">
                        {item.title}
                    </Text>
                </TouchableOpacity>
                {
                    index !== dataLength - 1
                        ?
                        <Separator direction="horizontal" />
                        :
                        null
                }
            </Fragment>
        )
    }

    return (
        <View
            onLayout={onContainerLayout}
            style={{
                flexDirection: "row",
                backgroundColor: colors.componentBackground,
                padding: tokens.spaces.extraSmall,
                borderRadius: 8
            }}>
            <Animated.View
                style={{
                    marginTop: tokens.spaces.extraSmall,
                    left: animatedWidth,
                    height: itemHeight,
                    width: itemWidth,
                    position: 'absolute',
                    backgroundColor: colors.pageBackground,
                    borderRadius: tokens.radiuses.extraSmall,
                    shadowColor: 'black',
                    shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                    shadowOpacity: 0.2,
                    elevation: 3,
                }}
            />
            {
                dataList.map(renderDataListItem)
            }
        </View>
    )
}

export default SegmentedButton