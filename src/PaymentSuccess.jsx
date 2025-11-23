export default function PaymentSuccess() {
  return (
    <div style={{
      width: "100%",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f5f5f5",
      padding: "20px"
    }}>
      <div style={{
        backgroundColor: "white",
        padding: "30px",
        borderRadius: "10px",
        width: "400px",
        textAlign: "center",
        boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
      }}>
        
        <h2 style={{ color: "green" }}>✔ Payment Successful</h2>
        
        <p style={{ fontSize: "16px", marginTop: "15px" }}>
          Your request has been submitted successfully.
        </p>

        <p style={{ fontSize: "16px", marginTop: "10px" }}>
          Our soil collection staff will visit your farm soon to collect the soil sample.
        </p>

        <p style={{ fontSize: "16px", marginTop: "10px", color: "#555" }}>
          You will receive updates once the testing is completed.
        </p>

        <a
          href="/"
          style={{
            marginTop: "20px",
            display: "inline-block",
            padding: "10px 20px",
            backgroundColor: "green",
            color: "white",
            borderRadius: "5px",
            textDecoration: "none"
          }}
        >
          Go to Home
        </a>
      </div>
    </div>
  );
}
