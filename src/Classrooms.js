import React, { Component } from 'react';

export default class Classrooms extends Component {
  handleOnClick = (id, event) => {
    this.props.onEdit(id);
  }

  render() {
    const { classrooms } = this.props;

    const classroomsList = classrooms.map((classroom, index) => {
      return (
        <li key={index}>
          {classroom.name} - {classroom.subject} - # {classroom.room}
          <button onClick={(event) => this.handleOnClick(classroom.id, event)}>
            Edit Classroom
          </button>
        </li>
      );
    });

    return (
      <ul>
        {classroomsList}
      </ul>
    );
  }
}
