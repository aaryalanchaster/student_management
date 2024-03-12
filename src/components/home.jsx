import React from "react";
import Navigation from "./navigation";

const Home = () => {
  return (
    <div>
      <Navigation />
      <div className="container">
        <h1>Welcome to Student Result Management System</h1>
        <p>Manage student data, courses, and results with ease!</p>
      </div>
    </div>
  );
};

export default Home;
