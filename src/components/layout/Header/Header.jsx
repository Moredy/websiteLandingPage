import React from 'react'
import './Header.css'
import './HeaderMobile.css'
import MainMenu from './MainMenu/MainMenu'
import Logo from './Logo/Logo'

export default props => {

    let Header = "Header"
    let displayValue = "inline"
    if (props.mobile) {Header = "HeaderMobile"
                       displayValue = "none"}

    return (
    <div id="Header" className={Header}>
            <Logo mobile={props.mobile}></Logo>
            <MainMenu mobile={props.mobile}></MainMenu>
    </div>
    );

}