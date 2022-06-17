import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import CreateEmployee from "./pages/CreateEmployee";
import CurrentEmployees from "./pages/CurrentEmployees";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/create" element={<CreateEmployee />} />
        <Route path="/current" element={<CurrentEmployees />} />
      </Routes>
    </div>
  );
}

export default App;
