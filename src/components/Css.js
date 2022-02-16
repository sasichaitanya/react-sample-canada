import React, { Component } from 'react'
import './styles/ss.css'

export class Css extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          my:true   
        }
    }
    
    render() {
    //  const r= if(my) ? 'shiva':'0'
        return (
            <div>
              <h1 className="shiva"> Shiva</h1>  
            </div>
        )
    }
}

export default Css
