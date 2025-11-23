import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const GetRequest = () => {
  const [requests, setRequests] = useState([]);
  const navigate = useNavigate();

  // Load pending requests
  const loadRequests = async () => {
    try {
      const token = localStorage.getItem("token");
      const role = localStorage.getItem("role");

      if (!token) {
        alert("Not authorized. Please login.");
        navigate("/"); // redirect to login
        return;
      }

      if (role !== "ROLE_OFFICER") {
        alert("You are not authorized to view requests.");
        navigate("/"); 
        return;
      }

      const response = await axios.get("http://localhost:8888/requests/pending", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setRequests(response.data);
      console.log("Pending requests:", response.data);
    } catch (err) {
      console.error("Error loading requests:", err.response?.data || err.message);
      alert("Failed to load requests");
    }
  };

  // Allocate fertilizer for a request
  const acceptRequest = async (phoneNo) => {
    try {
      const token = localStorage.getItem("token");
      const role = localStorage.getItem("role");

      if (!token) {
        alert("Not authorized. Please login again.");
        navigate("/");
        return;
      }

      if (role !== "ROLE_OFFICER") {
        alert("You are not authorized to allocate fertilizer.");
        return;
      }

      // Remove '+' if present; backend will prepend it
      const cleanPhone = phoneNo.startsWith("+") ? phoneNo.slice(1) : phoneNo;

      const response = await axios.post(
        `http://localhost:8888/allocate/${cleanPhone}`,
        {}, // no body needed
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      alert("Fertilizer Allocated Successfully");
      loadRequests(); // refresh pending requests
    } catch (err) {
      console.error("Error allocating:", err.response?.data || err.message);
      alert("Allocation failed: " + (err.response?.data || err.message));
    }
  };

  useEffect(() => {
    loadRequests();
  }, []);

  return (
    <>
      <Navbar />

      <div style={{ padding: "20px", marginTop: "120px" }}>
        <h2 style={{ marginBottom: "15px" }}>Pending Requests</h2>

        {requests.length === 0 ? (
          <p>No pending requests.</p>
        ) : (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {requests.map((req, index) => (
              <li
                key={req.phoneNo + "_" + index}
                style={{
                  background: "#f2f4ff",
                  marginBottom: "12px",
                  padding: "12px",
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span>📞 {req.phoneNo}</span>

                <button
                  onClick={() => acceptRequest(req.phoneNo)}
                  style={{
                    background: "#0a4cff",
                    color: "white",
                    border: "none",
                    padding: "8px 14px",
                    borderRadius: "6px",
                    cursor: "pointer",
                  }}
                >
                  Accept
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default GetRequest;
