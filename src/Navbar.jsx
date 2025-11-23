


import React, { useEffect, useState } from "react";
import { FaUserCircle, FaPhoneAlt, FaMapMarkerAlt, FaTractor } from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [farmer, setFarmer] = useState(null);
const [slipboy, setSlipboy] = useState(null);
const [admin, setAdmin] = useState(null);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const role = localStorage.getItem("role");
  const phoneNo = localStorage.getItem("phoneNo");
const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");

  // --- FETCH FARMER PROFILE ---
useEffect(() => {
  if (role === "FARMER" && phoneNo) {
    const fetchFarmerProfile = async () => {
      try {
        const res = await fetch(`http://localhost:8888/farmerProfile/${phoneNo}`, {
          headers: { 
            "Content-Type": "application/json",
           "Authorization": `Bearer ${token}`
          },
        });

        if (!res.ok) throw new Error("Profile not found");
        const data = await res.json();
        setFarmer(data);
      } catch (err) {
        console.error("Error fetching farmer profile:", err);
      }
    };
    fetchFarmerProfile();
  }
  console.log("Token:", localStorage.getItem("token"));

}, [phoneNo, role]);


  // --- FETCH SLIPBOY PROFILE ---
  useEffect(() => {
    if (role === "OFFICER") {
      const fetchSlipBoy = async () => {
        try {
          if (!token) {
            console.error("Token missing. Please login.");
            return;
          }

          const res = await fetch("http://localhost:8888/officerProfile", {
            method: "GET",
            headers: {
              "Authorization": `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          });

          if (res.status === 403) {
            console.error("Access denied. Invalid token or insufficient permissions.");
            localStorage.clear();
            window.location.href = "/Login";
            return;
          }

          if (!res.ok) throw new Error("Slip Boy Profile not found");

          const data = await res.json();
          setSlipboy(data);
        } catch (err) {
          console.error("Error fetching slipboy profile:", err);
        }
      };

      fetchSlipBoy();
    }
  }, [role, token]);

  // --- NAVBAR LINKS ---
  const renderLinks = () => {
    if (role === "FARMER") {
      return (
        <>
          <Link to="/FarmerProfile">My Profile</Link>
          <Link to="/farmerRegistration">Plot Registration</Link>
          <Link to="/farmerList">My Plots</Link>
          <Link to="/geo">Geo View</Link>
          <Link to="/fieldTask">Field Task</Link>
           <Link to="/Login">Login</Link>
        </>
      );
    }
    if (role === "OFFICER") {
      return (
        <>
          <Link to="/slipBoyProfile">Slip Boy Profile</Link>
          <Link to="/generateSlip">Generate Slip</Link>
          <Link to="/viewRequests">Farmer Requests</Link>
          <Link to="/tripSheet">Trip Sheet</Link>
        </>
      );
    }
    if (role === "ADMIN") {
      return (
        <>
          <Link to="/adminProfile">Admin Dashboard</Link>
          <Link to="/manageUsers">Manage Users</Link>
          <Link to="/reports">Reports</Link>
           <Link to="/About">About</Link>
            <Link to="/Login">Login</Link>
        </>
      );
    }
    return (
      <>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Login">Login</Link>
      </>
    );
  };

  // --- SIDEBAR CONTENT ---
  const renderSidebarContent = () => {

    //FARMER
  if (role === "FARMER") {
  if (!farmer) return <p style={{ color: "red" }}>Profile not available</p>;

  return (
    <>
      <h3>{farmer.farmer_f_name} {farmer.farmer_l_name}</h3>
      <p className="role">Registered Farmer</p>
      <div className="profile-info">
        <p><FaPhoneAlt /> {farmer.phoneNo || "N/A"}</p>
        <p><FaMapMarkerAlt /> {farmer.farmer_village || "N/A"}</p>
        <p><FaTractor /> {farmer.landArea || "N/A"} acres</p>
        <p>🏢 {farmer.branchName || "N/A"}</p>
      </div>
    </>
  );
}





   if (role === "OFFICER") {
  const username = localStorage.getItem("username");

  if (!username) {
    return <p style={{ color: "red" }}>Profile not available. Please login or check permissions.</p>;
  }

  return (
    <>
      <h3>{username}</h3>
      <p className="role">{role}</p>
      <div className="profile-info">
        <p><FaPhoneAlt /> N/A</p>
        <p><FaMapMarkerAlt /> N/A</p>
        <p>🆔 ID: N/A</p>
      </div>
    </>
  );
}


    // if (role === "ADMIN") {
    //   return (
    //     <>
    //       <h3>ADMIN</h3>
    //       <p className="role">System Administrator</p>
    //     </>
    //   );
    // }


     if (role === "ADMIN") {
  const username = localStorage.getItem("username");

  if (!username) {
    return <p style={{ color: "red" }}>Profile not available. Please login or check permissions.</p>;
  }

  return (
    <>
      <h3>{username}</h3>
      <p className="role">{role}</p>
      <div className="profile-info">
        <p><FaPhoneAlt /> N/A</p>
        <p><FaMapMarkerAlt /> N/A</p>
        <p>🆔 ID: N/A</p>
      </div>
    </>
  );
}  
    return null;
  };

  return (
    <>
      {/* TOP NAVBAR */}
      <nav className="navbar">
        <div className="navbar-logo">
          <h2>SmartCane</h2>
        </div>

        <div className="navbar-links">
          {renderLinks()}
        </div>

        {/* PROFILE ICON */}
        {role && (
          <div className="profile-icon" onClick={() => setSidebarOpen(true)}>
            <FaUserCircle size={35} />
          </div>
        )}
      </nav>

      {/* SIDEBAR */}
      <div className={`profile-sidebar ${sidebarOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setSidebarOpen(false)}>
          ✖
        </button>

        <div className="profile-content">
          <img
            src="https://cdn-icons-png.flaticon.com/512/219/219970.png"
            alt="Avatar"
            className="profile-img"
          />

          {renderSidebarContent()}

          <div className="profile-actions">
            <button>Edit Profile</button>
            <button
              onClick={() => {
                localStorage.clear();
                window.location.href = "/Login";
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
