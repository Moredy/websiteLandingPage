import React from 'react'
import './Header.css'
import MainMenu from './MainMenu/MainMenu'
import Logo from './Logo/Logo'

export default props => {

    return (
    <div id="Header" className="Header">
            <Logo></Logo>
            <MainMenu></MainMenu>
    </div>
    );

}