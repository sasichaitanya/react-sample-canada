import React, { Component } from 'react'


// custom higer order component
// function takes component as parameter and returns enhanced component
const EnhancedComponent = (OriginalComponent, incNumber) => {
    class EnhancedComponent extends Component {
        constructor(props) {
            super(props)

            this.state = {
                count: 0
            }
        }

        clickHandler = () => {
            this.setState((prevState) => {
                return {
                    count: prevState.count + incNumber
                }
            })
        }
        render() {
            return (
                <OriginalComponent count={this.state.count} clickHandler={this.clickHandler} 
                {...this.props}/>
            )
        }
    }
    return EnhancedComponent
}



export default EnhancedComponent