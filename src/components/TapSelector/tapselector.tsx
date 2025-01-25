import React, { FC, useEffect, useState } from "react";
import ITapSelectorProps from "./props";
import { Button } from "../Button";

const TapSelector: FC<ITapSelectorProps<any>> = ({ initialIndex = 0, data, onTap = () => { } }) => {
    const [selectedIndex, setSelectedIndex] = useState<number>(initialIndex)

    useEffect(() => {
        onTap(data[selectedIndex], selectedIndex)
    }, [selectedIndex])

    const onTapButton = () => {
        setSelectedIndex((old) => (old + 1) % data.length)
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