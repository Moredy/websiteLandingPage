import React from 'react'
import { Component, useRef, useEffect } from 'react';
import './MainMenu.css'
import './MainMenuMobile.css'
import '../Header'
import Content from'../../Content02/Content02'

import { Link, Redirect } from "react-router-dom";



export default props => {

  


  console.log (props.scrollReferences)

  //Caso for mobile
  let MainMenu = "MainMenu"
  if (props.mobile) { MainMenu = "MainMenuMobile" }



  return (

    <div className={MainMenu}>

      <a href="../../#Header" class="btn">Home</a>


      <a href="../../#FrameContent" class="btn">About</a>


      <a href="../../#Content03" class="btn">Services</a>


      <a href="../../#Content04" class="btn">Contact</a>



    </div>

  );

}