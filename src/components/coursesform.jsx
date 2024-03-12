import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

const CourseForm = ({ onAddCourse }) => {
    const [courseName, setCourseName] = useState("");
    const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!courseName) return;
    onAddCourse(courseName);
      setCourseName("");
      setSuccess(true);
  };

  return (
    <div
      style={{
        border: "2px solid #ced4da",
        padding: "20px",
        borderRadius: "5px",
        marginTop:"5px"
      }}
    >
      <h2>Add New Course</h2>
      <Form onSubmit={handleSubmit}>
        {success && <Alert variant="success">Course added successfully!</Alert>}
        <Form.Group controlId="courseName" style={{ marginBottom: "20px" }}>
          <Form.Label>Course Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter course name"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Course
        </Button>
      </Form>
    </div>
  );
};

export default CourseForm;
