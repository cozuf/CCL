import React, { useRef, useState } from "react";
import { Button, ISnackBarRef, PageContainer, Separator, SnackBar, TapSelector } from "../../../src";
import { View } from "react-native";

const DURATION = [
    {
        title: "SHORT",
        value: "short"
    },
    {
        title: "MEDIUM",
        value: "medium"
    },
    {
        title: "LONG",
        value: "long"
    },
    {
        title: "INFINITE",
        value: "infinite"
    }
]
const POSITION = [
    {
        title: "TOP",
        value: "top"
    },
    {
        title: "BOTTOM",
        value: "bottom"
    }
]
const DISPLAY = [
    {
        title: "HIDE TO SHOW",
        value: "hideToShow"
    },
    {
        title: "BACK TO FRONT",
        value: "backToFront"
    },
    {
        title: "LEFT TO RIGHT",
        value: "leftToRight"
    },
    {
        title: "RIGHT TO LEFT",
        value: "rightToLeft"
    },
    {
        title: "BOTTOM TO TOP",
        value: "bottomToTop"
    }
]
const TYPE = [
    {
        title: "DEFAULT",
        value: "default"
    },
    {
        title: "SUCCESS",
        value: "success"
    },
    {
        title: "ERROR",
        value: "error"
    }
]
const SnackBarPage = () => {
    const snackBarRef = useRef<ISnackBarRef>(null)

    const [durationIndex, setDurationIndex] = useState<number>(2)
    const [positionIndex, setPositionIndex] = useState<number>(1)
    const [displayIndex, setDisplayIndex] = useState<number>(4)
    const [typeIndex, setTypeIndex] = useState<number>(0)

    const showSnackBar = () => {
        snackBarRef.current?.show()
    }

    const hideSnackBar = () => {
        snackBarRef.current?.hide()
    }

    return (
        <PageContainer>
            <View>
                <TapSelector
                    initialIndex={durationIndex}
                    data={DURATION}
                    onTap={(v, i) => setDurationIndex(i)}
                />
                <Separator />
                <TapSelector
                    initialIndex={positionIndex}
                    data={POSITION}
                    onTap={(v, i) => setPositionIndex(i)}
                />
                <Separator />
                <TapSelector
                    initialIndex={displayIndex}
                    data={DISPLAY}
                    onTap={(v, i) => setDisplayIndex(i)}
                />
                <Separator />
                <TapSelector
                    initialIndex={typeIndex}
                    data={TYPE}
                    onTap={(v, i) => setTypeIndex(i)}
                />
            </View>
            <Separator distance={16} />
            <View>
                <Button
                    title="Göster"
                    onPress={showSnackBar}
                />
                <Separator />
                <Button
                    title="Kapat"
                    onPress={hideSnackBar}
                />
            </View>
            <SnackBar
                ref={snackBarRef}
                displayForm={DISPLAY[displayIndex].value as any}
                duration={DURATION[durationIndex].value as any}
                position={POSITION[positionIndex].value as any}
                type={TYPE[typeIndex].value as any}
            />
        </PageContainer>
    )
}

export default SnackBarPage