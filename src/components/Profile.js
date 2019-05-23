import React, {Component} from 'react';
import {Link} from "react-router-dom";



class Profile extends Component {

  render(){

    let profileData = this.props.auth.getProfile();

  return (
    <div>

      <p>{profileData.name}</p>
      <img src={profileData.picture} alt="profile"/>
        <p> List of Previous Dives</p>
        <p> <Link to="/addDive">Add A Dive to Log </Link></p>

        <p> Should Open profile if one exists in API or create new profile</p>
    </div>
  );
}
}

export default Profile;
