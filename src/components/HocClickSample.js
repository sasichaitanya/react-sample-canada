import React, { Component } from 'react'
import EnhancedComponent from './HocDemo';

export class HocClickSample extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }


    render() {
        return (
            <div>
                <button onClick={this.props.clickHandler}> {this.props.name} {this.props.count}</button>
            </div>
        )
    }
}

export default EnhancedComponent(HocClickSample, 10)