import ReactGA from 'react-ga';
import TagManager from 'react-gtm-module'
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import Home from '../pages/Home';
import Areas from './Areas';
import Equipo from './Equipo';
import Boletines from './Boletines';
import Contacto from './Contacto';
import Esp from '../lang/Esp.json'
import Eng from '../lang/Eng.json'
import BrEsp from '../assets/brochure.pdf'
import BrEng from '../assets/BROCHURER&A2019.pdf'
library.add(fab)


function initializeReactGA() {
  ReactGA.initialize('UA-45349405-1');
  ReactGA.pageview('/');
}

initializeReactGA()

const tagManagerArgs = {
  gtmId: 'GTM-PP2QRTD'
}

TagManager.initialize(tagManagerArgs)

class App extends Component {
  state = {
    data: Esp,
    idioma: "Esp",
    brochure: BrEsp
  }

  handleChangeIdioma = () => {
    this.state.idioma === "Esp" ?
    this.setState({
      data:Eng,
      idioma:"Eng"
    }
    )
    :
    this.setState({
      data:Esp,
      idioma:"Esp"
    }
    )
  }

  handleBrochure = (e) => {
    this.state.idioma === "Esp" ?

    this.setState({
      idioma:"Esp",
      brochure:BrEsp,
    })
    
    :

    this.setState({
      idioma:"Eng",
      brochure:BrEng,
    })

    console.log(this.state.brochure + " " + this.state.idioma);
  }

  render() { 
    return ( 
      <Router>
        <Navbar handleChangeIdioma={this.handleChangeIdioma}  handleBrochure={this.handleBrochure} idioma={this.state.idioma} data={this.state.data}/>


        {/* <Route exact path="/" component={() => < data={this.state.data}/>}/> */}
        <Route exact path="/" component={() => <Home data={this.state.data}/>}/>
        <Route path="/areas-de-servicio" component={() => <Areas data={this.state.data}/>}/>
        <Route path="/equipo" component={() => <Equipo data={this.state.data}/>}/>
        <Route path="/boletines" component={() => <Boletines data={this.state.data}/>}/>
        <Route path="/contacto" component={() => <Contacto data={this.state.data}/>}/>
        <Footer data={this.state.data}/>
      </Router>
     );
  }
}
 
export default App;
