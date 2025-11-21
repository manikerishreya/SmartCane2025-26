import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Login from "./Login";

import SlipBoyProfile from "./SlipBoyProfile";
import FarmerRegistration from "./FarmerRegistration";
import FarmerList from "./FarmerList";
import Home from "./Home";
import AdminProfile from "./AdminProfile";
import GetRequest from "./GetRequest";
import FarmerRequest from "./FarmerRequest";
import PlotsRecords from "./PlotsRecords";
import About from "./About";
import FarmerProfile from "./FarmerProfile";
import OfficerProfile from "./OfficerProfile";   // ✔ FIXED

function App() {
  return (
    <>
      {localStorage.getItem("role") && <Navbar />}

      <Routes>

        <Route path="/" element={<Home />} />

        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Farmer */}
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/FarmerList" element={<FarmerList />} />
        <Route path="/adminProfile/:username" element={<AdminProfile />} />
        <Route path="/officerProfile/:username" element={<OfficerProfile />} /> {/* ✔ CORRECT */}

        <Route path="/FarmerProfile" element={<FarmerProfile />} />
        <Route path="/GetRequest" element={<GetRequest />} />
        <Route path="/FarmerRegistration" element={<FarmerRegistration />} />

        {/* Slipboy */}
        <Route path="/slipBoyProfile" element={<SlipBoyProfile />} />
        <Route path="/FarmerRequest" element={<FarmerRequest />} />
        <Route path="/PlotsRecords" element={<PlotsRecords />} />
        <Route path="/About" element={<About />} />

      </Routes>
    </>
  );
}

export default App;
