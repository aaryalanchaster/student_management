import React, { useState, useEffect } from "react";
import Navigation from "./navigation";
import CourseForm from "./coursesform";
import CourseTable from "./courseslist";
import axios from "axios";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/courses");
      setCourses(response.data);
    } catch (error) {
      setError("Error fetching courses");
    }
  };

  const handleAddCourse = async (newCourseName) => {
    try {
      const response = await axios.post("http://localhost:5000/api/courses", {
        name: newCourseName,
      });
      setCourses([...courses, response.data]);
    } catch (error) {
      setError("Error adding course");
    }
  };

  return (
    <div>
      <Navigation />
      <div className="container">
      
        <CourseForm onAddCourse={handleAddCourse} />
        {error && <div className="alert alert-danger">{error}</div>}
        <h2>All Courses</h2>
        <CourseTable courses={courses} />
      </div>
    </div>
  );
};

export default Courses;
