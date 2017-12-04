import React, { Component } from 'react';
import ClassroomForm from './ClassroomForm';
import Classrooms from './Classrooms';
import uuidV4 from 'uuid/v4';

export default class School extends Component {
  constructor(props) {
    super(props);

    this.state = {
      classrooms: [],
      editing: null,
    }
  }

  componentWillMount = () => {
    this.setState({
      classrooms: [
        ...this.state.classrooms,
        {id: uuidV4(), name: "First Room", subject: "Math", room: "1"},
        {id: uuidV4(),name: "Second Room", subject: "Chemistry", room: "2"},
      ]
    });
  }

  addClassroom = (classroom) => {
    this.setState({
      classrooms: [...this.state.classrooms, {id: uuidV4(), ...classroom}],
    })
  }

  editClassroom = (id) => {
    this.setState({
      editing: id,
    })
  }

  findClassroom = (id) => {
    return this.state.classrooms.find((el) => el.id === id);
  }

  render() {
    return (
      <div>
        <h1>School App</h1>
        <ClassroomForm
          onSubmit={this.addClassroom.bind(this)}
          editing={this.state.editing}
          classroom={this.findClassroom(this.state.editing)}
        />
        <Classrooms
          classrooms={this.state.classrooms}
          onEdit={this.editClassroom.bind(this)} />
      </div>
    );
  }
}
