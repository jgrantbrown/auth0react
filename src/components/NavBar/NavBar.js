import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

import "./NavBar.css"


class NavBar extends Component {

  render(){
    return (  <nav>
      <NavLink className="navItem" to="/">Home</NavLink>
      <NavLink className="navItem" to="/profile">Profile</NavLink>
      <NavLink className="navItem" to="/divesites">Dive Sites</NavLink>
      </nav>
    );
  }
}


export default NavBar;
