import React, { PureComponent } from 'react'

export class PureComponentDemo extends PureComponent {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
  render() {
    console.log('i am in PureComponentDemo')
    return (
      <div>PureComponentDemo {this.props.name}</div>
    )
  }
}

export default PureComponentDemo