import React, { Component } from 'react'
import axios from 'axios';

class HttpGetSample extends Component {
    constructor(props) {
        super(props)

        this.state = {
            list: [],
            errMessage: 'Error while fetching the data',
            showErr: false
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            // positive response
            .then((response) => {
                console.log('resp =========', response.data)
                this.setState((prevState) => {
                    return {
                        list: response.data
                    }
                })
            })
            // neghative response
            .catch(err => {
                console.log('err =========', err)
                this.setState({
                    showErr: true
                })
            })
    }

    render() {
        return (
            <div>
                <h1>List of users</h1>
                {
                    this.state.list.length > 0 ?
                        this.state.list.map((ele) => {
                            return <div>{ele.title}</div>
                        })
                        : null
                }
                {
                    this.state.showErr ? this.state.errMessage : null
                }
            </div>
        )
    }
}

export default HttpGetSample