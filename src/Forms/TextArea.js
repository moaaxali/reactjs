import React, { Component } from 'react'

export class TextArea extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value })
  }

  handleSubmit(e) {
    alert(`Your message: ${this.state.value}`);
    e.preventDefault();
  }

  render() {
    return (
      <div className="Component">
        <form onSubmit={this.handleSubmit}>
          <label>Message
            <textarea value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default TextArea
