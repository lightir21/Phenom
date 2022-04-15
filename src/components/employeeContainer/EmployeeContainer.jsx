import React from "react";
import EmployeeCard from "../employeeCard/EmployeeCard";

const styles = {
  horizontal: "hor",
  vertical: "vert",
};

const EmployeeContainer = ({ employeeCards, index, style }) => {
  console.log(employeeCards);
  return (
    <div className={`${styles[style]}`}>
      {employeeCards.map(
        ({
          employee_name,
          business_title,
          region,
          profile_pic,
          subordinates,
          department,
        }) => {
          return (
            <EmployeeCard
              name={employee_name}
              role={business_title}
              locationText={region}
              profileImage={profile_pic}
              department={department}
              subordinates={subordinates}
            />
          );
        }
      )}
    </div>
  );
};

export default EmployeeContainer;
