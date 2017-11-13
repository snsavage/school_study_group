import React, { Component } from 'react';

export default class Classrooms extends Component {
  render() {
    const { classrooms } = this.props;

    const classroomsList = classrooms.map((classroom, index) => {
      return (
        <li key={index}>
          {classroom.name} - {classroom.subject} - # {classroom.room}
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
