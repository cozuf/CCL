import React, { ComponentType } from "react"
import ErrorBoundary from "./errorboundary"
import IErrorBoundaryProps from "./props"
import FallbackComponent from "./fallback"

export function withErrorBoundary<P extends Object>(WrappedComponent: ComponentType<P>, fallback?: IErrorBoundaryProps["fallback"], onCrash?: IErrorBoundaryProps["onCrash"]) {
    return (hocProps: P) => {

        const fallbackComponent = fallback || <FallbackComponent />

        return (
            <ErrorBoundary fallback={fallbackComponent} onCrash={onCrash}>
                <WrappedComponent {...hocProps} />
            </ErrorBoundary>
        )
    }
}