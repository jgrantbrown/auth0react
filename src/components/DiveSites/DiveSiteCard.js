import React, {Component} from 'react';
import "./DiveSiteCard.css";
import {Link} from "react-router-dom";
import DiveSite from './DiveSite'
// HOw do we what link url to look
// Also need to persist and give id

// When link i clicked need to get show data for dive site id from API


class DiveSiteCard extends Component {



  render(){


    return (<div className="DiveSiteCard" key={this.props.dive.id}>
                <p>{this.props.dive.name}  Located:{this.props.dive.location}</p>
                <p>Description: {this.props.dive.description}</p>
                <Link className="divesiteshow" to={`/divesite/${this.props.dive.id}`}> More Details</Link>
                <p>Dynamicalluy pass divesite data to this render</p>
            </div>
    );
  }
}


export default DiveSiteCard;
