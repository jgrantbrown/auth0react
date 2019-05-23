import React, {Component} from 'react';
import "./DiveSiteCard.css";
import {Link} from "react-router-dom";

// HOw do we wnat link url to look
// Also need to oersist and give id


class DiveSiteCard extends Component {

  render(){
    return (<div className="DiveSiteCard" key={this.props.dive.id}>
                <p>{this.props.dive.name}  Located:{this.props.dive.location}</p>
                <p>Description: {this.props.dive.description}</p>
                <Link className="divesiteshow" to={`/divesite/${this.props.dive.id}`} > More Details</Link>
            </div>
    );
  }
}


export default DiveSiteCard;
