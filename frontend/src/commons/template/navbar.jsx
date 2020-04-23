import React from 'react'

export default props => (
    <div className='menuNav'>
        <ul className='nav justify-content-center'>
            {props.children}
        </ul>
    </div>
)