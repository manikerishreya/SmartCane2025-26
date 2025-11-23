import React from "react";
import { Link } from "react-router-dom";

import { GiFertilizerBag, GiPlantRoots, GiFactory } from "react-icons/gi";
import { FaUsersCog, FaUserShield, FaClipboardCheck } from "react-icons/fa";

import "./AdminProfile.css";

const AdminProfile = () => {
  return (
    <div className="admin-dashboard-grid">

      <Link to="/GetRequest" className="admin-dashboard-tile">
        <GiFertilizerBag size={40} />
        <p>Fertilizer Allocation</p>
      </Link>

      <Link to="/admin/farmers" className="admin-dashboard-tile">
        <FaUsersCog size={40} />
        <p>Manage Farmers</p>
      </Link>

      <Link to="/admin/officers" className="admin-dashboard-tile">
        <FaUserShield size={40} />
        <p>Manage Officers</p>
      </Link>

      <Link to="/PlotsRecords" className="admin-dashboard-tile">
        <GiPlantRoots size={40} />
        <p>Plot Records</p>
      </Link>

      <Link to="/admin/factory" className="admin-dashboard-tile">
        <GiFactory size={40} />
        <p>Factory Stock</p>
      </Link>

      <Link to="/admin/reports" className="admin-dashboard-tile">
        <FaClipboardCheck size={40} />
        <p>Reports</p>
      </Link>

    </div>
  );
};

export default AdminProfile;
