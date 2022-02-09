import React, { Component } from 'react'
import './styles/customStyle.css';
import styles from './styles/customStyle.module.css';

const inlineStyle = {
    fontSize: '50px'
}

class LoopingComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            arr: [
                {
                    color: "red",
                    value: "#f00"
                },
                {
                    color: "green",
                    value: "#0f0"
                },
                {
                    color: "blue",
                    value: "#00f"
                },
                {
                    color: "cyan",
                    value: "#0ff"
                },
                {
                    color: "magenta",
                    value: "#f0f"
                },
                {
                    color: "yellow",
                    value: "#ff0"
                },
                {
                    color: "black",
                    value: "#000"
                }
            ],
            showExtClass: true
        }
    }
    render() {
        const showClass = this.state.showExtClass ? 'myClass': '';

        const names = this.state.arr.map((ele, ind) => {
            return <h1 className={`${showClass} myClass1 ${styles.moduleClass}`} key={ind}>color is {ele.color} and its value is {ele.value}</h1>
        })
        return (
            <div>
                <div>LoopingComponent</div>
                {names}
            </div>
        )
    }
}

export default LoopingComponent