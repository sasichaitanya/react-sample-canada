import React, { Component } from 'react'

export class ErrorBoundry extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
        
    }

    // when there is error in its component
    // no access to this keyword
    // it will return uipdated state
    static getDerivedStateFromError(err) {
        return {
            hasError: true
        }
    }

    // for printing the error messages 
    // no need to do as react already takes care
    componentDidCatch(error, errorInfo){
        console.error('====errorrrrrrrrrr=========', error)
        console.error('===errorrrInffooooooooooooooo==========', errorInfo)
    }


    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong</h1>
        } else {
            return this.props.children;
        }

    }
}

export default ErrorBoundry