import './Page.css';
import Header from '../../components/layout/HeaderPage/Header'
import FooterBlock from '../../components/layout/Footer/FooterBlock/FooterBlock'
import Footer from '../../components/layout/Footer/Footer'
import { Switch, Route } from "react-router-dom";

import Service1 from './Service1';
import Service2 from './Service2';
import Service3 from './Service3';
import Service4 from './Service4';
import Service5 from './Service5';
import Service6 from './Service6';
import Service7 from './Service7';
import Service8 from './Service8';
import Service9 from './Service9';
import Service10 from './Service10';
import ScrollToTop from '../../components/layout/Widgets/ScrollToTop/ScrollToTop'


function Page(itsMobile) {

  console.log (itsMobile.mobile)


  return (

    
    <div className="Page">
      <Header></Header>
      <ScrollToTop></ScrollToTop>
      <Switch>
        <Route exact path="/allservices/service1" component={Service1}/>
        <Route exact path="/allservices/service2" component={Service2}/>
        <Route exact path="/allservices/service3" component={Service3}/>
        <Route exact path="/allservices/service4" component={Service4}/>
        <Route exact path="/allservices/service5" component={Service5}/>
        <Route exact path="/allservices/service6" component={Service6}/>
        <Route exact path="/allservices/service7" component={Service7}/>
        <Route exact path="/allservices/service8" component={Service8}/>
        <Route exact path="/allservices/service9" component={Service9}/>
        <Route exact path="/allservices/service10" component={Service10}/>
      </Switch>

      <FooterBlock></FooterBlock>
      <Footer></Footer>

    </div>
    
  );
  

}

export default Page;
