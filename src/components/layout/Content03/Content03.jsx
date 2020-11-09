
import './Content03.css'
import './Content03Mobile.css'
import Portfolio from '../Widgets/Portfolio/Portfolio'

export default props => {
  let Content03 = "Content03"

  if (props.mobile) {
    Content03 = "Content03Mobile"
  }


  return (

    <div ref={props.scrollRef} id="Content03" className={Content03}>

        <h1><strong>CONFIRA ALGUNS DE NOSSOS SERVIÇOS</strong></h1>

       <Portfolio></Portfolio>
  
      
      </div>
    );
  }