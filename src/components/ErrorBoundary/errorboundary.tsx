import React, { Component, ErrorInfo, PropsWithChildren } from "react";
import IErrorBoundaryProps, { IErrorBoundaryState } from "./props";

/**
 * Bir yapı bu component ile sarılırsa child'daki hataları yakalayıp, fallback gösterir
 * dışındaki yapıda çalışmaz mesela sayfalarda onun @withErrorBoudary kullanmak gerek
 * dev modda hata ekranını açıyor fakat release modda hata vermiyor
 */
// TODO onRefresh durumunu düşün
class ErrorBoundary extends Component<PropsWithChildren<IErrorBoundaryProps>, IErrorBoundaryState>{
    constructor(props: IErrorBoundaryProps) {
        super(props)
        this.state = {
            isOccured: false,
            error: null,
            errorInfo: null
        }
    }

    static getDerivedStateFromError(error: Error) {
        return { isOccured: true, error: error };

    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        const { onCrash = () => { } } = this.props
        onCrash(error, errorInfo)
        this.setState({ isOccured: true, error, errorInfo });
    }

    render(): React.ReactNode {
        const { fallback, children } = this.props
        const { isOccured } = this.state

        if (isOccured) {
            return fallback
        } else {
            return children
        }
    }
}

export default ErrorBoundary