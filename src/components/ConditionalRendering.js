import React, { Component } from 'react';

export class ConditionalRendering extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLogged: true
        }
    }

    render() {

        // first way
        // if (this.state.isLogged) {
        //     return (
        //         <div>Welcome user</div>
        //     )
        // } else {
        //     return (
        //         <div>Welcome guest</div>
        //     )
        // }

        // second way
        // let message = this.state.isLogged ? 'Welcome user' : 'Welcome guest';
        // return <div>
        //     {message}
        // </div>

        // third way 
        // return (
        //     this.state.isLogged ? 
        //     <div>Welcome user</div> : 
        //     <div>Welcome guest</div>
        // )

        // forth way
        return this.state.isLogged && <div>Welcome user</div>
    }
}

export default ConditionalRendering;
