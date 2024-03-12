
import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

const StudentForm = ({ onAddStudent }) => {
  const [firstName, setFirstName] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [dob, setDob] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName || !familyName || !dob) {
      setError("All fields are required.");
      return;
    }

    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    if (age < 10) {
      setError("Student must be at least 10 years old.");
      return;
    }

    onAddStudent({ firstName, familyName, dob });
    setFirstName("");
    setFamilyName("");
    setDob("");
    setError("");
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
      <h2>Add New Student</h2>
      <Form onSubmit={handleSubmit}>
        {error && <Alert variant="danger">{error}</Alert>}
        {success && (
          <Alert variant="success">Student added successfully!</Alert>
        )}
        <Form.Group controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="familyName">
          <Form.Label>Family Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter family name"
            value={familyName}
            onChange={(e) => setFamilyName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="dob" style={{ marginBottom: "20px" }}>
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default StudentForm;
