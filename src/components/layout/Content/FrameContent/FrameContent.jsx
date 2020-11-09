import React from 'react'
import './FrameContent.css'
import image01 from './moldura.png'



export default props => {

  return (
    <div ref={props.scrollRef} id="FrameContent" className="FrameContent">

      <img className="FrameImage" src={image01}></img>



    </div>
  );

}