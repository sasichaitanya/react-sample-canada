import React, { Component } from 'react'
import EnhancedComponent from './HocDemo';


export class HocHoverSample extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

   
    render() {
        return (
            <div onMouseOver={this.props.clickHandler}>
                {this.props.name} {this.props.count}
            </div>
        )
    }
}

export default EnhancedComponent(HocHoverSample, 5)