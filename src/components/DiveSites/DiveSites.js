import React, {Component} from 'react';



class DiveSites extends Component {
  render(){
    let profileData = this.props.auth.getProfile();
  return (
    <div>
      List of Dive sites HEre

    </div>
  );
}
}

export default DiveSites;
