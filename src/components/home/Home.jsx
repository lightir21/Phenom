import React from "react";

import "./home.scss";

const Home = ({ employees }) => {
  console.log(employees);
  const ceo = employees;
  const vp = employees.subordinates;
  const seniors = vp.map((person) => {
    return person?.subordinates;
  });
  const workers = seniors.map((person, i) => {
    return person?.map((ppl) => ppl?.subordinates);
  });

  return <div className="home"></div>;
};

export default Home;
