import React, { Component } from 'react'
import axios from 'axios';

export class HttpSamplePost extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    submitData = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            "userId": 22,
            "id": 22,
            "title": "helloooo",
            "body": "helooooooooooooooooooooooooooooooooooo"
        })
            .then((response) => {
                console.log('response ====', response)

            })
            .catch(err => {
                console.log('errorrrrrrrrrrrrr====', err)
            })

    }

    render() {
        return (
            <div>
                <button onClick={this.submitData}>Submit</button>
            </div>
        )
    }
}

export default HttpSamplePost