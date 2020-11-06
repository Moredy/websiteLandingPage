import './Page.css';
import Header from './components/layout/Header/Header'
import Content from './components/Page/Content/ContentPage'
import FooterBlock from './components/layout/Footer/FooterBlock/FooterBlock'
import Footer from './components/layout/Footer/Footer'

function Page(itsMobile) {

  console.log (itsMobile.mobile)

  if (itsMobile.mobile) {

    return (
    <div className="PageMobile">
      
      <Header mobile={true}></Header>
      <Content mobile={true}></Content>
      <FooterBlock mobile={true}></FooterBlock>
      <Footer mobile={true}></Footer>

    </div>
    );

} else {

  return (

    
    <div className="Page">
      <Header></Header>
      <Content></Content>
      <FooterBlock></FooterBlock>
      <Footer></Footer>

    </div>
    
  );
  
}
}

export default Page;
