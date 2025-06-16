import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />;
      </Routes>
    </div>
  );
};

export default App;
