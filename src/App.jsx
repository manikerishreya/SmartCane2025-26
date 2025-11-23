import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

// COMMON
import Navbar from "./Navbar";
import Home from "./Home";
import Login from "./Login";
import About from "./About";

// FARMER
import FarmerRegistration from "./FarmerRegistration";
import FarmerList from "./FarmerList";
import FarmerProfile from "./FarmerProfile";
import GetRequest from "./GetRequest";
import FarmerRequest from "./FarmerRequest";
import PlotsRecords from "./PlotsRecords";
import MyDocuments from "./MyDocuments";   // ⭐ Added

// ADMIN
import AdminProfile from "./AdminProfile";

// SLIP BOY
import SlipBoyProfile from "./SlipBoyProfile";

// PAYMENT
import FarmerPaymentForm from "./FarmerPaymentForm";
import PaymentSuccess from "./PaymentSuccess";

// LAB
import LabRegister from "./LabRegister";
import LabLogin from "./LabLogin";
import LabDashboard from "./LabDashboard";   // ⭐ Added

// SOIL TESTING (You will NOT use SoilTestingForm now)
// import SoilTestingForm from "./SoilTestingForm";
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

        {/* FARMER LOGIN */}
        <Route path="/login" element={<Login />} />

        {/* FARMER PAGES */}
        <Route path="/FarmerRegistration" element={<FarmerRegistration />} />
        <Route path="/FarmerList" element={<FarmerList />} />
        <Route path="/FarmerProfile" element={<FarmerProfile />} />
        <Route path="/GetRequest" element={<GetRequest />} />
        <Route path="/FarmerRequest" element={<FarmerRequest />} />
        <Route path="/PlotsRecords" element={<PlotsRecords />} />

        {/* ⭐ MY DOCUMENTS PAGE */}
        <Route path="/MyDocuments" element={<MyDocuments />} />

        {/* ADMIN */}
        <Route path="/AdminProfile" element={<AdminProfile />} />

        {/* SLIP BOY */}
        <Route path="/slipBoyProfile" element={<SlipBoyProfile />} />

        {/* ABOUT */}
        <Route path="/About" element={<About />} />

        {/* PAYMENT */}
        <Route path="/payment" element={<FarmerPaymentForm />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />

        {/* LAB SYSTEM */}
        <Route path="/lab/register" element={<LabRegister />} />
        <Route path="/lab/login" element={<LabLogin />} />
        <Route path="/lab/dashboard" element={<LabDashboard lab={labData} />} />

        {/* ⭐ SOIL TESTING → OPENS FarmerPaymentForm */}
        <Route path="/SoilTesting" element={<FarmerPaymentForm />} />

        {/* SUCCESS PAGE */}
        <Route path="/soil/report/success" element={<SoilReportSuccess />} />
      </Routes>
    </>
  );
}

export default App;
