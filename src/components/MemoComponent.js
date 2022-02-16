import React from 'react'

function MemoComponent(props) {
    // this is similar to pure component (class)
    console.log('i am in MemoComponent')
  return (
    <div>MemoComponent {props.name}</div>
  )
}

export default React.memo(MemoComponent)