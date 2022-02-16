import React from 'react'

function ComponentForErrorCheck(props) {
    if (props.name === 'wrong') {
        // throwning manually error
        throw new Error('I am wrong')
    }
    return (
        <div>I am {props.name}</div>
    )
}

export default ComponentForErrorCheck