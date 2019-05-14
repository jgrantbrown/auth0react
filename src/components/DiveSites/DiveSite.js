import React, {Component} from 'react';


class DiveSite extends Component {

  render(){
    return (<div key={this.props.dive.id}>
                <p>{this.props.dive.name}  Located:{this.props.dive.location}</p>
                <p>Description: {this.props.dive.description}</p>
            </div>
    );
  }
}


export default DiveSite;
