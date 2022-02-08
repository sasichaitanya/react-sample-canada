import React from 'react';

function ChildComponent(props) {
    function test() {
        props.funHandler('I am from child')
    }
    return <div>
        <button onClick={() => test()}>Child click</button>
    </div>;
}

export default ChildComponent;
