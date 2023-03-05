import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import TrendingPage from "./components/TrendingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:subject" element={<TrendingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
