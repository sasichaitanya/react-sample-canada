// import React from 'react';

function Functional(props) {
    function clickFunctional(qwert) {
        console.log('=========', props)
    }
    return <div>
        <div>hi i am {props.name} from {props.location}</div>
        {props.children}
        <button onClick={() => clickFunctional('asdf')}>Functional </button>
    </div>;
}

export default Functional;
