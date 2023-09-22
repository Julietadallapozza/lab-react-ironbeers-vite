import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddBeerPage from "./pages/AddBeerPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="navbar" element={<Navbar />} />
        <Route path="addBeer" element={<AddBeerPage />} />
      </Routes>
    </div>
  );
}

export default App;
