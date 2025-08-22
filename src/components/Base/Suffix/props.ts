import { ReactNode } from "react"

interface IComponentSuffixProps {
    /**
     * 
     */
    error?: string

    /**
     * 
     * @param isError 
     * @returns 
     */
    suffixComponent?: (isError?: boolean) => ReactNode
}

export default IComponentSuffixProps