

import React from "react";
import { Link } from "react-router-dom";


import { FaVoteYea, FaFileInvoice, FaTasks } from "react-icons/fa";
import { FaTractor, FaClipboardList, FaMapMarkedAlt, FaChartBar, FaSeedling } from "react-icons/fa";
import { GiPlantRoots, GiWheat, GiFarmer, GiChemicalTank } from "react-icons/gi"; 
import { TbPlant2 } from "react-icons/tb";     
import { LuMilk } from "react-icons/lu";       
import "./FarmerProfile.css";
import Navbar from "./Navbar";

const FarmerProfile = () => {
  return (
     <>
      <Navbar /> 
    <div className="dashboard-grid">

      {/* Soil Testing */}
      <Link to="/SoilTesting" className="dashboard-tile">
        <GiChemicalTank size={40} />
        <p>Soil Testing</p>
      </Link>

      {/* Fertilizer */}
      <Link to="/FarmerRequest" className="dashboard-tile">
        <GiPlantRoots size={40} />
        <p>Fertilizer</p>
      </Link>

      {/* Election Form */}
      <Link to="/ElectionForm" className="dashboard-tile">
        <FaVoteYea size={40} />
        <p>Election Form</p>
      </Link>

      {/* Sugar */}
      <Link to="/Sugar" className="dashboard-tile">
        <LuMilk size={40} />
        <p>Sugar</p>
      </Link>

      {/* FMB */}
      <Link to="/FMB" className="dashboard-tile">
        <GiWheat size={40} />
        <p>FMB</p>
      </Link>

      {/* Invoices */}
      <Link to="/Invoices" className="dashboard-tile">
        <FaFileInvoice size={40} />
        <p>View Invoices</p>
      </Link>

      {/* Seed Distribution */}
      <Link to="/SeedDistribution" className="dashboard-tile">
        <TbPlant2 size={40} />
        <p>Seed Distribution</p>
      </Link>

      {/* Field Task Planning */}
      <Link to="/FieldTask" className="dashboard-tile">
        <FaTasks size={40} />
        <p>Field Task Planning</p>
      </Link>

    </div>
    /</>
  );
};

export default FarmerProfile;
