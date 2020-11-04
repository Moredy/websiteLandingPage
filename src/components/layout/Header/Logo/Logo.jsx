import React from 'react'
import logo from './image06.png';
import './Logo.css'

export default props => {
    let Logo = "Logo"
    if(props.mobile) {Logo ="LogoMobile"}

    return (
    <div className={Logo}>
        
        <img className="logoImage" src={logo}></img>

    </div>
    );

}