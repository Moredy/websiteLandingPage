
import Link from '@material-ui/core/Link';
import Button from '../Widgets/ButtonContent03/Button';
import './Content02.css'
import './Content02Mobile.css'
import Card from '../Widgets/CardContent02/CardContent02'

export default props => {

  let Content02 = "Content02"

  if (props.mobile) {
    Content02 = "Content02Mobile"
  }


  return (

    <div id="Content02" className={Content02}>

       
       <Card mobile={props.mobile}></Card>
     

      </div>
    );
  }