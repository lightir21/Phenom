import React from "react";
import "./EmployeeCard.scss";
import { BsBuilding } from "react-icons/bs";

const EmployeeCard = ({
  name,
  role,
  locationText,
  profileImage,
  subordinates,
  department,
}) => {
  const departmentColor = (department) => {
    if (department?.toLowerCase() === "analytics & strategic info") {
      return "#c10000";
    }
    if (department?.toLowerCase() === "asset/investment management") {
      return "#0071c3";
    }
    if (department?.toLowerCase() === "aviation") {
      return "#ffbf00";
    }
    if (department?.toLowerCase() === "capital modeling") {
      return "#d11490";
    }
  };

  return (
    <div className="card">
      <img
        src={profileImage}
        alt="profile picture"
        className="card__img"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src =
            "https://seattleheadshotpro.com/wp-content/uploads/2018/08/Thom-Seattle-Headshot-Pro-Professional-Headshots-corporate-headshots-seattle-500px.jpg";
        }}
        style={{ border: `3px solid ${departmentColor(department)}` }}
      />
      <h3 className="card__name">{name}</h3>
      <p className="card__role">{role}</p>
      <div className="card__location">
        <BsBuilding className="card__location-icon" />
        <p className="card__location-text">{locationText}</p>
      </div>
    </div>
  );
};

export default EmployeeCard;
