import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const FarmerDetails = () => {
  const { phoneNo } = useParams();
  const [records, setRecords] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchFarmerRecords();
  }, [phoneNo]);

  const fetchFarmerRecords = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("Please login first");
        navigate("/login");
        return;
      }

      const res = await axios.get(
        `http://localhost:8888/farmerRecords/${phoneNo}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setRecords(res.data);
    } catch (err) {
      console.error("Error fetching farmer records:", err);
      alert("Unable to fetch farmer records. Make sure you are logged in.");
      navigate("/login");
    }
  };

  if (!records.length) return <p>Loading or no records found...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={() => navigate(-1)} style={{ marginBottom: "20px" }}>
        ← Back
      </button>
      <h2>Records for {records[0].farmerFName} {records[0].farmerLName}</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginTop: "15px" }}>
        {records.map((rec, index) => (
          <div key={index} style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "8px", backgroundColor: "#f9f9f9" }}>
            <p><strong>Plot Village:</strong> {rec.plotVillage}</p>
            <p><strong>Land Area:</strong> {rec.landArea}</p>
            <p><strong>Gutt No:</strong> {rec.guttNo}</p>
            <p><strong>Planting Date:</strong> {rec.plantingDate}</p>
            <p><strong>Cutting Date:</strong> {rec.cuttingDate || "N/A"}</p>
            <p><strong>Irrigation Type:</strong> {rec.irrigationType}</p>
            <p><strong>Crop Type:</strong> {rec.cropType}</p>
            <p><strong>Spacing:</strong> {rec.spacing}</p>
            <p><strong>River Belt:</strong> {rec.riverBelt}</p>
            <p><strong>Need Fertilizer:</strong> {rec.needFertilizer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FarmerDetails;
