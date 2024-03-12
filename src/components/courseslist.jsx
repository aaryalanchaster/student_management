import React from "react";
import { Table } from "react-bootstrap";

const CourseTable = ({ courses }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Course Name</th>
        </tr>
      </thead>
      <tbody>
        {courses.map((course, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{course.name}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CourseTable;
