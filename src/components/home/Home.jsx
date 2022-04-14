import React from "react";
import { Tree, TreeNode } from "react-organizational-chart";

import EmployeeCard from "../employeeCard/EmployeeCard";

import "./home.scss";

const Home = ({ employees }) => {
  const EmployeeTreeGenerator = (employee) => {
    // if (employee.subordinates.length !== 0) {
    //   employee.subordinates.forEach((employee) => {
    //     if (employee.subordinates.length === 0) {
    //       noSubList.push(employee)
    //     } else {
    //       subList.push(employee)
    //     }
    //   })
    // }

    return (
      <TreeNode
        label={
          <EmployeeCard
            name={employee.employee_name}
            locationText={employee.region}
            role={employee.business_title}
            profileImage={employee.profile_pic}
            subordinates={employee.subordinates}
            department={employee.department}
          />
        }
      >
        {employee.subordinates &&
          employee.subordinates.map((subEmployee) => {
            return <TreeNode>{EmployeeTreeGenerator(subEmployee)}</TreeNode>;
          })}
      </TreeNode>
    );
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
