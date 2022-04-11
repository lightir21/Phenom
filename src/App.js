import React, { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [employess, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      const res = await fetch("../public/employees.json");
      console.log(res);
      const data = await res.json();
      console.log(data);
    };
    fetchEmployees();
  }, []);

  return (
    <div className="App">
      <p>the div</p>
    </div>
  );
}

export default App;
