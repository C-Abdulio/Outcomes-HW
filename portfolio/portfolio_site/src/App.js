import React, { Component } from 'react';
import NavBar from './components/NavBar';
import InfoBlock from './components/InfoBlock';
import Footer from './components/Footer';
// import Resume from './components/Resume';
import Modal from './components/Modal.js';
import Projects from './components/Projects';
import Slider from './components/Gallery/slider';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

// const NewRoute = () => {
//   return(
//    <div>
//     <p>New Route</p>
//    </div>
//   )
// }

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Route exact path ="/" component={InfoBlock}/>
        <Route path ="/projects" component={Projects}/>
        <Route path ="/gallery" component={Slider}/>
        <Footer />
      </div>
      </BrowserRouter>
    );
  };
}

export default App;
