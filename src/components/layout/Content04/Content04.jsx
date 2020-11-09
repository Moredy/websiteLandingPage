
import './Content04.css'
import './Content04Mobile.css'
import ContactForm from'../Widgets/ContactForm/ContactForm'
export default props => {

  let Content04 = "Content04"

  if (props.mobile) {
    Content04 = "Content04Mobile"
  }


  return (

    <div ref={props.scrollRef} id="Content04" className={Content04}>

      <ContactForm></ContactForm>

      </div>
    );
  }