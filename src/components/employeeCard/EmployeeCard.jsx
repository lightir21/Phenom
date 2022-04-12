import React from "react";
import "./EmployeeCard.scss";
import { BsBuilding } from "react-icons/bs";

const EmployeeCard = () => {
  return (
    <div className="card">
      <img
        src="https://solarisstudios.com/wp-content/uploads/2016/10/Houston-Business-Headshot.jpg"
        alt="profile picture"
        className="card__img"
      />
      <h3 className="card__name">Amit Noa</h3>
      <p className="card__role">Global Chief Executive Office (CEO)</p>
      <div className="card__location">
        <BsBuilding className="card__location-icon" />
        <p className="card__location-text">New York, NY</p>
      </div>
    </div>
  );
};

export default EmployeeCard;
