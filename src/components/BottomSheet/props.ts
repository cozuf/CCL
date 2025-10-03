export interface IBottomSheetRef {
    open: () => void
    close: () => void
}

interface IBottomSheetProps {
    /**
     * triggers after bottomsheet opened
     */
    onOpened?: () => void

    /**
     * triggers after bottomsheet closed
     */
    onClosed?: () => void
}


export default IBottomSheetProps