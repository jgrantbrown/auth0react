import React, {Component} from 'react';



class NotFound extends Component {
  render(){
  return (
    <div>
      <p> MUST BE LOGGED IN TO ACCESS THIS PAGE </p>
      <button onClick={this.props.auth.login}> Login </button>
    </div>
  );
}
}

export default NotFound;
