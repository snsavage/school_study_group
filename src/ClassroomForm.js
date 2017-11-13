import React, { Component } from 'react';

export default class ClassroomForm extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      name: "",
      subject: "",
      room: "",
    }
    this.state = this.initialState;
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({[name]: value});
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.setState(this.initialState);
  }

  render() {
    return (
      <div>
        <h2>Classroom Form</h2>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label htmlFor="name">Classroom Name</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={(event) => this.handleChange(event)} />
          <br />

          <label htmlFor="subject">Classroom Subject</label>
          <input
            type="text"
            name="subject"
            value={this.state.subject}
            onChange={(event) => this.handleChange(event)} />
          <br />

          <label htmlFor="room">Room Number</label>
          <input
            type="text"
            name="room"
            value={this.state.room}
            onChange={(event) => this.handleChange(event)} />
          <br />

          <input type="submit" />
        </form>
      </div>
    );
  }
}
