import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Tools from "./Pages/Tools";
import Services from "./Pages/Services";
import Gallery from "./Pages/Gallery";
import Login from "./Pages/Login";
import { AuthContextProvider } from "./context/AuthContext";
import HydrofoilSimulator from "./Tools/HydrofoilSimulator/HydrofoilSimulator";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <Router>
      <div>
        <AuthContextProvider>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/login" element={<Login />} />

            {/* {Protected Routes} */}
            <Route
              path="/flexible-hydrofoil-simulator"
              element={
                <ProtectedRoute>
                  <HydrofoilSimulator />
                </ProtectedRoute>
              }
            />
            
          </Routes>
        </AuthContextProvider>
      </div>
    </Router>
  );
}

export default App;
