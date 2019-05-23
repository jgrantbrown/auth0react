import React, {Component} from 'react';

import './Main.css';

class Main extends Component {
  render(){
  return (
    <div>
      <p>Here is a blurb about this site. Track your dives and explore new divesites
      </p>
      { !this.props.auth.isAuthenticated() &&
        <div>
          <hr/>Please login first
          <hr/>
          <button onClick={this.props.auth.login}> Login </button>
        </div>
      }
    </div>
  );
}
}

export default Main;
