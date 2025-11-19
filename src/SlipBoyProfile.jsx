import React from "react";
import "./SlipBoyProfile.css";

const SlipBoyProfile = () => {
  const username = localStorage.getItem("username");

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Slipboy Profile</h2>

      {username ? (
        <div className="profile-card">
          <p><strong>Username:</strong> {username}</p>
        </div>
      ) : (
        <p>No username found</p>
      )}

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default SlipBoyProfile;
