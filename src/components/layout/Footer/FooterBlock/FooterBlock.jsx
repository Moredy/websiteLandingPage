import React from 'react'
import './FooterBlock.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import Iframe from 'react-iframe';





export default class FooterBlock extends React.Component {


  handleClickFacebook = () => {
    window.location.href='http://facebook.com'
  }

  handleClickLinkedIn = () => {
    window.location.href='http://linkedin.com'
  }

  handleClickWhatsApp = () => {
    window.location.href='http://whatsapp.com'
  }

  handleClickInstagram = () => {
    window.location.href='http://instagram.com'
  }



  render() {

  return (
    
    <div className="FooterBlock">

    <div className="FooterContent">

      <div className="column">

        <h1>Storie</h1>
        <p>Lorem ipsum dolor sit amet,dasdasdasd Lorem ipsum dolor sit amet,dasdasdasd Lorem ipsum dolor sit amet,dasdasdasd Lorem ipsum dolor sit amet,dasdasdasd Lorem ipsum dolor sit amet,dasdasdasdLorem ipsum dolor sit amet,dasdasdasd Lorem ipsum dolor sit amet,dasdasdasd Lorem ipsum dolor sit amet,dasdasdasd Lorem ipsum dolor sit amet,dasdasdasd Lorem ipsum dolor sit amet,dasdasdasd</p>

      <div className="Icons">
        <FacebookIcon onClick={this.handleClickFacebook} style={{cursor: 'pointer'}} ></FacebookIcon>
        <LinkedInIcon onClick={this.handleClickLinkedIn} style={{cursor: 'pointer'}}></LinkedInIcon>
        <WhatsAppIcon onClick={this.handleClickWhatsApp} style={{cursor: 'pointer'}}></WhatsAppIcon>
        <InstagramIcon onClick={this.handleClickInstagram} style={{cursor: 'pointer'}}></InstagramIcon>

      </div>

      </div>

      <div className="columnExplore">

        <h1>Explore</h1>



          <a href="../../#Header">Home</a>


          <a href="../../#FrameContent">About us</a>


          <a href="../../#Content03">Services</a>


          <a href="../../#Content04">Contact</a>




      </div>

      <div className="columnLegal">

        <h1>Legal</h1>
        <p>Privacy Policy</p>
        <p>Terms of Use</p>
        <p>Contract</p>


      </div>

      <div className="column">

        <h1>Localization</h1>
        

        <div id='locMaps'>
        <Iframe src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ4fWW9VHYzZQRn4vCQ06LzGw&key=AIzaSyDgxhJeWomzXEmK91uHEK7kHXwsZLMDHik"
          width="450px"
          height="200px"
          frameborder="0"
          style="border:0"
          allowfullscreen/>
        </div>


        


      </div>


      </div>


    </div>
  );
}

}