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
// import SoilTesting from "./SoilTesting";
import FarmerRequest from "./FarmerRequest";
// import ElectionForm from "./ElectionForm";
// import Sugar from "./Sugar";
// import FMB from "./FMB";
// import Invoices from "./Invoices";
// import SeedDistribution from "./SeedDistribution";
// import FieldTask from "./FieldTaskPlanning";
import PlotsRecords from "./PlotsRecords";
import About from "./About";
import FarmerProfile from "./FarmerProfile";

function App() {
  return (
    <>
      {/* Show navbar ONLY when user is logged in */}
      {localStorage.getItem("role") &&
      3- <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Farmer */}
     
        <Route path="/navbar" element={<Navbar />} />
         <Route path="/FarmerList" element={<FarmerList />} />
           <Route path="/AdminProfile" element={<AdminProfile />} />
             <Route path="/FarmerProfile" element={<FarmerProfile />} />
                <Route path="/GetRequest" element={<GetRequest />} />

 <Route path="/FarmerRegistration" element={<FarmerRegistration />} />
        {/* Slipboy */}
        <Route path="/slipBoyProfile" element={<SlipBoyProfile />} />
        <Route path="/FarmerRequest" element={<FarmerRequest />} />
        <Route path="/PlotsRecords" element={<PlotsRecords />} />
          <Route path="/About" element={<About />} />
  {/* <Route path="/Fertilizer" element={<Fertilizer />} />
  <Route path="/ElectionForm" element={<ElectionForm />} />
  <Route path="/Sugar" element={<Sugar />} />
  <Route path="/FBM" element={<FMB />} />
  <Route path="/Invoices" element={<Invoices />} />
  <Route path="/SeedDistribution" element={<SeedDistribution />} />
  <Route path="/FieldTask" element={<FieldTask />} /> */}
      </Routes>
    </>
  );
}

export default App;
