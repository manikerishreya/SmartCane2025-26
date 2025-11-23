import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const GetRequest = () => {
  const [requests, setRequests] = useState([]);

  const loadRequests = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(
        "http://localhost:8888/admin/requests/pending",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setRequests(response.data);
    } catch (err) {
      console.error("Error loading requests:", err);
    }
  };

  const acceptRequest = async (phoneNo) => {
    try {
      const token = localStorage.getItem("token");

      // ✅ Strip the "+" before sending to backend
      const cleanPhone = phoneNo.replace("+", "");

      await axios.post(
        `http://localhost:8888/admin/allocate/${cleanPhone}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Fertilizer Allocated Successfully");

      loadRequests(); // reload list
    } catch (err) {
      console.error("Error allocating:", err);
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
            {requests.map((req) => (
              <li
                key={req.id}
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
