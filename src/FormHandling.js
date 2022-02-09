import React, { Component } from 'react'

export class FormHandling extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            desc: '',
            topic: 'react'
        }
    }

    changeName = (ev) => {
        this.setState({
            name: ev.target.value
        })
    }

    changeDesc = (ev) => {
        this.setState({
            desc: ev.target.value
        })
    }

    changeTopic = (ev) => {
        this.setState({
            topic: ev.target.value
        })
    }

    getAllDetails = (ev) => {
        ev.preventDefault()
        console.log('===============', this.state)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.getAllDetails}>
                    <div>
                        <label>Name</label>
                        <input value={this.state.name} onChange={this.changeName} />
                    </div>
                    <div>
                        <label>Description</label>
                        <textarea value={this.state.desc} onChange={this.changeDesc}></textarea>
                    </div>
                    <div>
                        <label>Topics</label>
                        <select value={this.state.topic} onChange={this.changeTopic}>
                            <option value="react">React</option>
                            <option value="angular">Angular</option>
                            <option value="vue">Vue</option>
                        </select>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default FormHandling