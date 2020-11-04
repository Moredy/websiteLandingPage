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

      <h1>I' M MORED DOPE</h1>
      <p>WEB DEVELOPER</p>
      {//<button>COMPRAR ALGUMA COISA</button>
      }


    </div>
  );

}