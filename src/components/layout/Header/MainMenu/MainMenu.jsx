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

  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)   
  const useMountEffect = (fun) => useEffect(fun, [])



  //handleScroll
  function handleScrollHome() {
    scrollToRef(props.scrollReferences.headerRef) // Scroll on mount
  }

  //handleScroll
  function handleScrollContent2() {
    scrollToRef(props.scrollReferences.content2Ref) 
    
  }

  //handleScroll
  function handleScrollContent3() {
    scrollToRef(props.scrollReferences.content3Ref) 
  }

  //handleScroll
  function handleScrollContent4() {
    scrollToRef(props.scrollReferences.content4Ref) 
  }






  return (

    <div className={MainMenu}>
      <Link to="/" onClick={handleScrollHome}  class="btn">Home</Link>
      <Link  to="/" onClick={handleScrollContent2} class="btn">About</Link>
      <Link to="/" onClick={handleScrollContent3} class="btn">Services</Link>
      <Link  to="/"  onClick={handleScrollContent4}class="btn">Contact</Link>
    </div>

  );

}