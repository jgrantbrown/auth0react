import React, {Component} from 'react';
import "./DiveSiteCard.css"
class DiveSiteCard extends Component {

  render(){
    return (<div className="DiveSiteCard" key={this.props.dive.id}>
                <p>{this.props.dive.name}  Located:{this.props.dive.location}</p>
                <p>Description: {this.props.dive.description}</p>
            </div>
    );
  }
}


export default DiveSiteCard;
