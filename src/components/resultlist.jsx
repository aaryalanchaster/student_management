import React from "react";
import { Table } from "react-bootstrap";

const ResultList = ({ results }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Course</th>
          <th>Student</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result) => (
          <tr key={result._id}>
            <td>{result.courseName}</td>
            <td>
              {result.studentName}
            </td>
            <td>{result.score}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ResultList;
