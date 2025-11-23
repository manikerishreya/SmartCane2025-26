import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// COMMON
import Navbar from "./Navbar";
import Home from "./Home";
import Login from "./Login";
import About from "./About";

// FARMER MODULE
import FarmerRegistration from "./FarmerRegistration";
import FarmerList from "./FarmerList";
import FarmerProfile from "./FarmerProfile";
import GetRequest from "./GetRequest";
import FarmerRequest from "./FarmerRequest";
import PlotsRecords from "./PlotsRecords";
import MyDocuments from "./MyDocuments";

// ADMIN
import AdminProfile from "./AdminProfile";

// SLIP BOY
import SlipBoyProfile from "./SlipBoyProfile";

// OFFICER
import OfficerProfile from "./OfficerProfile";

// EXTRA (your friend's additions)
import FarmerCards from "./FarmerCards";
import FarmerDetails from "./FarmerDetails";
import VillageCards from "./VillageCards";
import VillageFarmers from "./VillageFarmers";

// PAYMENT
import FarmerPaymentForm from "./FarmerPaymentForm";
import PaymentSuccess from "./PaymentSuccess";

// LAB
import LabRegister from "./LabRegister";
import LabLogin from "./LabLogin";
import LabDashboard from "./LabDashboard";

// SOIL TESTING SUCCESS PAGE
import SoilReportSuccess from "./SoilReportSuccess";

function App() {
  const [labData, setLabData] = useState(null);

  useEffect(() => {
    const storedLab = localStorage.getItem("labData");
    if (storedLab) {
      setLabData(JSON.parse(storedLab));
    }
  }, []);

  return (
    <>
      {localStorage.getItem("role") && <Navbar />}

      <Routes>
        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* LOGIN */}
        <Route path="/login" element={<Login />} />

        {/* FARMER MODULE */}
        <Route path="/FarmerRegistration" element={<FarmerRegistration />} />
        <Route path="/FarmerList" element={<FarmerList />} />
        <Route path="/FarmerProfile" element={<FarmerProfile />} />
        <Route path="/GetRequest" element={<GetRequest />} />
        <Route path="/FarmerRequest" element={<FarmerRequest />} />
        <Route path="/PlotsRecords" element={<PlotsRecords />} />
        <Route path="/MyDocuments" element={<MyDocuments />} />

        {/* ADMIN */}
        <Route path="/AdminProfile" element={<AdminProfile />} />

        {/* SLIP BOY */}
        <Route path="/slipBoyProfile" element={<SlipBoyProfile />} />

        {/* OFFICER */}
        <Route path="/officerProfile/:username" element={<OfficerProfile />} />

        {/* EXTRA */}
        <Route path="/FarmerCards" element={<FarmerCards />} />
        <Route path="/farmerDetails/:phoneNo" element={<FarmerDetails />} />
        <Route path="/VillageCards" element={<VillageCards />} />
        <Route path="/village/:villageName" element={<VillageFarmers />} />

        {/* ABOUT */}
        <Route path="/About" element={<About />} />

        {/* PAYMENT */}
        <Route path="/payment" element={<FarmerPaymentForm />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />

        {/* LAB SYSTEM */}
        <Route path="/lab/register" element={<LabRegister />} />
        <Route path="/lab/login" element={<LabLogin />} />
        <Route path="/lab/dashboard" element={<LabDashboard lab={labData} />} />

        {/* SOIL TESTING → OPEN PAYMENT FORM */}
        <Route path="/SoilTesting" element={<FarmerPaymentForm />} />

        {/* SUCCESS PAGE */}
        <Route path="/soil/report/success" element={<SoilReportSuccess />} />
      </Routes>
    </>
  );
}

export default App;
