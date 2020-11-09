import React from 'react'
import './FirstColumn.css'
import './FirstColumnMobile.css'
//import Button from '@material-ui/core/Button';

export default props => {

  let FirstColumn = "FirstColumn"

  if (props.mobile) {
    FirstColumn = "FirstColumnMobile"
  }

  return (
    <div className={FirstColumn}>

      <h1>Eng. Maurício Marques</h1>
      <p>FERRAMENTAS DE USINAGEM</p>
        <p>/ OTIMIZAÇÃO E MELHORIA DE PROCESSOS</p>
      {//<button>COMPRAR ALGUMA COISA</button>
      }


    </div>
  );

}