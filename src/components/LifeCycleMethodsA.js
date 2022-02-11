import React, { Component } from 'react'
import LifeCycleMethodsB from './LifeCycleMethodsB'

class LifeCycleMethodsA extends Component {
    // 
    constructor(props) {
        console.log('i am in constructor LifeCycleMethodsA')
        super(props)

        this.state = {
            name: 'hello'
        }
    }
    // mounting
    // rarely used method
    static getDerivedStateFromProps(props, state) {
        // no access to this keyword
        console.log('i am in getDerivedStateFromProps LifeCycleMethodsA')
        return null;
    }

    componentDidMount() {
        // api calls here
        console.log('i am in componentDidMount LifeCycleMethodsA')
    }

    // update phase
    shouldComponetUpdate() {
        console.log('i am in shouldComponetUpdate LifeCycleMethodsA')
        return true;
    }
    // rarely used method
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('i am in getSnapshotBeforeUpdate LifeCycleMethodsA')
        return null
    }

    componentDidUpdate() {
        console.log('i am in componentDidUpdate LifeCycleMethodsA')
    }


    componentWillUnmount() {
        // it will be called after the component is destroyed
    }



    changeName() {
        this.setState({
            name: 'hello ====> changed'
        })
    }

    render() {
        console.log('i am in render LifeCycleMethodsA')
        return (
            <div>
                <div>LifeCycleMethodsA {this.state.name}</div>
                <br/>
                <button onClick={() => this.changeName()}>Change Name</button>
                <br/>
                <br/>
                <LifeCycleMethodsB/>
            </div>
        )
    }
}

export default LifeCycleMethodsA


// lifecyclemethods:
//  mounting => constructor, static getDerivedStateFromProps, render and componentDidMount
//  updating => static getDerivedStateFromProps, shouldComponetUpdate, render, getSnapshotBeforeUpdate and componentDidUpdate
//  unmounting => componentWillUnmount
//  error.handling => static getDerivedStateFromError , componentDidCatch