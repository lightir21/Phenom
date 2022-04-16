import React from "react";
import EmployeeCard from "../employeeCard/EmployeeCard";

const styles = {
  horizontal: "hor",
  vertical: "vert",
};

const EmployeeContainer = ({ employeeCards, index, style }) => {
  console.log(employeeCards.length);
  return (
    <>
      {style === "horizontal" && (
        <hr
          className={`home__${styles[style]}Line`}
          style={{ width: `${employeeCards.length * 35 - 15}rem` }}
        />
      )}

      <div className={`${styles[style]}`}>
        {style === "vertical" && (
          <hr
            className={`home__${styles[style]}Line`}
            style={{ height: `${employeeCards.length * 35 - 35}rem` }}
          />
        )}
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
              <>
                <EmployeeCard
                  name={employee_name}
                  role={business_title}
                  locationText={region}
                  profileImage={profile_pic}
                  department={department}
                  subordinates={subordinates}
                />
              </>
            );
          }
        )}
      </div>
    </>
  );
};

export default EmployeeContainer;
