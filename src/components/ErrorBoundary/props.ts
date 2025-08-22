import { ErrorInfo, ReactNode } from "react"

interface IErrorBoundaryProps {
    /**
     * 
     */
    fallback: ReactNode | null

    /**
     * 
     */
    onCrash?: (error: Error, errorInfo: ErrorInfo) => void
}

export interface IErrorBoundaryState {
    /**
     * 
     */
    isOccured: boolean

    /**
     * 
     */
    error: Error | null

    /**
     * 
     */
    errorInfo: ErrorInfo | null
}

export default IErrorBoundaryProps