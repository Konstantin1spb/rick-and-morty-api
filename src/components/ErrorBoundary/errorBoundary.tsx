import { Component, ErrorInfo } from "react";

interface IProps {
    children: JSX.Element,
}

class ErrorBoundary extends Component<IProps, {hasError: boolean}> {
    constructor(props) {
        super(props)

        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        console.log(error.message)
        return {
            hasError: true
        }
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.log(error.message)
        console.log(errorInfo)
    }

    render() {
        if(this.state.hasError) {
            return <h3>Что то пошло не так!</h3>
        }
        
        return this.props.children
    }
}

export default ErrorBoundary