import React from 'react'
import './Content.css'
import './ContentMobile.css'
import FirstColumn from './FirstColumn/FirstColumn'
import FrameContent from './FrameContent/FrameContent'
import image01 from './method-draw-image.png'
import BoardDown from './BoardDown/BoardDown'




export default props => {

  let Content = "Content"
  let imageTruck = "imageTruck"
  let displayValue = "inline"

  if (props.mobile) {
    Content = "ContentMobile"
    imageTruck = "imageTruckMobile"
    displayValue = "none"
  }

  return (
    <div id="Content" className={Content}>
      <FirstColumn mobile={props.mobile}></FirstColumn>
      <BoardDown style={{display: "none"}}></BoardDown>
      <img className={imageTruck} src={image01}></img>

      <FrameContent scrollRef={props.scrollRef}></FrameContent>



    </div>
  );

}