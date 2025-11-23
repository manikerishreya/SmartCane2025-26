import { useState } from "react";
import axios from "axios";

export default function LabLogin() {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const sendOtp = async () => {
    let phone = mobile.trim();

    // validate number
    if (phone.length !== 10) {
      alert("Enter a valid 10-digit mobile number");
      return;
    }

    // convert to +91 format
    phone = "+91" + phone;

    try {
      const res = await axios.post(
        `http://localhost:8888/lab/send-otp?phoneNo=${phone}`
      );

      alert("OTP Sent!");
      setOtpSent(true);
    } catch (err) {
      alert("Mobile number not registered!");
      console.error(err);
    }
  };

  const verifyOtp = async () => {
    let phone = "+91" + mobile;

    try {
      const res = await axios.post(
        `http://localhost:8888/lab/verify-otp?phoneNo=${phone}&otp=${otp}`
      );

      if (res.data) {
        alert("Login Successful!");
        window.location.href = "/lab/dashboard";
      } else {
        alert("Invalid OTP!");
      }
    } catch (err) {
      alert("Invalid OTP!");
      console.error(err);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Lab Login</h2>

      {!otpSent ? (
        <>
          <input
            type="text"
            placeholder="Enter Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            style={styles.input}
          />

          <button onClick={sendOtp} style={styles.button}>
            Send OTP
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            style={styles.input}
          />

          <button onClick={verifyOtp} style={styles.button}>
            Verify OTP
          </button>
        </>
      )}
    </div>
  );
}

const styles = {
  container: {
    margin: "50px auto",
    maxWidth: "400px",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "10px",
    borderRadius: "8px",
    border: "1px solid #bbb",
  },
  button: {
    padding: "12px",
    background: "royalblue",
    color: "white",
    fontWeight: "bold",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};
