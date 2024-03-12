import React from "react";
import { Table } from "react-bootstrap";

const StudentList = ({ students }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Family Name</th>
          <th>Date of Birth</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{student.firstName}</td>
            <td>{student.familyName}</td>
            <td>{new Date(student.dob).toLocaleDateString()}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default StudentList;
