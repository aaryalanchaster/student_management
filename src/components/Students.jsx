import React, { useState, useEffect } from "react";
import { Container, Alert } from "react-bootstrap";
import StudentForm from "./studentform";
import StudentList from "./studentlist";
import Navigation from "./navigation";
import axios from "axios";

const Students = () => {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/students");
      setStudents(response.data);
    } catch (error) {
      setError("Error fetching students");
    }
  };

  const handleAddStudent = async (newStudent) => {
    try {
      const response = await axios.post("http://localhost:5000/api/students", newStudent);
      setStudents([...students, response.data]);
    } catch (error) {
      setError("Error adding student");
    }
  };

  return (
    <div>
      <Navigation />
      <Container>
        {error && <Alert variant="danger">{error}</Alert>}
        <StudentForm onAddStudent={handleAddStudent} />
        <h2>All Students</h2>
        <StudentList students={students} />
      </Container>
    </div>
  );
};

export default Students;
