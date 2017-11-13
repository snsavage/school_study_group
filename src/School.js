import React, { Component } from 'react';
import ClassroomForm from './ClassroomForm';
import Classrooms from './Classrooms';

export default class School extends Component {
  constructor(props) {
    super(props);

    this.state = {
      classrooms: [],
    }
  }

  addClassroom = (classroom) => {
    this.setState({
      classrooms: [...this.state.classrooms, classroom],
    })
  }

  render() {
    return (
      <div>
        <h1>School App</h1>
        <ClassroomForm onSubmit={this.addClassroom.bind(this)} />
        <Classrooms classrooms={this.state.classrooms} />
      </div>
    );
  }
}
