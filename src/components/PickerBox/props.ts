import { StyleProp, ViewStyle } from "react-native"
import { IComponentPlaceholderProps, IComponentPrefixProps, IComponentSuffixProps, IComponentTitleProps, IComponentValueProps } from "../Base"

interface IPickerBoxProps<ItemT> extends IComponentTitleProps, IComponentValueProps, IComponentPrefixProps, IComponentSuffixProps, IComponentPlaceholderProps {

    /**
     * @default bottomSheet
     */
    displayType?: "bottomSheet" | "modal"

    /**
     * 
     */
    data: Array<IListData<ItemT>>

    /**
     * 
     * @param item 
     * @returns 
     */
    onSubmit: (item: ItemT) => void

    /**
     * 
     */
    disabled?: boolean

    /**
     * 
     */
    containerStyle?: StyleProp<ViewStyle>
}

export default IPickerBoxProps