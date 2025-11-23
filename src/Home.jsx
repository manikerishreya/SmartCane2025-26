import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  const styles = {
    container: {
      width: "100%",
      minHeight: "100vh",
    backgroundImage: `url("https://images.unsplash.com/photo-1500382017468-9049fed747ef")`,

      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      position: "relative",
      paddingTop: "140px",
    },

    overlay: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(to right, rgba(0,0,0,0.75), rgba(0,0,0,0.4))",
      zIndex: 0,
    },

    header: {
  width: "100%",
  background: "#ffffff",
  padding: "20px 0",
  textAlign: "center",
  borderBottom: "2px solid #00000020",
  animation: "fadeIn 1s ease",
  marginTop: "70px",   // ADD THIS
},


    title: {
      fontSize: "52px",
      fontWeight: "800",
      color: "#fff",
      zIndex: 5,
      textAlign: "center",
      marginBottom: "25px",
    },

    highlight: {
      color: "#00c6ff",
    },

    card: {
      width: "480px",
      padding: "40px 30px",
      background: "rgba(255,255,255,0.12)",
      borderRadius: "12px",
      backdropFilter: "blur(12px)",
      boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
      textAlign: "center",
      zIndex: 5,
      animation: "slideUp 1s ease",
    },

    text: {
      color: "#f0f0f0",
      fontSize: "18px",
      marginBottom: "20px",
    },

    button: {
      padding: "14px 32px",
      background: "#ffffff",
      color: "#000",
      fontSize: "18px",
      border: "none",
      borderRadius: "8px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "0.3s",
    },

    buttonHover: {
      transform: "scale(1.06)",
    },

    animations: `
      @keyframes slideUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `,
  };

  return (
    <>
      {/* Animation styles */}
      <style>{styles.animations}</style>

      <Navbar />

      <header style={styles.header}>
        SHREE SANT DNYANESHWAR SAHAKARI SAKHAR KARKHANA LTD., KOLHAPUR
      </header>

      <div style={styles.container}>
        <div style={styles.overlay}></div>

        <h1 style={styles.title}>
          Welcome to <span style={styles.highlight}>SmartCane</span>
        </h1>

        <div style={styles.card}>
          <p style={styles.text}>
            Manage farmers, officers, plots, factory stock and insights in a smart digital platform.
          </p>

          <button style={styles.button}>Explore →</button>
        </div>
      </div>
    </>
  );
};

export default Home;
