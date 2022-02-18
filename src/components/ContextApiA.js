import React, { Component } from 'react'
import ContextApiB from './ContextApiB'

export class ContextApiA extends Component {
  render() {
    return (
      <div>
          <ContextApiB/>
      </div>
    )
  }
}

export default ContextApiA