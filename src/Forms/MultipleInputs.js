import React, { Component } from 'react'

export class MultipleInputs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isGoing: true,
      noOfGuests: 2
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    alert('Done')
    e.preventDefault();
  }

  render() {
    return (
      <div className="Component">
        <form onSubmit={this.handleSubmit}>
          <label>Is going:
            <input
              name="isGoing"
              type="checkbox"
              checked={this.state.isGoing}
              onChange={this.handleChange} />
          </label>
          <br />
          <label>No. of guests:
            <input
              name="noOfGuests"
              type="number"
              value={this.state.noOfGuests}
              onChange={this.handleChange} />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default MultipleInputs
