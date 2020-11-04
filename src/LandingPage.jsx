import './LandingPage.css';
import Header from './components/layout/Header/Header'
import Content from './components/layout/Content/Content'
import Content02 from './components/layout/Content02/Content02'
import Content03 from './components/layout/Content03/Content03'
import Content04 from './components/layout/Content04/Content04'
//import ButtonGroup from './components/layout/Widgets/ButtonGroup/ButtonGroup'
import FooterBlock from './components/layout/Footer/FooterBlock/FooterBlock'
import Footer from './components/layout/Footer/Footer'


function LandingPage(itsMobile) {

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
      <Header></Header>
      <Content></Content>
      <Content02></Content02>
      <Content03></Content03>
      <Content04></Content04>
      <FooterBlock></FooterBlock>
      <Footer></Footer>

    </div>
    
  );
  
}
}

export default LandingPage;
