import React from 'react';

class ClassComponet extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            stateVariable: 'helloooo',
            count: 1
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

    increment() {
        // this.setState({
        //     count : this.state.count + 1
        // })

        this.setState((prevState, props) => ({
            count: prevState.count + 1
        }))
    }

    bulkIncrement() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return (
            <div>
                <h1>{this.state.stateVariable}</h1>
                <div>i am {this.props.name} from {this.props.location}</div>
                <br />
                <button onClick={() => this.changeMessage()}>Change Message</button>
                <br />
                <br />
                <button onClick={() => this.bulkIncrement()}>Count {this.state.count}</button>
            </div>
        );
    }
}

export default ClassComponet;
