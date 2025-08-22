import { ReactNode } from "react"

interface IComponentPrefixProps {
    /**
     * 
     */
    error?: string

    /**
     * 
     * @param isError 
     * @returns 
     */
    prefixComponent?: (isError?: boolean) => ReactNode
}

export default IComponentPrefixProps