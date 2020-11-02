import logo from './logo.svg';
import './App.css';
import Header from './components/layout/Header/Header'
import Content from './components/layout/Content/Content'
import Content02 from './components/layout/Content02/Content02'
import Content03 from './components/layout/Content03/Content03'
import Content04 from './components/layout/Content04/Content04'
//import ButtonGroup from './components/layout/Widgets/ButtonGroup/ButtonGroup'
import FooterBlock from './components/layout/Footer/FooterBlock/FooterBlock'
import Footer from './components/layout/Footer/Footer'


function App() {
  return (

    
    <div className="App">
      <Header></Header>
      <Content></Content>
      <Content02></Content02>
      <Content03></Content03>
      <Content04></Content04>
      <FooterBlock></FooterBlock>
      <Footer></Footer>

    </div>
  );
}

export default App;
