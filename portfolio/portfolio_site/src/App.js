import React, { Component } from 'react';
import NavBar from './components/NavBar';
import InfoBlock from './components/InfoBlock';
import Footer from './components/Footer';
import Resume from './components/Resume'
import Project1 from './components/Project1';
import Project2 from './components/Project2';
import Project3 from './components/Project3';
import Project4 from './components/Project4';
import Slider from './components/Gallery/slider';
import './App.css';

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
      case'game':
      return <Project1 />
      case'react':
      return <Project2 />
      case 'group':
      return <Project3 />
      case 'artfinga':
      return <Project4 />
      case 'gallery':
      return <Slider />
      default:
      return <Resume />
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
        <InfoBlock />
        {this.getView()}
        <Footer />
      </div>
    );
  };
}

export default App;
