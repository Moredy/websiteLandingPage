import React from 'react'
import './BoardDown.css'
import ExpandMore from '@material-ui/icons/ExpandMore';

export default class BoardDown extends React.Component {

  handleClick = () => {
    window.location.href='/#FrameContent'
  }

  render() {
  return (
    <div className="BoarDown">
        <a href="#FrameContent">ABOUT ME ©</a>
        <ExpandMore onClick={this.handleClick} style={{ fontSize: 40 , cursor: 'pointer'}}></ExpandMore>
    </div>
  );
  }

}