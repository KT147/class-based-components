import { Component } from "react";

class ErrorBoundary extends Component {
    constructor(){
        super()
        this.state = { hasError: false}
    }

    componentDidCatch(error) {
        console.log(error)
        this.setState({ hasError: true})
    }

    render() {
        if(this.state.hasError){
            return <h1>Something has went wrong</h1>
        }
        return this.props.children;
    }
}

export default ErrorBoundary