import React from "react";
import logo from "./assets/logo.svg";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import { About } from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome</p>
      </header>
      <div>
        <Link to="/about">About</Link>
      </div>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
