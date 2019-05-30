import React, {Component} from 'react';
import DiveSiteCard from './DiveSiteCard'
import { Card , CardGroup} from 'react-bootstrap';
import "./DiveSites.css"
import {Link} from "react-router-dom";

class DiveSites extends Component {
  constructor(props) {
      super(props);
    this.state ={
      divesites: [],
    };
  }

  // Make call to api for list of dive sites
componentWillMount(){
      const url = "http://localhost:3000/api/divesites"
      fetch(url)
      .then(res => res.json())
      .then(result =>  this.setState({
          divesites: result
      }) )
      .catch(() => console.log("Can't access " + url + " response. Blocked by browser"))
}

  render(){
  return (<div>
      List of Dive sites Here
      <CardGroup>
        {this.state.divesites.map(dive =>(
          <Card key={dive.id} style={{ width: '18rem' }}>
              <DiveSiteCard dive={dive} />
          </Card>
        ))}
      </CardGroup>

    </div>
  );
}
}

export default DiveSites;
