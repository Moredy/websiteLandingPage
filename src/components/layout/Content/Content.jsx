import React from 'react'
import './Content.css'
import FirstColumn from './FirstColumn/FirstColumn'
import FrameContent from './FrameContent/FrameContent'
import image01 from './method-draw-image.png'
import BoardDown from './BoardDown/BoardDown'




export default props => {

  return (
    <div id="Content" className="Content">
      <FirstColumn></FirstColumn>
      <BoardDown></BoardDown>
      <img className="imageTruck" src={image01}></img>

      <FrameContent></FrameContent>



    </div>
  );

}