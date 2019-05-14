import React, {Component} from 'react';
import './App.css';

import Main from './components/Main';
import Profile from './components/Profile';
import DiveSites from './components/DiveSites/DiveSites';
import NotFound from './components/NotFound';
import Callback from './components/Callback';
import NavBar from './components/NavBar/NavBar'

import {
  Route,
  Switch,
  Link
} from "react-router-dom";



class App extends Component {


  render(){

    return (
      <div className="App">
      <header className="App-header">
      <p>Welcome to  ScubaBook {this.props.name} </p>
      </header>
        <NavBar />
      <div>
      <Switch>
      <Route path="/" exact render={(props)=> <Main {...this.props}/> }/>
      <Route path="/callback" exact component={Callback} />
      <Route path="/profile"  render={(props)=> this.props.auth.isAuthenticated() ? <Profile {...this.props} /> : <NotFound {...this.props} />} />
      <Route path="/divesites"  render={(props)=> this.props.auth.isAuthenticated() ? <DiveSites {...this.props} /> : <NotFound {...this.props} />} />

      </Switch>
      </div>


      </div>
    );
  }
}

export default App;
