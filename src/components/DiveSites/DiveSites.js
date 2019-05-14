import React, {Component} from 'react';
import DiveSite from './DiveSite'

let divesites = [{name:"The Blue Hole", location:"Belize", description:"BLAH BLAH"},{name:"Aquarium", location: "Provenciales", description:"BLAH BLAH"}];
let diveInfo = divesites.map(dive=>{
                return  <DiveSite dive={dive} />
                });

class DiveSites extends Component {


  // Make call to api for list of dive sites
  componentWillMount(){

  }

  render(){
  return (<div>
      List of Dive sites Here
      <ul>
        {diveInfo}
      </ul>
    </div>
  );
}
}

export default DiveSites;
