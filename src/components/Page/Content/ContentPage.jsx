
import './ContentPage.css'
import './ContentPageMobile.css'
import Card from '../../layout/Widgets/CardContent02/CardContent02'

export default props => {

  let ContentPage = "ContentPage"

  if (props.mobile) {
    ContentPage = "ContentPageMobile"
  }


  return (

    <div id="ContentPage" className={ContentPage}>


      <Card
        mobile={props.mobile}
        imgUrl="https://source.unsplash.com/random/600x600?blossom"
        imgSize={{ height: 330, width: 300 }}
        title="Alo"
      >
        <p>Cras eu ultrices sapien, vitae dignissim nulla. Pellentesque erat massa, consequat sed cursus quis, ullamcorper quis quam. Aenean lacinia dignissim metus semper convallis. In egestas ligula eu tempor imperdiet. Quisque pellentesque diam vitae lacus viverra, a blandit sem sollicitudin. Pellentesque consectetur, ipsum congue bibendum rhoncus, nunc arcu auctor augue, ut hendrerit arcu risus quis mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec gravida, lectus vel hendrerit euismod, ante nibh gravida turpis, et porttitor dui tortor et arcu. Maecenas ut dolor mi. Etiam elit urna, pellentesque ut hendrerit quis, rutrum sed justo.</p>
        <p>PIROQUINHA</p>

      </Card>

      <Card
        mobile={props.mobile}
        imgUrl="https://source.unsplash.com/random/600x600?blossom"
        imgSize={{ height: 330, width: 300 }}
        title="Alo"
      >
        <p>Cras eu ultrices sapien, vitae dignissim nulla. Pellentesque erat massa, consequat sed cursus quis, ullamcorper quis quam. Aenean lacinia dignissim metus semper convallis. In egestas ligula eu tempor imperdiet. Quisque pellentesque diam vitae lacus viverra, a blandit sem sollicitudin. Pellentesque consectetur, ipsum congue bibendum rhoncus, nunc arcu auctor augue, ut hendrerit arcu risus quis mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec gravida, lectus vel hendrerit euismod, ante nibh gravida turpis, et porttitor dui tortor et arcu. Maecenas ut dolor mi. Etiam elit urna, pellentesque ut hendrerit quis, rutrum sed justo.</p>
        <p>PIROQUINHA</p>

      </Card>


    </div>
  );
}