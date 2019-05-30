import React, {Component} from 'react';
import DiveSiteCard from './DiveSiteCard'
import { Card , CardGroup} from 'react-bootstrap';
import "./DiveSites.css"
import {Link} from "react-router-dom";

let divesites = [{id: 1, name:"The Blue Hole", location:"Belize", description:"BLAH BLAH"},{id: 2 ,name:"Aquarium", location: "Provenciales", description:"BLAH BLAH"},{id: 3 ,name:"The Wall", location: "Saba", description:"BLAH BLAH"}];
let diveInfo = divesites.map(dive=>{
                return  <Card key={dive.id} style={{ width: '18rem' }}>
                          <DiveSiteCard dive={dive} />
                        </Card>
                });


class DiveSites extends Component {
  constructor(props) {
      super(props);
    this.state ={
      divesites1: [],
    };
  }

  // Make call to api for list of dive sites
  componentWillMount(){
      const url = "http://localhost:3000/api/divesites"
      fetch(url)
      .then(res => res.json())
      .then(result =>  this.setState({
          divesites1: result
      }) )
      .catch(() => console.log("Can't access " + url + " response. Blocked by browser"))
}


  render(){
  return (<div>
      List of Dive sites Here
      <CardGroup>
        {diveInfo}
      </CardGroup>
      {this.state.divesites1.map(dive =>(
        <li key={dive.id}>{dive.name}</li>
      ))}
    </div>
  );
}
}

export default DiveSites;
