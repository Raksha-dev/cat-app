import React from "react";
import Table from "./Components/Table";
import CatDetailPage from "./Components/CatDetailPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Table />} />
        <Route path="/breeds/:id" element={<CatDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;
