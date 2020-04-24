import React from 'react'

import Logo from '../../assents/GM_Light.png'

export default props => (
    <div className='menuNav'>
        <ul className='nav justify-content-center'>
            <li>
                <a href="#">NOVIDADES</a>
            </li>
            <li>
                <a href="#">LOJA</a>
            </li>
            <li>
                <a href="#">SOBRE NÓS</a>
            </li>
            <li>
                <img src={Logo} width='70px'/>
            </li>
            <li>
                <a href="#">PERFIL</a>
            </li>
            <li>
                <a href="#">CARRINHO</a>
            </li>
            <li>
                <a href="#">CONTATO</a>
            </li>
        </ul>
    </div>
)