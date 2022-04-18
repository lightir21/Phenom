import React, { useState, useEffect } from "react";
import EmployeeContainer from "../employeeContainer/EmployeeContainer";
import EmployeeCard from "../employeeCard/EmployeeCard";

import "./home.scss";

const Home = ({ employees }) => {
  const [managerSubs, setManagerSubs] = useState(null);
  const [expandedManager, setExpandedManager] = useState(null);

  const managerClicked = (employees, employee) => {
    if (employee === expandedManager) {
      setManagerSubs(null);
      setExpandedManager(null);
      return;
    }
    setManagerSubs(employees);
    setExpandedManager(employee);
  };

  return (
    <div className="home">
      <ul className="home__node-main">
        <li>
          <EmployeeCard
            name={employees.employee_name}
            locationText={employees.region}
            role={employees.business_title}
            profileImage={employees.profile_pic}
            email={employees?.contact?.email}
            profile={employees?.contact?.profile}
            tel={employees?.contact?.tel}
          />
        </li>
        <hr
          className="home__horLine"
          style={{ width: `${employees.subordinates.length * 35 - 35}rem` }}
        />
        <ul className="home__node-child">
          <div className="layer">
            {employees.subordinates.map((employee) => {
              return (
                <li
                  className="home__node-item"
                  key={employee.employee_name}
                  onClick={() => managerClicked(employee.subordinates)}
                >
                  <EmployeeCard
                    name={employee.employee_name}
                    locationText={employee.region}
                    role={employee.business_title}
                    profileImage={employee.profile_pic}
                    department={employee.department}
                    email={employee?.contact?.email}
                    profile={employee?.contact?.profile}
                    tel={employee?.contact?.tel}
                  />

                  {!managerSubs && (
                    <EmployeeContainer
                      employeeCards={employee.subordinates}
                      style="vertical"
                    />
                  )}
                </li>
              );
            })}
          </div>
          {managerSubs && (
            <>
              <EmployeeContainer
                employeeCards={managerSubs}
                style="horizontal"
              />
            </>
          )}
        </ul>
      </ul>
    </div>
  );
};

export default Home;
