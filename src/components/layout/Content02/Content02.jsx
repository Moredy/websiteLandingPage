

import Link from '@material-ui/core/Link';
import Button from '../Widgets/ButtonContent03/Button';
import './Content02.css'
import './Content02Mobile.css'
import Card from '../Widgets/CardContent02/CardContent02'
import imagem from './block.jpg'
import { Component, useRef, useEffect } from 'react';
import MainMenu from '../Header/MainMenu/MainMenu';

export default props => {

  let Content02 = "Content02"

  if (props.mobile) {
    Content02 = "Content02Mobile"
  }


  
  return (

    <div ref={props.scrollRef} id="Content02" className={Content02}>


      <Card
        mobile={props.mobile}
        imgUrl={imagem}
        imgSize={{ height: 500, width: 300 }}
        title="Experiência em empresas como"
      >
        <p>Cras eu ultrices sapien, vitae dignissim nulla. Pellentesque erat massa, consequat sed cursus quis, ullamcorper quis quam. Aenean lacinia dignissim metus semper convallis. In egestas ligula eu tempor imperdiet. Quisque pellentesque diam vitae lacus viverra, a blandit sem sollicitudin. Pellentesque consectetur, ipsum congue bibendum rhoncus, nunc arcu auctor augue, ut hendrerit arcu risus quis mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec gravida, lectus vel hendrerit euismod, ante nibh gravida turpis, et porttitor dui tortor et arcu. Maecenas ut dolor mi. Etiam elit urna, pellentesque ut hendrerit quis, rutrum sed justo.</p>
</Card>

    </div>
  );
}