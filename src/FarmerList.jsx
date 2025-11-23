import React, { useEffect, useState } from "react";
import axios from "axios";
import "./FarmerList.css";

const FarmerList = () => {
  const [farmers, setFarmers] = useState([]);

  useEffect(() => {
    fetchFarmers();
  }, []);

  const fetchFarmers = async () => {
    try {
      const response = await axios.get("http://localhost:8888/FarmerList");
      setFarmers(response.data);
    } catch (error) {
      console.error("Error fetching farmer data:", error);
    }
  };

  return (
    <div className="farmer-list-container">
      <h2 className="table-title">Registered Farmers (Latest First)</h2>

      <div className="table-wrapper">
        <table className="farmer-table">
          <thead>
            <tr>
              <th>Sr</th>
              <th>Farmer Code</th>
              <th>Reg Date</th>
              <th>Plot Village</th>
              <th>Plot Village Code</th>
              <th>Gutt No</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Father Name</th>
              <th>Address</th>
              <th>Aadhar No</th>
              <th>DOB</th>
              <th>Phone</th>
              <th>Land Area</th>
              <th>Branch</th>
              <th>Account No</th>
              <th>PAN No</th>
              <th>Cane Variety</th>
              <th>Planting Date</th>
              <th>Irrigation</th>
              <th>Crop Type</th>
              <th>Spacing</th>
              <th>Water Source</th>
              <th>Planting Method</th>
              <th>River Belt</th>
              <th>Need Fertilizer</th>
            </tr>
          </thead>

          <tbody>
            {farmers.length > 0 ? (
              farmers.map((farmer, index) => (
                <tr key={farmer.srNo || index}>
                  <td>{index + 1}</td>
                  <td>{farmer.farmerCode}</td>
                  <td>{farmer.regDate}</td>
                  <td>{farmer.plotVillage}</td>
                  <td>{farmer.plotVillageCode}</td>
                  <td>{farmer.guttNo}</td>
                  <td>{farmer.farmerFName}</td>
                  <td>{farmer.farmerLName}</td>
                  <td>{farmer.fatherName}</td>
                  <td>{farmer.address}</td>
                  <td>{farmer.aadharNo}</td>
                  <td>{farmer.dob}</td>
                  <td>{farmer.phoneNo}</td>
                  <td>{farmer.landArea}</td>
                  <td>{farmer.branchName}</td>
                  <td>{farmer.accNo}</td>
                  <td>{farmer.panNo}</td>
                  <td>{farmer.caneVariety}</td>
                  <td>{farmer.plantingDate}</td>
                  <td>{farmer.irrigationType}</td>
                  <td>{farmer.cropType}</td>
                  <td>{farmer.spacing}</td>
                  <td>{farmer.sourceOfWater}</td>
                  <td>{farmer.plantingMethod}</td>
                  <td>{farmer.riverBelt}</td>
                  <td>{farmer.needFertilizer}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="26" className="no-data">
                  No Data Available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FarmerList;
