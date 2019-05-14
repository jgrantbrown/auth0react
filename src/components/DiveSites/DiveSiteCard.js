import React, {Component} from 'react';


class DiveSiteCard extends Component {

  render(){
    return (<div key={this.props.dive.id}>
                <p>{this.props.dive.name}  Located:{this.props.dive.location}</p>
                <p>Description: {this.props.dive.description}</p>
            </div>
    );
  }
}


export default DiveSiteCard;
