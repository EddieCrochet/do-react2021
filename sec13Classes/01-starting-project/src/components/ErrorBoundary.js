import { Component } from 'react';

class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = {hasError: false }
    }

    componentDidCatch(error) {
        // if we catch an error, set the state of hasError to true
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError){
            return <p>Something went wrong!!! Yikes, dude.</p>
        }
        return this.props.children
    }
}

export default ErrorBoundary;