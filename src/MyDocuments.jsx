import React, { useEffect, useState } from "react";
import "./MyDocuments.css";
import Navbar from "./Navbar";

export default function MyDocuments() {
  const [soilReports, setSoilReports] = useState([]);
  const [bills, setBills] = useState([]);

  const farmerMobile = localStorage.getItem("farmerMobile"); // change key if needed

  // Fetch Soil Reports
  const fetchSoilReports = async () => {
    try {
      const response = await fetch(
        `http://localhost:8888/soil-report/get-by-mobile/${farmerMobile}`
      );
      const data = await response.json();
      setSoilReports(data);
    } catch (err) {
      console.error("Error loading soil reports:", err);
    }
  };

  // Fetch Bills / Receipts
  const fetchBills = async () => {
    try {
      const response = await fetch(
        `http://localhost:8888/bills/get-by-mobile/${farmerMobile}`
      );
      const data = await response.json();
      setBills(data);
    } catch (err) {
      console.error("Error loading bills:", err);
    }
  };

  useEffect(() => {
    fetchSoilReports();
    fetchBills();
  }, []);

  return (
    <>
      <Navbar />

      <div className="documents-container">
        <h1 className="documents-title">My Documents</h1>

        {/* Soil Reports Section */}
        <section className="doc-section">
          <h2 className="section-title">Soil Testing Reports</h2>

          {soilReports.length === 0 ? (
            <p className="no-docs">No reports available.</p>
          ) : (
            <div className="docs-grid">
              {soilReports.map((report, index) => (
                <div key={index} className="doc-card">
                  <h3 className="doc-name">Report #{index + 1}</h3>
                  <p className="doc-date">Date: {report.date}</p>

                  <a
                    href={`http://localhost:8888/soil-report/download/${report.id}`}
                    className="download-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download Report
                  </a>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Bills / Receipts Section */}
        <section className="doc-section">
          <h2 className="section-title">Receipts & Bills</h2>

          {bills.length === 0 ? (
            <p className="no-docs">No bills available.</p>
          ) : (
            <div className="docs-grid">
              {bills.map((bill, index) => (
                <div key={index} className="doc-card">
                  <h3 className="doc-name">Bill #{index + 1}</h3>
                  <p className="doc-date">Amount: ₹{bill.amount}</p>

                  <a
                    href={`http://localhost:8888/bills/download/${bill.id}`}
                    className="download-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download Bill
                  </a>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </>
  );
}
