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
          className="home__horLine"
          style={{ width: `${employeeCards.length * 35 - 35}rem` }}
        />
      )}

      <div className={`${styles[style]}`}>
        {style === "vertical" && (
          <hr
            className={`home__${styles[style]}Line`}
            style={{ height: `${employeeCards.length * 35 - 35}rem` }}
          />
        )}
        {style === "horizontal" && (
          <div className="layer">
            {employeeCards.map(
              ({
                employee_name,
                business_title,
                region,
                profile_pic,
                subordinates,
                department,
                contact,
              }) => {
                return (
                  <>
                    <li className="home__node-item">
                      <EmployeeCard
                        name={employee_name}
                        role={business_title}
                        locationText={region}
                        profileImage={profile_pic}
                        department={department}
                        subordinates={subordinates}
                        style={style}
                        email={contact?.email}
                        profile={contact?.profile}
                        tel={contact?.tel}
                      />
                    </li>
                  </>
                );
              }
            )}
          </div>
        )}

        {style !== "horizontal" && (
          <>
            {employeeCards.map((employee) => {
              return (
                <>
                  <EmployeeCard
                    name={employee.employee_name}
                    role={employee.business_title}
                    locationText={employee.region}
                    profileImage={employee.profile_pic}
                    department={employee.department}
                    subordinates={employee.subordinates}
                    email={employee.contact?.email}
                    profile={employee.contact?.profile}
                    tel={employee.contact?.tel}
                  />
                </>
              );
            })}
          </>
        )}
      </div>
    </>
  );
};

export default EmployeeContainer;
