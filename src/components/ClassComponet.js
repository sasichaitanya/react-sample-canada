import React from 'react';

class ClassComponet extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            stateVariable: 'helloooo'
        }
    }

    changeMessage() {
        // setstate is predefined
        this.setState({
            stateVariable: 'Message changed'
        }, () => {
            console.log('====in 2nd parameter========', this.state.stateVariable)
        })

        console.log('============', this.state.stateVariable)
    }

    render() {
        return (
            <div>
                <h1>{this.state.stateVariable}</h1>
                <div>i am {this.props.name} from {this.props.location}</div>
                <br />
                <button onClick={() => this.changeMessage()}>Change Message</button>
            </div>
        );
    }
}

export default ClassComponet;
