import React from 'react'
import './Portfolio.scss'
import image1 from './images/smed.jpg'
import image2 from './images/operador.jpg'
import image3 from './images/usinagem.jpg'
import image4 from './images/metrologia.jpg'
import image5 from './images/melhoria.jpg'
import image6 from './images/5s.jpg'
import image7 from './images/techmr.jpg'
import image8 from './images/especiais.jpg'
import image9 from './images/iscar.jpg'
import image10 from './images/consultorias.jpg'

import { useHistory } from "react-router-dom";




export default props => {

  let history = useHistory();

  function redirect  () {
    history.push('/allservices/service1')
  }

  function redirect2  () {
    history.push('/allservices/service2')
  }

  function redirect3  () {
    history.push('/allservices/service3')
  }

  function redirect4  () {
    history.push('/allservices/service4')
  }

  function redirect5  () {
    history.push('/allservices/service5')
  }

  function redirect6  () {
    history.push('/allservices/service6')
  }

  function redirect7  () {
    history.push('/allservices/service7')
  }

  function redirect8  () {
    history.push('/allservices/service8')
  }

  function redirect9  () {
    history.push('/allservices/service9')
  }

  function redirect10  () {
    history.push('allservices/service10')
  }

 //https://source.unsplash.com/random/600x600?summer

  return (

    <div className="Portfolio">


      <div class="wrapper01">
        <figure onClick={redirect} class="container">
          <txt>Implantação SMED</txt>
          <txt2></txt2>
          <img src={image1} alt=""></img>
        </figure>



        <figure onClick={redirect2} class="container">
        <txt>Programação/Operação CNC</txt>
          <txt2></txt2>
          <img src={image2} alt=""></img>
        </figure>

        <figure onClick={redirect3} class="container">
        <txt>Estudo de tempo de Usinagem</txt>
          <txt2></txt2>
          <img src={image3} alt=""></img>
        </figure>
        <figure onClick={redirect4} class="container">
        <txt>Treinamento Básico de Metrologia</txt>
          <txt2></txt2>
          <img src={image4} alt=""></img>
        </figure>
        <figure onClick={redirect5} class="container">
        <txt>Melhoria e Otimização de Processos</txt>
          <txt2></txt2>
          <img src={image5} alt=""></img>
        </figure>
        <figure onClick={redirect6} class="container">
        <txt>Introdução da Metodologia 5s</txt>
          <txt2></txt2>
          <img src={image6} alt=""></img>
        </figure>
        <figure onClick={redirect7} class="container">
        <txt>Representante das marcas TECHFER e MR - Ferramentas</txt>
          <txt2></txt2>
          <img src={image7} alt=""></img>
        </figure>
        <figure onClick={redirect8} class="container">
        <txt>Fabricação e recondicionamento de ferramentas especiais</txt>
          <txt2></txt2>
          <img src={image8} alt=""></img>
        </figure>
        <figure onClick={redirect9} class="container">
        <txt>Ferramentas de Usinagem Iscar</txt>
          <txt2></txt2>
          <img src={image9} alt=""></img>
        </figure>
        <figure onClick={redirect10} class="container">
        <txt>Consultorias</txt>
          <txt2></txt2>
          <img src={image10} alt=""></img>
        </figure>
      </div>

    </div>


  );

}