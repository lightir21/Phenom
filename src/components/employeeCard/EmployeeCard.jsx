import React from "react";
import "./EmployeeCard.scss";
import { BsBuilding } from "react-icons/bs";

const EmployeeCard = ({
  name,
  role,
  locationText,
  profileImage,
  subordinates,
}) => {
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
