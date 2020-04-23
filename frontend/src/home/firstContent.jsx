import React from 'react'

import NavMenu from '../commons/template/navbar'
import NavMenuitem from '../commons/template/navbarItem'

import Logo from '../assents/GM_Light.png'

export default props => (
    <NavMenu>
        <NavMenuitem>NOVIDADES</NavMenuitem>
        <NavMenuitem>LOJA</NavMenuitem>
        <NavMenuitem>SOBRE NÓS</NavMenuitem>
        <NavMenuitem>
            <img src={Logo} width='70px'/>
        </NavMenuitem>
        <NavMenuitem>PERFIL</NavMenuitem>
        <NavMenuitem>CARRINHO</NavMenuitem>
        <NavMenuitem>CONTATO</NavMenuitem>
    </NavMenu>
)