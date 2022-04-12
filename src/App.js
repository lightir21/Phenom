import React, { useState, useEffect } from "react";

import Home from "./components/home/Home";

import "./app.scss";

function App() {
  const data = require("./employees.json");

  const [employees, setEmployees] = useState(data);
  return (
    <div className="App">
      <Home employees={employees} />
    </div>
  );
}

export default App;
