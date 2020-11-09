import './LandingPage.css';
import Header from './components/layout/Header/Header'
import Content from './components/layout/Content/Content'
import Content02 from './components/layout/Content02/Content02'
import Content03 from './components/layout/Content03/Content03'
import Content04 from './components/layout/Content04/Content04'
//import ButtonGroup from './components/layout/Widgets/ButtonGroup/ButtonGroup'
import { Component, useRef, useEffect } from 'react';
import FooterBlock from './components/layout/Footer/FooterBlock/FooterBlock'
import Footer from './components/layout/Footer/Footer'
//import Scrolls from './components/layout/Header/MainMenu/Scrolls'


function LandingPage(itsMobile) {

  const headerRef = useRef(null)
  const content2Ref = useRef(null)
  const content3Ref = useRef(null)
  const content4Ref = useRef(null)

  console.log (itsMobile.mobile)

  if (itsMobile.mobile) {

    return (
    <div className="LandingMobile">
      
      <Header mobile={true}></Header>
      <Content mobile={true}></Content>
      <Content02 mobile={true}></Content02>
      <Content03 mobile={true}></Content03>
      <Content04 mobile={true}></Content04>
      <FooterBlock mobile={true}></FooterBlock>
      <Footer mobile={true}></Footer>

    </div>
    );

} else {

  return (

    
    <div className="LandingPage">
      <Header scrollRef={headerRef} scrollRefences={{headerRef: headerRef,content2Ref: content2Ref,content3Ref: content3Ref,content4Ref: content4Ref}}></Header>
      <Content scrollRef={content2Ref}></Content>
      <Content02 ></Content02>
      <Content03 scrollRef={content3Ref}></Content03>
      <Content04 scrollRef={content4Ref}></Content04>
      <FooterBlock></FooterBlock>
      <Footer></Footer>

    </div>
    
  );
  
}
}

export default LandingPage;
