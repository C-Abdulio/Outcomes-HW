import React, { Component } from 'react';
import NavBar from './components/NavBar';
import InfoBlock from './components/InfoBlock';
import Footer from './components/Footer';
// import Resume from './components/Resume';
import Modal from './components/Modal.js';
import Projects from './components/Projects';
import Slider from './components/Gallery/slider';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

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
      <div className="App">
        <NavBar/>
        <TransitionGroup>
          <CSSTransition
            timeout={300}
            classNames="fade"
          >
          <Switch>
            <Route exact path ="/" component={InfoBlock}/>
            <Route path ="/projects" component={Projects}/>
            <Route path ="/gallery" component={Slider}/>
          </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    );
  };
}

export default App;
