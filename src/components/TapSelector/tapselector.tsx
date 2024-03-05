import React, { FC, useState } from "react";
import ITapSelectorProps from "./props";
import { Button } from "../Button";

const TapSelector: FC<ITapSelectorProps<any>> = ({ initialIndex = 0, data, onTap = () => { } }) => {
    const [selectedIndex, setSelectedIndex] = useState<number>(initialIndex)

    const onTapButton = () => {
        setSelectedIndex((old) => {
            const nextIndex = (old + 1) % data.length
            onTap(data[nextIndex], nextIndex)
            return nextIndex
        })
    }

    return (
        <Button
            type="outlined"
            title={data[selectedIndex].title}
            onPress={onTapButton}
        />
    )
}

export default TapSelector