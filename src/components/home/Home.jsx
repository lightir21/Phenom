import React from "react";

import EmployeeCard from "../employeeCard/EmployeeCard";

import "./home.scss";

const Home = ({ employees }) => {
  return (
    <div className="home">
      <EmployeeCard />
    </div>
  );
};

export default Home;
