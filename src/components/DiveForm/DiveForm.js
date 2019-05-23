import React, {Component} from 'react';
import "./DiveForm.css"

class DiveForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
            dive_no: null,
            date: "",
            location: "",
            time_in: "",
            time_out: "",
            PSI_start: null,
            PSI_end: null,
            weight_lbs: null,
            exporsure_protection: "",
            visibility: "",
            computer: "",
            tempature_air: "",
            tempature_surface: "",
            tempature_bottom: "",
            comments: "",
            };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // SHOULD READ UP ON AND IMPLEMNENT A DYNAMIC FOR THIS

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(event) {
    debugger
    console.log('A name was submitted: ' + this.state);

    event.preventDefault();
  }

  render() {
    return (
      <div className="formPage"> Dive Details:
      <form onSubmit={this.handleSubmit}>

        <div><label>
          Dive NO:
          <input type="text" name="dive_no"  value={this.state.value} onChange={this.handleChange} />
        </label></div>

        <div><label>
          Date:
          <input type="text" name="date" value={this.state.value} onChange={this.handleChange} />
        </label></div>

        <div><label>
          Location:
          <input type="text" name="location" value={this.state.value} onChange={this.handleChange} />
        </label></div>

        <div><label>
          Time In:
          <input type="text" name="time_in" value={this.state.value} onChange={this.handleChange} />
        </label></div>

        <div><label>
          Time Out:
          <input type="text" name="time_out "value={this.state.value} onChange={this.handleChange} />
        </label></div>

        <div><label>
          PSI START:
          <input type="text" name="PSI_start" value={this.state.value} onChange={this.handleChange} />
        </label></div>

        <div><label>
          PSI END:
          <input type="text" name="PSI_end" value={this.state.value} onChange={this.handleChange} />
        </label></div>

        <div><label>
          Weight(lbs):
          <input type="text" name="weight_lbs" value={this.state.value} onChange={this.handleChange} />
        </label></div>

        <div><label>
          Exposure Protection(notes):
          <input type="text" name="exporsure_protection" value={this.state.value} onChange={this.handleChange} />
        </label></div>

        <div><label>
          Visibility:
          <input type="text" name="visibility" value={this.state.value} onChange={this.handleChange} />
        </label></div>

        <div><label>
          Computer:
          <input type="text" name="computer" value={this.state.value} onChange={this.handleChange} />
        </label></div>

        <div><label>
          Tempature Air:
          <input type="text" name="tempature_air" value={this.state.value} onChange={this.handleChange} />
        </label></div>

        <div><label>
          Tempature Surface:
          <input type="text" name="tempature_surface" value={this.state.value} onChange={this.handleChange} />
        </label></div>


        <div><label>
          Tempature Bottom:
          <input type="text" name="tempature_bottom" value={this.state.value} onChange={this.handleChange} />
        </label></div>

        <div><label>
          Comments:
          <input type="text" name="comments" value={this.state.value} onChange={this.handleChange} />
        </label></div>





        <p>Add other items here. Need to adjust handle change and handle submit to be dynamic</p>

        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}


export default DiveForm;
