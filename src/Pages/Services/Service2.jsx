
import './Services.css'
import Card from '../../components/layout/Widgets/CardContent02/CardContent02'
import image from '../../components/layout/Widgets/Portfolio/images/operador.jpg'

export default props => {

  let Service = "Service"

  if (props.mobile) {
    Service = "ServiceMobile"
  }


  return (

    <div id="Service" className={Service}>

      <div className="ServicesCards">

      <Card id="Programacao"
        mobile={props.mobile}
        imgUrl={image}
        imgSize={{ height: 300, width: 300 }}
        title="Programação/Operação CNC"
      >
        <p>Cras eu ultrices sapien, vitae dignissim nulla. Pellentesque erat massa, consequat sed cursus quis, ullamcorper quis quam. Aenean lacinia dignissim metus semper convallis. In egestas ligula eu tempor imperdiet. Quisque pellentesque diam vitae lacus viverra, a blandit sem sollicitudin. Pellentesque consectetur, ipsum congue bibendum rhoncus, nunc arcu auctor augue, ut hendrerit arcu risus quis mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec gravida, lectus vel hendrerit euismod, ante nibh gravida turpis, et porttitor dui tortor et arcu. Maecenas ut dolor mi. Etiam elit urna, pellentesque ut hendrerit quis, rutrum sed justo.</p>

      </Card>



      </div>


    </div>
  );
}