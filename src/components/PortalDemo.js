import React from 'react'
import ReactDOM from 'react-dom';

function PortalDemo() {
    // for creating separate portal
    return ReactDOM.createPortal(
        <div>PortalDemo</div>,
        document.getElementById('portal-root')
    )
}

export default PortalDemo