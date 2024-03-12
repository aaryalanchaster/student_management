import React, { useState } from "react";
import { Form, Button, Alert} from "react-bootstrap";

const ResultForm = ({ courses, students, onAddResult }) => {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedStudent, setSelectedStudent] = useState("");
  const [selectedScore, setSelectedScore] = useState("");
  const [success, setSuccess] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedCourse || !selectedStudent || !selectedScore) return;
    const courseName = selectedCourse;
    const studentName = selectedStudent; 
    const score = selectedScore;
    onAddResult(courseName, studentName, score);
    setSelectedCourse("");
    setSelectedStudent("");
    setSelectedScore("");
    setSuccess(true);
  };

  return (
    <div
      style={{
        border: "2px solid #ced4da",
        padding: "20px",
        borderRadius: "5px",
        marginTop: "5px",
      }}
    >
      <h2>Add New Result</h2>
      <Form onSubmit={handleSubmit}>
        {/* {error && <Alert variant="danger">{error}</Alert>} */}
        {success && <Alert variant="success">Result added successfully!</Alert>}
        <Form.Group controlId="courseName">
          <Form.Label>Course</Form.Label>
          <Form.Control
            as="select"
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
          >
            <option value="">Select course</option>
            {courses.map((course) => (
              <option key={course._id} value={course.name}>
                {course.name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="studentName">
          <Form.Label>Student</Form.Label>
          <Form.Control
            as="select"
            value={selectedStudent}
            onChange={(e) => setSelectedStudent(e.target.value)}
          >
            <option value="">Select student</option>
            {students.map((student) => (
              <option
                key={student._id}
                value={`${student.firstName} ${student.familyName}`}
              >
                {`${student.firstName} ${student.familyName}`}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="score" style={{ marginBottom: "20px" }}>
          <Form.Label>Score</Form.Label>
          <Form.Control
            as="select"
            value={selectedScore}
            onChange={(e) => setSelectedScore(e.target.value)}
          >
            <option value="">Select score</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
            <option value="F">F</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Result
        </Button>
      </Form>
    </div>
  );
};

export default ResultForm;
