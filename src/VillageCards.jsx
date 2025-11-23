import React from "react";
import { Link } from "react-router-dom";

const villages = ["Jaysingpur", "Shirol", "Nandani", "Umalwad"];

const VillageCards = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>Select Village</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "20px",
          padding: "20px",
        }}
      >
        {villages.map((village) => (
          <Link
            key={village}
            to={`/village/${village}`}
            style={{
              textDecoration: "none",
              background: "#e2e2e2",
              padding: "25px",
              textAlign: "center",
              borderRadius: "10px",
              fontSize: "20px",
              fontWeight: "bold",
              color: "#333",
            }}
          >
            {village}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VillageCards;
