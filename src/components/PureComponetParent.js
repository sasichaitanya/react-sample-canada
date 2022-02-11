import React, { Component, Fragment } from 'react';
import PureComponentDemo from './PureComponentDemo';

class PureComponetParent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'hello'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'hello'
            })
        }, 2000)
    }

    render() {
        console.log('i am in PureComponetParent')
        return (
            <Fragment>
                <div>PureComponetParent</div>
                <PureComponentDemo name={this.state.name} />
            </Fragment>
        )
    }
}

export default PureComponetParent