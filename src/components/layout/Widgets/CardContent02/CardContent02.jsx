import React from 'react'
import './CardContent02.css'
import './CardContent02Mobile.css'
import image01 from './image01.jpg'
import image02 from './thickLine.svg'

export default props => {

  let Card = "Card"
  let Frame = "Frame"
  let FrameBorder = "FrameBorder"
  let CardImage = "CardImage"
  let CardContent = "CardContent"
  let Title = "Title"
  let thickLine = "thickLine"
  let Paragraph = "Paragraph"

  if (props.mobile) {
    Card = "CardMobile"
    Frame = "FrameMobile"
    FrameBorder = "FrameBorderMobile"
    CardImage = "CardImageMobile"
    CardContent = "CardContentMobile"
    Title = "TitleMobile"
    thickLine = "thickLineMobile"
    Paragraph = "ParagraphMobile"
  }

  return (

    <div className={Card}>

      <div class={Frame}>
        <div class={FrameBorder}>

        <img className={CardImage} src={image01}></img>
        
        </div>
      </div>

      <div className={CardContent}>

        <div className={Title}>
          <h1>
            <strong>ABOUT MEE OI</strong>
            <img className={thickLine} src={image02}></img>
          </h1>
        </div>

        <div className={Paragraph}>
          <p>Lorem ipsum dolor sit amet,dasdasdasd Lorem ipsum dolor sit amet,dasdasdasd Lorem ipsum dolor sit amet,dasdasdasd Lorem ipsum dolor sit amet,dasdasdasd Lorem ipsum dolor sit amet,dasdasdasd  </p>
          <p>Cras eu ultrices sapien, vitae dignissim nulla. Pellentesque erat massa, consequat sed cursus quis, ullamcorper quis quam. Aenean lacinia dignissim metus semper convallis. In egestas ligula eu tempor imperdiet. Quisque pellentesque diam vitae lacus viverra, a blandit sem sollicitudin. Pellentesque consectetur, ipsum congue bibendum rhoncus, nunc arcu auctor augue, ut hendrerit arcu risus quis mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec gravida, lectus vel hendrerit euismod, ante nibh gravida turpis, et porttitor dui tortor et arcu. Maecenas ut dolor mi. Etiam elit urna, pellentesque ut hendrerit quis, rutrum sed justo.</p>
        </div>



      </div>
    </div>

  );

}