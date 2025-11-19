import React from "react";
import { FaSeedling, FaUsers, FaTools, FaHandshake } from "react-icons/fa";

const About = () => {
  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "auto",
        padding: "30px",
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.7",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <h1 style={{ fontSize: "2.5rem", color: "#2c7a7b", marginBottom: "10px" }}>
          About Us
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#555" }}>
          Empowering Agriculture Through Technology
        </p>
      </div>

      {/* Who We Are */}
      <div style={{ marginBottom: "25px" }}>
        <h2 style={{ color: "#2f855a", fontSize: "1.8rem", marginBottom: "10px" }}>
          Who We Are
        </h2>
        <p style={{ color: "#444" }}>
          We are a dedicated team committed to transforming agriculture with smart,
          efficient digital solutions. Our platform serves farmers, officers, and
          administrators with transparency and reliability.
        </p>
      </div>

      {/* Vision */}
      <div style={{ marginBottom: "25px" }}>
        <h2 style={{ color: "#2f855a", fontSize: "1.8rem", marginBottom: "10px" }}>
          Our Vision
        </h2>
        <p style={{ color: "#444" }}>
          To create a fully digital, smart-farming ecosystem that boosts
          productivity and ensures fair and scalable support for every farmer.
        </p>
      </div>

      {/* Mission */}
      <div style={{ marginBottom: "25px" }}>
        <h2 style={{ color: "#2f855a", fontSize: "1.8rem", marginBottom: "15px" }}>
          Our Mission
        </h2>

        <ul style={{ listStyle: "none", padding: 0 }}>
          <li
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "12px",
              fontSize: "1.1rem",
            }}
          >
            <FaSeedling style={{ color: "#2f855a", fontSize: "20px" }} />
            Digitalize agricultural workflows
          </li>

          <li
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "12px",
              fontSize: "1.1rem",
            }}
          >
            <FaTools style={{ color: "#2f855a", fontSize: "20px" }} />
            Reduce manual paperwork and delays
          </li>

          <li
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "12px",
              fontSize: "1.1rem",
            }}
          >
            <FaUsers style={{ color: "#2f855a", fontSize: "20px" }} />
            Provide secure and transparent farmer services
          </li>

          <li
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "12px",
              fontSize: "1.1rem",
            }}
          >
            <FaHandshake style={{ color: "#2f855a", fontSize: "20px" }} />
            Build trust between farmers and officers
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
