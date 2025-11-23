import React, { useEffect, useState } from "react";
import { FaUserCircle, FaPhoneAlt, FaMapMarkerAlt, FaTractor } from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [farmer, setFarmer] = useState(null);
  const [slipboy, setSlipboy] = useState(null);
  const [admin, setAdmin] = useState(null);
  const [lab, setLab] = useState(null);  
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const role = localStorage.getItem("role");
  const phoneNo = localStorage.getItem("phoneNo");
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");

  // =======================
  // FETCH FARMER PROFILE
  // =======================
  useEffect(() => {
    if (role === "FARMER" && phoneNo && token) {
      const fetchFarmerProfile = async () => {
        try {
          const res = await fetch(`http://localhost:8888/farmerProfile/${phoneNo}`, {
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`,
            },
          });

          if (res.status === 401) {
            localStorage.clear();
            window.location.href = "/Login";
            return;
          }

          const data = await res.json();
          setFarmer(data);
        } catch (err) {
          console.error("Error fetching farmer profile:", err);
        }
      };

      fetchFarmerProfile();
    }
  }, [phoneNo, role, token]);


  // =======================
  // FETCH OFFICER PROFILE
  // =======================
  useEffect(() => {
    if ((role === "OFFICER" || role === "ROLE_OFFICER") && token) {
      const fetchSlipBoy = async () => {
        try {
          const res = await fetch("http://localhost:8888/officerProfile", {
            headers: {
              "Authorization": `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          });

          if (res.status === 401) {
            localStorage.clear();
            window.location.href = "/Login";
            return;
          }

          const data = await res.json();
          setSlipboy(data);
        } catch (err) {
          console.error("Error fetching slipboy profile:", err);
        }
      };

      fetchSlipBoy();
    }
  }, [role, token]);


  // =======================
  // FETCH LAB PROFILE
  // =======================
  useEffect(() => {
    if ((role === "LAB" || role === "ROLE_LAB") && token) {
      const fetchLabProfile = async () => {
        try {
          const res = await fetch(`http://localhost:8888/lab/labProfile/${phoneNo}`, {
  headers: {
    "Authorization": `Bearer ${token}`,
    "Content-Type": "application/json",
  },
});


          if (res.status === 401) {
            localStorage.clear();
            window.location.href = "/Login";
            return;
          }

          const data = await res.json();
          setLab(data); 
        } catch (err) {
          console.error("Error fetching lab profile:", err);
        }
      };

      fetchLabProfile();
    }
  }, [phoneNo,role,token]);


  // =======================
  // NAVBAR LINKS BASED ON ROLE
  // =======================
  const renderLinks = () => {
    if (role === "FARMER") {
      return (
        <>
          <Link to="/FarmerProfile">My Profile</Link>
          <Link to="/farmerRegistration">Plot Registration</Link>
          <Link to="/farmerList">My Plots</Link>
          <Link to="/geo">Geo View</Link>
          <Link to="/fieldTask">Field Task</Link>
        </>
      );
    }

    if (role === "OFFICER" || role === "ROLE_OFFICER") {
      return (
        <>
          <Link to={`/officerProfile/${username}`}>Officer Dashboard</Link>
          <Link to="/generateSlip">Generate Slip</Link>
          <Link to="/viewRequests">Farmer Requests</Link>
          <Link to="/tripSheet">Trip Sheet</Link>
        </>
      );
    }

    if (role === "ADMIN" || role === "ROLE_ADMIN") {
      return (
        <>
          <Link to={`/adminProfile/${username}`}>Admin Dashboard</Link>
          <Link to="/manageUsers">Manage Users</Link>
          <Link to="/reports">Reports</Link>
          <Link to="/About">About</Link>
        </>
      );
    }

    if (role === "LAB" || role === "ROLE_LAB") {
      return (
        <>
          <Link to={`/labProfile/${username}`}>Lab Dashboard</Link>
          <Link to="/labRequests">Online Requests</Link>
          <Link to="/reports">Reports</Link>
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


  // =======================
  // SIDEBAR CONTENT
  // =======================
  const renderSidebarContent = () => {
    // FARMER
    if (role === "FARMER" && farmer) {
      return (
        <>
          <h3>{farmer.farmer_f_name} {farmer.farmer_l_name}</h3>
          <p className="role">Registered Farmer</p>

          <div className="profile-info">
            <p><FaPhoneAlt /> {farmer.phoneNo}</p>
            <p><FaMapMarkerAlt /> {farmer.farmer_village}</p>
            <p><FaTractor /> {farmer.landArea} acres</p>
            <p>🏢 {farmer.branchName}</p>
          </div>
        </>
      );
    }

    // LAB
   if ((role === "LAB" || role === "ROLE_LAB") && lab) {
  return (
    <>
      <h3>{lab.labAssistantName || "Lab Technician"}</h3>
      <p className="role">Lab Staff</p>

      <div className="profile-info">
        <p><FaPhoneAlt /> {lab.contactNumber || "N/A"}</p>
        <p><FaMapMarkerAlt /> {lab.labName || "N/A"}</p>
        <p>🔬 Lab ID: {lab.labId || "N/A"}</p>
      </div>
    </>
  );
}


    // OFFICER
    if (role === "OFFICER" || role === "ROLE_OFFICER") {
      return (
        <>
          <h3>{slipboy?.username}</h3>
          <p className="role">{slipboy?.role}</p>
        </>
      );
    }

    // ADMIN
    if (role === "ADMIN" || role === "ROLE_ADMIN") {
      return (
        <>
          <h3>{username}</h3>
          <p className="role">System Administrator</p>
        </>
      );
    }

    return <p>Profile not available</p>;
  };


  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <h2>SmartCane</h2>
        </div>

        <div className="navbar-links">
          {renderLinks()}
        </div>

        {role && (
          <div className="profile-icon" onClick={() => setSidebarOpen(true)}>
            <FaUserCircle size={35} />
          </div>
        )}
      </nav>

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
