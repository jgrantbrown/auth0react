import React, {Component} from 'react';
import DiveSiteCard from './DiveSiteCard'

let divesites = [{id: 1, name:"The Blue Hole", location:"Belize", description:"BLAH BLAH"},{id: 2 ,name:"Aquarium", location: "Provenciales", description:"BLAH BLAH"}];
let diveInfo = divesites.map(dive=>{
                return  <DiveSiteCard key={dive.id} dive={dive} />
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
