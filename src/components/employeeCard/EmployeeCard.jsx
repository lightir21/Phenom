import React, { useState } from "react";
import "./EmployeeCard.scss";
import {
  BsBuilding,
  BsTelephone,
  BsEnvelopeFill,
  BsFillPersonFill,
} from "react-icons/bs";

const EmployeeCard = ({
  name,
  role,
  locationText,
  profileImage,
  subordinates,
  department,
  onClick,
  style,
  email,
  profile,
  tel,
}) => {
  const [isActice, setIsActive] = useState(null);

  const onClickActive = () => {
    return setIsActive(!isActice);
  };

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
    <>
      <div
        onClick={onClickActive}
        className={`card ${style === "horizontal" ? "home__node-item" : ""} `}
      >
        <div className="card__info">
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
        <div className={`card__icons-container ${isActice ? "active" : null}`}>
          <BsTelephone
            className="card__icon tel"
            onClick={() => {
              navigator.clipboard.writeText(tel);
            }}
          />
          <BsEnvelopeFill
            className="card__icon email"
            onClick={() => {
              navigator.clipboard.writeText(email);
            }}
          />
          <BsFillPersonFill
            className="card__icon profile"
            onClick={() => {
              navigator.clipboard.writeText(profile);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default EmployeeCard;
