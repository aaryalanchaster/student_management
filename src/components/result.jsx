import React, { useState, useEffect } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import ResultForm from "./resultform";
import ResultList from "./resultlist";
import axios from "axios";
import Navigation from "./navigation";

const AddResult = () => {
  const [courses, setCourses] = useState([]);
  const [students, setStudents] = useState([]);
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchResults();
  }, []);

  const fetchResults = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/results");
      setResults(response.data);
    } catch (error) {
      setError("Error fetching students");
    }
  };



  useEffect(() => {
    const fetchData = async () => {
      try {
        const coursesResponse = await axios.get(
          "http://localhost:5000/api/courses"
        );
        const studentsResponse = await axios.get(
          "http://localhost:5000/api/students"
        );
        setCourses(coursesResponse.data);
        setStudents(studentsResponse.data);
      } catch (error) {
        setError("Failed to fetch data");
      }
    };

    fetchData();
  }, []);

  const handleAddResult = async (courseName, studentName, score) => {
  try {
    const response = await axios.post("http://localhost:5000/api/results", {
      courseName,
      studentName,
      score,
    });
    setResults([...results, response.data]);
  } catch (error) {
    setError("Error adding result");
  }
};


  return (
    <div>
      <Navigation/>
      <Container>
        <Row>
          <Col>
          
            {error && <Alert variant="danger">{error}</Alert>}
            <ResultForm
              courses={courses}
              students={students}
              onAddResult={handleAddResult}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>All Results</h2>
            <ResultList results={results} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddResult;
