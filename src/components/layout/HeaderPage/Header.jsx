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
    <div ref={props.scrollRef} id="Header" className={Header}>
            <Logo mobile={props.mobile}></Logo>
            <MainMenu scrollReferences={props.scrollRefences} remobile={props.mobile}></MainMenu>
    </div>
    );

}