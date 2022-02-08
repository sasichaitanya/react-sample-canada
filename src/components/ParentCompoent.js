import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

export class ParentCompoent extends Component {

    parentFun(paramFromChild) {
        alert('I am in parent <=========>' + paramFromChild)
    }

    render() {
        return <div>
            <h1> I am in parent </h1>
            <ChildComponent funHandler={this.parentFun} />
        </div>;
    }

}

export default ParentCompoent;


// accessing parent event/methods from child 
// pass the data from child to parent through the params
