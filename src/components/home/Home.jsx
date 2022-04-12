import React from 'react';
import EmployeeCard from '../employeeCard/EmployeeCard';
import { Tree, TreeNode } from 'react-organizational-chart';
import './home.scss';

const RecursiveComponent = ({ employee }) => {
  const hasChildrens = employee && employee.subordinates.length;
  console.log(hasChildrens);
  return (
    <TreeNode label={<div>{employee.employee_name}</div>}>
      {hasChildrens &&
        employee.subordinates.map((item) => {
          return (
            <RecursiveComponent key={item.employee_name} employee={employee} />
          );
        })}
    </TreeNode>
  );
};

const Home = ({ employees }) => {
  return (
    <Tree label={<div>{employees.employee_name}</div>}>
      <RecursiveComponent key={employees.employee_name} employee={employees} />
    </Tree>
  );
};

export default Home;
