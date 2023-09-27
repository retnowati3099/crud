import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import EditEmployee from "./pages/EditEmployee";
import AddEmployee from "./pages/AddEmployee";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-employee" element={<AddEmployee />} />
        <Route path="/edit-employee/id" element={<EditEmployee />} />
      </Routes>
    </>
  );
}

export default App;
