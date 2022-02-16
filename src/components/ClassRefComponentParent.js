import React, { Component } from 'react'
import ClassRefChild from './ClassRefChild';

export class ClassRefComponentParent extends Component {
    constructor(props) {
        super(props)
        this.componentRef = React.createRef()
        this.state = {

        }
    }

    clickHandler = () => {
        this.componentRef.current.changeFocus()
    }
    render() {
        return (
            <div>
                <ClassRefChild ref={this.componentRef}/>
                <button onClick={this.clickHandler}>Click to focus the element in child ref</button>
            </div>
        )
    }
}

export default ClassRefComponentParent