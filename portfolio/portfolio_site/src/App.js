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
  constructor(props){
    super(props);
    this.state = {
      currentView: ''
    }
    this.setView = this.setView.bind(this)
  }

  getView(){//This will switch the views
  const view = this.state.currentView
    switch(view){
      case 'projects':
      return <Projects />
      case 'gallery':
      return <Slider />
      case 'resume':
      return <Modal />
      default:
      return <InfoBlock showModal = {this.setView}/>
    }
  }

  setView(view){
    this.setState({
      currentView: view
    })
  }



  render() {
    return (
      <div className="App">
        <NavBar changeProj  = {this.setView}/>
        {this.getView()}
        <Footer />
      </div>
    );
  };
}

export default App;
