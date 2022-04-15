import React, { useState, useEffect } from "react";
import { Tree, TreeNode } from "react-organizational-chart";

import EmployeeCard from "../employeeCard/EmployeeCard";

import "./home.scss";

const Home = ({ employees }) => {
  const [queryTerm, setQueryTerm] = useState("");
  const [query, setQuery] = useState(null);

  useEffect(() => {
    if (queryTerm) {
      const employee = employees.subordinates.filter(
        (employee) => employee.employee_name === queryTerm
      );
      setQuery(employee);
    }
  }, [queryTerm]);

  const handleClick = (employee) => {
    return setQueryTerm(employee.employee_name);
  };

  console.log(employees);
  return (
    <div className="home">
      <ul className="home__node-main">
        <li>
          <EmployeeCard
            name={employees.employee_name}
            locationText={employees.region}
            role={employees.business_title}
            profileImage={employees.profile_pic}
          />
        </li>
        <hr className="home__horLine" />
        <ul className="home__node-child">
          {employees.subordinates.map((employee) => {
            return (
              <li
                className="home__node-item"
                key={employee.employee_name}
                onClick={() => handleClick(employee)}
              >
                <EmployeeCard
                  name={employee.employee_name}
                  locationText={employee.region}
                  role={employee.business_title}
                  profileImage={employee.profile_pic}
                  department={employee.department}
                />
              </li>
            );
          })}
        </ul>
        {query && (
          <>
            <hr
              className="home__horLine"
              style={{ width: `${query[0].subordinates.length * 35 - 35}rem` }}
            />
          </>
        )}

        <ul className="home__node-child">
          {query &&
            query[0].subordinates.map((employee) => {
              return (
                <li className="home__node-item" key={employee.employee_name}>
                  <EmployeeCard
                    name={employee.employee_name}
                    locationText={employee.region}
                    role={employee.business_title}
                    profileImage={employee.profile_pic}
                    department={employee.department}
                  />
                </li>
              );
            })}
        </ul>
      </ul>
    </div>
  );
};

export default Home;
