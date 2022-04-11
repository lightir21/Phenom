import React, { useState, useEffect } from "react";
import data from "./employees.json";

import "./App.css";

function App() {
  const [employess, setEmployees] = useState(data);
  console.log(employess);
  return (
    <div className="App">
      <p>the div</p>
    </div>
  );
}

export default App;
