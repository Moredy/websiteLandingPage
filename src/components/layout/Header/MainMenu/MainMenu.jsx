import React from 'react'
import './MainMenu.css'
import './MainMenuMobile.css'


export default props => {

  let MainMenu = "MainMenu"

  if (props.mobile) {MainMenu = "MainMenuMobile"}

  return (

    <div className={MainMenu}>
      <a href="#Header" class="btn">Home</a>
      <a href="#FrameContent" class="btn">About</a>
      <a href="#Content03" class="btn">Services</a>
      <a href="#Content04" class="btn">Contact</a>
    </div>

  );

}