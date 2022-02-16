import React, { Component } from 'react'

export class RefDemo extends Component {
    constructor(props) {
        super(props)
        // refs used for manipulating element
        // replacement of document.getElementById
        this.inputRef = React.createRef();
        this.state = {

        }
    }

    componentDidMount() {
        
        this.inputRef.current.focus()
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef}/>
            </div>
        )
    }
}

export default RefDemo