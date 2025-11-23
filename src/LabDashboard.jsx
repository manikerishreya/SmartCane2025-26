// LabDashboard.jsx
import React, { useState } from "react";
import "./LabDashboard.css";

export default function LabDashboard({ lab }) {
  // Extract fields from lab object
  const {
    labId,
    labName,
    labAssistantName,
    contactNumber,
    labAddress,
    aboutLab,
    todayTasks = [],
    notifications: initialNotifications = [],
  } = lab || {};

  // STATES
  const [notifications, setNotifications] = useState(initialNotifications);
  const [newNotification, setNewNotification] = useState("");
  const [farmerMobile, setFarmerMobile] = useState("");

  // 🔥 File Upload Logic
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      alert("Selected File: " + file.name);
      // Later: Upload to backend
    }
  };

  // 🔥 Send Notification Logic
  const handleSendNotification = async () => {
    if (!farmerMobile.trim() || farmerMobile.length !== 10) {
      alert("Enter valid 10-digit farmer mobile number!");
      return;
    }

    if (!newNotification.trim()) {
      alert("Type a notification message!");
      return;
    }

    try {
      const response = await fetch("http://localhost:8888/labNotification/send-notification", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: newNotification,
          farmerMobile: farmerMobile,
        }),
      });

      if (response.ok) {
        alert("Notification sent successfully!");

        // Show message in UI instantly
        setNotifications((prev) => [...prev, newNotification]);

        // Clear inputs
        setNewNotification("");
        setFarmerMobile("");
      } else {
        alert("Failed to send notification.");
      }
    } catch (error) {
      alert("Error while sending notification.");
    }
  };

  return (
    <div className="lab-dashboard">
      {/* HEADER */}
      <header className="lab-header">
        <div>
          <h1 className="lab-title">{labName || "Lab Name"}</h1>
          <p className="lab-subtitle">Lab ID: {labId || "-"}</p>
        </div>

        <div className="lab-header-right">
          <div className="lab-info-chip">
            <span className="chip-label">Assistant</span>
            <span className="chip-value">{labAssistantName || "Assistant Name"}</span>
          </div>
          <div className="lab-info-chip">
            <span className="chip-label">Contact</span>
            <span className="chip-value">{contactNumber || "----"}</span>
          </div>
        </div>
      </header>

      {/* BODY */}
      <div className="lab-body">

        {/* SIDEBAR */}
        <aside className="lab-sidebar">

          {/* LAB DETAILS */}
          <section className="sidebar-section">
            <h2 className="sidebar-title">Lab Details</h2>
            <div className="sidebar-content">
              <p><strong>Lab Name:</strong> {labName || "-"}</p>
              <p><strong>Lab ID:</strong> {labId || "-"}</p>
              <p><strong>Assistant:</strong> {labAssistantName || "-"}</p>
              <p><strong>Contact:</strong> {contactNumber || "-"}</p>
              <p><strong>Address:</strong> {labAddress || "-"}</p>
            </div>
          </section>

          {/* PROFILE SETTINGS */}
          <section className="sidebar-section">
            <h2 className="sidebar-title">Profile Settings</h2>
            <ul className="sidebar-list">
              <li><button className="link-btn">Change password</button></li>
              <li><button className="link-btn">Update contact number</button></li>
              <li><button className="link-btn">Update lab address</button></li>
            </ul>
          </section>

          {/* ABOUT */}
          <section className="sidebar-section">
            <h2 className="sidebar-title">About Us</h2>
            <p className="sidebar-about">
              {aboutLab ||
                "We provide reliable and accurate soil testing services to help farmers improve crop yield."}
            </p>
          </section>

        </aside>

        {/* MAIN CONTENT */}
        <main className="lab-main">

          {/* Upload + View Reports */}
          <div className="card-row">

            {/* UPLOAD REPORTS */}
            <section className="lab-card">
              <h2 className="card-title">Upload Soil Testing Reports</h2>
              <p className="card-text">
                Upload soil testing reports and attach them to farmer profiles.
              </p>

              <input
                type="file"
                id="uploadReportInput"
                style={{ display: "none" }}
                onChange={handleFileUpload}
              />

              <button
                className="primary-btn"
                onClick={() => document.getElementById("uploadReportInput").click()}
              >
                Upload Report
              </button>
            </section>

            {/* VIEW REPORTS */}
            <section className="lab-card">
              <h2 className="card-title">View Reports</h2>
              <p className="card-text">
                Search and view all uploaded soil test reports.
              </p>
              <button className="secondary-btn">View All Reports</button>
            </section>

          </div>

          {/* Today Tasks + Notifications */}
          <div className="card-row">

            {/* TODAY TASKS */}
            <section className="lab-card half-card">
              <h2 className="card-title">Today Tasks</h2>

              {todayTasks.length === 0 ? (
                <p className="card-text">No tasks for today.</p>
              ) : (
                <ul className="list">
                  {todayTasks.map((task, idx) => (
                    <li key={idx} className="list-item">{task}</li>
                  ))}
                </ul>
              )}
            </section>

            {/* NOTIFICATIONS */}
            <section className="lab-card half-card">
              <h2 className="card-title">Notifications</h2>

              {notifications.length === 0 ? (
                <p className="card-text">No new notifications.</p>
              ) : (
                <ul className="list">
                  {notifications.map((note, idx) => (
                    <li key={idx} className="list-item">{note}</li>
                  ))}
                </ul>
              )}

              {/* Farmer Mobile Input */}
              <input
                type="text"
                placeholder="Enter Farmer Mobile Number"
                className="notification-input"
                value={farmerMobile}
                maxLength="10"
                onChange={(e) => setFarmerMobile(e.target.value)}
                style={{ marginTop: "10px" }}
              />

              {/* Message Input */}
              <input
                type="text"
                placeholder="Type notification message..."
                className="notification-input"
                value={newNotification}
                onChange={(e) => setNewNotification(e.target.value)}
                style={{ marginTop: "8px" }}
              />

              {/* Send Button */}
              <button
                className="primary-btn"
                style={{ marginTop: "10px" }}
                onClick={handleSendNotification}
              >
                Send Notification
              </button>

            </section>

          </div>
        </main>
      </div>
    </div>
  );
}
