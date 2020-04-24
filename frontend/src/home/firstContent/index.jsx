import React from 'react'
import './style.css'

import background from '../../assents/DAI.jpg'

import Menu from '../../commons/template/menu'

export default props => (
    <div className='backContent'>
        <Menu/>
        <img src={background} width='100%'/>
        <div className='frontContent'>

        </div>
    </div>
)