import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FarmerCards = () => {
  const [farmers, setFarmers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchFarmers();
  }, []);

  const fetchFarmers = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("Please login first");
        navigate("/login");
        return;
      }

      const res = await axios.get("http://localhost:8888/FarmerList", {
        headers: { Authorization: `Bearer ${token}` },
      });

      // Remove duplicate farmers by phoneNo
      const uniqueFarmers = Array.from(
        new Map(res.data.map(f => [f.phoneNo, f])).values()
      );

      setFarmers(uniqueFarmers);
    } catch (err) {
      console.error("Error fetching farmers:", err);
      alert("Unable to fetch farmers. Please login.");
      navigate("/login");
    }
  };

  const handleClick = (phoneNo) => {
    navigate(`/farmerDetails/${phoneNo}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Farmers</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
        {farmers.length > 0 ? (
          farmers.map((farmer) => (
            <div
              key={farmer.phoneNo}
              onClick={() => handleClick(farmer.phoneNo)}
              style={{
                cursor: "pointer",
                border: "1px solid #ccc",
                padding: "15px",
                borderRadius: "8px",
                width: "200px",
                textAlign: "center",
                backgroundColor: "#f8f8f8",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
              }}
            >
              <h3>{farmer.farmerFName} {farmer.farmerLName}</h3>
              <p>{farmer.phoneNo}</p>
            </div>
          ))
        ) : (
          <p>No farmers available.</p>
        )}
      </div>
    </div>
  );
};

export default FarmerCards;
