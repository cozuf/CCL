import React, { Fragment, useRef } from "react";
import { BottomSheet, Button, IBottomSheetRef, PageContainer, Text } from "../../../src";
import { Alert, View } from "react-native";

const BottomSheetPage = () => {
    const bottomSheetRef = useRef<IBottomSheetRef>(null)

    const openBottomSheet = () => {
        bottomSheetRef.current?.open()
    }

    const onOpened = () => {
        Alert.alert("Başlık", "Açıldı")
    }

    const onClosed = () => {
        Alert.alert("Başlık", "Kapandı")
    }

    return (
        <Fragment>
            <PageContainer>
                <View>
                    <BottomSheet
                        ref={bottomSheetRef}
                        onOpened={onOpened}
                        onClosed={onClosed}
                    >
                        <Text>Yusuf</Text>
                        <Text>Yusuf</Text>
                        <Text>Yusuf</Text>
                        <Text>Yusuf</Text>
                        <Text>Yusuf</Text>
                        <Text>Yusuf</Text>
                        <Text>Yusuf</Text>
                        <Text>Yusuf</Text>
                    </BottomSheet>
                </View>
                <View>
                    <Button
                        title="Göster"
                        onPress={openBottomSheet}
                    />
                </View>
            </PageContainer>
        </Fragment >
    )
}

export default BottomSheetPage