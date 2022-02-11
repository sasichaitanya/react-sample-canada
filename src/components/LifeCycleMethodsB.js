import React, { Component } from 'react'

class LifeCycleMethodsB extends Component {
    constructor(props) {
        console.log('i am in constructor LifeCycleMethodsB')
        super(props)

        this.state = {

        }
    }

    // mounting
    static getDerivedStateFromProps(props, state) {
        console.log('i am in getDerivedStateFromProps LifeCycleMethodsB')
        return null;
    }

    componentDidMount() {
        console.log('i am in componentDidMount LifeCycleMethodsB')
    }


     // update phase
     
     shouldComponetUpdate() {
        console.log('i am in shouldComponetUpdate LifeCycleMethodsB')
        return true;
    }
    // rarely used method
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('i am in getSnapshotBeforeUpdate LifeCycleMethodsB')
        return null
    }

    componentDidUpdate() {
        console.log('i am in componentDidUpdate LifeCycleMethodsB')
    }


    render() {
        console.log('i am in render LifeCycleMethodsB')
        return (
            <div>LifeCycleMethodsB</div>
        )
    }
}

export default LifeCycleMethodsB