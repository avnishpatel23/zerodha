import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Funds from "./Funds";
import AddFunds from "./AddFunds";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/funds" element={<Funds />} />
        <Route path="/add-funds" element={<AddFunds />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
