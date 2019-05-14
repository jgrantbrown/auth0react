import React, {Component} from 'react';



class Profile extends Component {
  render(){
    let profileData = this.props.auth.getProfile();
  return (
    <div>
      <a href="/">Home</a> <button onClick={this.props.auth.logout}>Logout</button>
      <p>{profileData.name}</p>
      <img src={profileData.picture} alt="profile"/>

    </div>
  );
}
}

export default Profile;
