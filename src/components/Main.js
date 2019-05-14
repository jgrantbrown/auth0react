import React, {Component} from 'react';

import './Main.css';

class Main extends Component {
  render(){
  return (
    <div>
      <p>Hello, {this.props.name}<br/>
      Visit Profile Page <a href='/profile'>Click here</a>
      </p>

      { !this.props.auth.isAuthenticated() &&
        <div>
          <hr/>Please login first
          <hr/>
          <button onClick={this.props.auth.login}> Login </button>
        </div> || <div>
          <button onClick={this.props.auth.logout}> Logout </button>
        </div>
      }
    </div>
  );
}
}

export default Main;
