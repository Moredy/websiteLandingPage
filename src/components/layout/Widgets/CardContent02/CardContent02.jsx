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

 /* <Card mobile={props.mobile} imgUrl="" imgSize="300x300" title="Alo" text="" ></Card>*/

 console.log (props.imgUrl)
 console.log(props.imgSize.height)
 console.log(props.imgSize.width)
 console.log(props.title)
 console.log(props.text)

      console.log(props.text)
  return (

    <div className={Card}>

      <div class={Frame}>
        <div class={FrameBorder}>

        <img className={CardImage} src={props.imgUrl} style={{height: props.imgSize.height, width: props.imgSize.width}}></img>
        
        </div>
      </div>

      <div className={CardContent}>

        <div className={Title}>
          <h1>
            <strong>{props.title}</strong>
            <img className={thickLine} src={image02}></img>
          </h1>
        </div>

        <div className={Paragraph}>
          {props.children}

        </div>



      </div>
    </div>

  );

}