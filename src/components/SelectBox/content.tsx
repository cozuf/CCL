import React, { FC, Fragment, useState } from "react";
import ISelectBoxProps from "./props";
import { RadioButtonGroup } from "../RadioButtonGroup";
import { CheckBoxGroup } from "../CheckBoxGroup";
import { Separator } from "../Separator";
import { Button } from "../Button";

interface IContentProps {
    /**
     * 
     */
    data: ISelectBoxProps<any>["data"]

    /**
     * 
     */
    selectionType: ISelectBoxProps<any>["selectionType"]

    /**
     * 
     * @param selectedList 
     * @param data 
     * @returns 
     */
    onSubmit: (selectedList: ISelectBoxProps<any>["data"], data: ISelectBoxProps<any>["data"]) => void
}

const Content: FC<IContentProps> = ({ selectionType, data, onSubmit = () => { } }) => {
    const [list, setList] = useState<ISelectBoxProps<any>["data"]>(data)

    const onPressSubmit = () => {
        const selectedList = list.filter((v) => v.selected)
        onSubmit(selectedList, list)
    }

    const renderContent = () => {
        if (selectionType === "singleSelect") {
            return (
                <RadioButtonGroup
                    bounces={false}
                    data={list}
                    onSelect={(s, l) => { setList(l) }}
                    showsVerticalScrollIndicator={false}
                    style={{ flexGrow: undefined }}
                />
            )
        }

        if (selectionType === "multiSelect") {
            return (
                <CheckBoxGroup
                    bounces={false}
                    data={list}
                    onSelect={(s, i, l) => { setList(l) }}
                    showsVerticalScrollIndicator={false}
                    style={{ flexGrow: undefined }}
                />
            )
        }

        return null
    }

    return (
        <Fragment>
            {renderContent()}
            <Separator />
            <Button
                // FIXME Buton ismi ya yapının translate'si ile ya da porps'dan "onSubmitTitle" vererek düzeltilebilir 
                title="Tamam"
                onPress={onPressSubmit}
                disabled={!list.some((v) => v.selected)}
            />
        </Fragment>
    )
}

export default Content