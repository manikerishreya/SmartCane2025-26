// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Login.css";

// const Login = () => {
//   const [role, setRole] = useState("");
//   const [step, setStep] = useState(1);
//   const [phone, setPhone] = useState("");
//   const [otp, setOtp] = useState("");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   // ------------------ SEND OTP (Farmer) ------------------
//   const sendOtp = async () => {
//     if (!phone) return alert("Please enter phone number");

//     const formattedPhone = phone.startsWith("+91") ? phone : `+91${phone}`;

//     try {
//       const res = await fetch("http://localhost:8888/generateotp", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ phoneNo: formattedPhone }),
//       });

//       const data = await res.text();
//       alert(data);

//       if (res.ok && data.includes("OTP Sent")) {
//         setPhone(formattedPhone); 
//         setStep(2);
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Error sending OTP");
//     }
//   };

//   // ------------------ VERIFY OTP (Farmer Login) ------------------
//   const verifyOtp = async () => {
//     if (!otp) return alert("Please enter OTP");

//     try {
//       const res = await fetch("http://localhost:8888/checkvalidotp", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ phoneNo: phone, otp: parseInt(otp) }),
//       });

//       if (!res.ok) {
//        const token = await res.text();
//         alert(errorText || "Invalid OTP");
//         return;
//       }

//       const data = await res.json();

//       localStorage.setItem("token", data.token);
//       localStorage.setItem("role", data.role);  
//       localStorage.setItem("username", data.username);
//       localStorage.setItem("phoneNo", phone);

//       navigate("/navbar");
//     } catch (err) {
//       console.error(err);
//       alert("Error verifying OTP");
//     }
//   };


//    const SendOtp = async () => {
//     if (!phone) return alert("Please enter phone number");

//     const formattedPhone = phone.startsWith("+91") ? phone : `+91${phone}`;

//     try {
//       const res = await fetch("http://localhost:8888/send-otp", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ phoneNo: formattedPhone }),
//       });

//       const data = await res.text();
//       alert(data);

//       if (res.ok && data.includes("OTP Sent")) {
//         setPhone(formattedPhone); 
//         setStep(2);
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Error sending OTP");
//     }
//   };

  

//     const Verifyotp = async () => {
//     if (!otp) return alert("Please enter OTP");

//     try {
//       const res = await fetch("http://localhost:8888/verify-otp", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ phoneNo: phone, otp: parseInt(otp) }),
//       });

//       if (!res.ok) {
//        const token = await res.text();
//         alert(errorText || "Invalid OTP");
//         return;
//       }

//       const data = await res.json();

//       localStorage.setItem("token", data.token);
//       localStorage.setItem("role", data.role);  
//       localStorage.setItem("username", data.username);
//       localStorage.setItem("phoneNo", phone);

//       navigate("/navbar");
//     } catch (err) {
//       console.error(err);
//       alert("Error verifying OTP");
//     }
//   };





//   // ------------------ ADMIN / OFFICER LOGIN ------------------
//   const handleLogin = async (e) => {
//   e.preventDefault();
//   let loginUrl = role === "OFFICER" ? "http://localhost:8888/officerLogin" : "http://localhost:8888/adminlogin";

//   try {
//     const res = await fetch(loginUrl, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ username, password }),
//     });

//     if (!res.ok) {
//       const errorText = await res.text();
//       alert(errorText || "Invalid username or password");
//       return;
//     }

//     const data = await res.json(); 
//     localStorage.setItem("token", data.token);
//     localStorage.setItem("username", username);
//     localStorage.setItem("role", role === "OFFICER" ? "ROLE_OFFICER" : "ROLE_ADMIN");

//     navigate(role === "OFFICER" ? `/officerProfile/${username}` : `/adminProfile/${username}`);
//   } catch (err) {
//     console.error("Login error:", err);
//     alert("Server not reachable");
//   }
// };


//   return (
//     <div className="login-page">
//       <div className="login-wrapper">

//         {/* --------- ROLE SELECTION --------- */}
//         {!role && (
//           <div className="role-selection">
//             <h2>Select Role</h2>
//             <div className="role-boxes">
//               <div className="role-box farmer" onClick={() => setRole("FARMER")}>Farmer</div>
//               <div className="role-box slipboy" onClick={() => setRole("OFFICER")}>SlipBoy</div>
//               <div className="role-box admin" onClick={() => setRole("ADMIN")}>Admin</div>
//                  <div className="role-box admin" onClick={() => setRole("LAB")}>Lab</div>
//             </div>
//           </div>
//         )}

//         {/* --------- FARMER LOGIN (OTP) --------- */}
//         {role === "FARMER" && step === 1 && (
//           <div className="login-box">
//             <h2>Farmer Login</h2>
//             <input
//               type="text"
//               placeholder="Phone Number"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//             />
//             <button onClick={sendOtp}>Send OTP</button>
//           </div>
//         )}

//         {role === "FARMER" && step === 2 && (
//           <div className="login-box">
//             <h2>Enter OTP</h2>
//             <input
//               type="text"
//               placeholder="OTP"
//               value={otp}
//               onChange={(e) => setOtp(e.target.value)}
//             />
//             <button onClick={verifyOtp}>Verify OTP</button>
//           </div>
//         )}


//  {role === "LAB" && step === 1 && (
//           <div className="login-box">
//             <h2>Farmer Login</h2>
//             <input
//               type="text"
//               placeholder="Phone Number"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//             />
//             <button onClick={Sendtp}>Send OTP</button>
//           </div>
//         )}
//          {role === "LAB" && step === 2 && (
//           <div className="login-box">
//             <h2>Enter OTP</h2>
//             <input
//               type="text"
//               placeholder="OTP"
//               value={otp}
//               onChange={(e) => SendOtp(e.target.value)}
//             />
//             <button onClick={VerifyOtp}>Verify OTP</button>
//           </div>
//         )}

//         {/* --------- OFFICER & ADMIN LOGIN --------- */}
//         {(role === "OFFICER" || role === "ADMIN") && (
//           <form onSubmit={handleLogin} className="login-box">
//             <h2>{role} Login</h2>
//             <input
//               type="text"
//               placeholder="Username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <button type="submit">Login</button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Login;










import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [role, setRole] = useState("");
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // ---------------------- SEND OTP (COMMON) ----------------------
  const sendOtpGeneric = async (url) => {
    if (!phone) return alert("Please enter phone number");

    const formattedPhone = phone.startsWith("+91") ? phone : `+91${phone}`;

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phoneNo: formattedPhone }),
      });

      const data = await res.text();
      alert(data);

      if (res.ok && data.includes("OTP")) {
        setPhone(formattedPhone);
        setStep(2);
      }
    } catch (err) {
      console.error(err);
      alert("Error sending OTP");
    }
  };

  // ---------------------- VERIFY OTP (COMMON) ----------------------
  const verifyOtpGeneric = async (url) => {
    if (!otp) return alert("Please enter OTP");

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phoneNo: phone, otp: parseInt(otp) }),
      });

      if (!res.ok) {
        const errText = await res.text();
        alert(errText || "Invalid OTP");
        return;
      }

      const data = await res.json();

      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);
      localStorage.setItem("username", data.username);
      localStorage.setItem("phoneNo", phone);

      navigate("/navbar");
    } catch (err) {
      console.error(err);
      alert("Error verifying OTP");
    }
  };

  // ---------------------- ADMIN / OFFICER LOGIN ----------------------
  const handleLogin = async (e) => {
    e.preventDefault();

    let loginUrl =
      role === "OFFICER"
        ? "http://localhost:8888/officerLogin"
        : "http://localhost:8888/adminlogin";

    try {
      const res = await fetch(loginUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) {
        const errorText = await res.text();
        alert(errorText || "Invalid username or password");
        return;
      }

      const data = await res.json();

      localStorage.setItem("token", data.token);
      localStorage.setItem("username", username);
      localStorage.setItem(
        "role",
        role === "OFFICER" ? "ROLE_OFFICER" : "ROLE_ADMIN"
      );

      navigate(
        role === "OFFICER"
          ? `/officerProfile/${username}`
          : `/adminProfile/${username}`
      );
    } catch (err) {
      console.error("Login error:", err);
      alert("Server not reachable");
    }
  };

  return (
    <div className="login-page">
      <div className="login-wrapper">

        {/* ---------- STEP 1: SELECT ROLE ---------- */}
        {!role && (
          <div className="role-selection">
            <h2>Select Role</h2>

            <div className="role-boxes">
              <div className="role-box farmer" onClick={() => {setRole("FARMER"); setStep(1);}}>
                Farmer
              </div>

              <div className="role-box slipboy" onClick={() => {setRole("OFFICER");}}>
                SlipBoy
              </div>

              <div className="role-box admin" onClick={() => {setRole("ADMIN");}}>
                Admin
              </div>

              <div className="role-box admin" onClick={() => {setRole("LAB"); setStep(1);}}>
                Lab
              </div>
            </div>
          </div>
        )}

        {/* ---------- FARMER OTP LOGIN ---------- */}
        {role === "FARMER" && step === 1 && (
          <div className="login-box">
            <h2>Farmer Login</h2>
            <input
              type="text"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <button onClick={() => sendOtpGeneric("http://localhost:8888/generateotp")}>
              Send OTP
            </button>
          </div>
        )}

        {role === "FARMER" && step === 2 && (
          <div className="login-box">
            <h2>Enter OTP</h2>
            <input
              type="text"
              placeholder="OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button onClick={() => verifyOtpGeneric("http://localhost:8888/checkvalidotp")}>
              Verify OTP
            </button>
          </div>
        )}

        {/* ---------- LAB OTP LOGIN ---------- */}
        {role === "LAB" && step === 1 && (
          <div className="login-box">
            <h2>Lab Login</h2>
            <input
              type="text"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <button onClick={() => sendOtpGeneric("http://localhost:8888/send-otp")}>
              Send OTP
            </button>
          </div>
        )}

        {role === "LAB" && step === 2 && (
          <div className="login-box">
            <h2>Enter OTP</h2>
            <input
              type="text"
              placeholder="OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button onClick={() => verifyOtpGeneric("http://localhost:8888/verify-otp")}>
              Verify OTP
            </button>
          </div>
        )}

        {/* ---------- ADMIN & OFFICER LOGIN ---------- */}
        {(role === "OFFICER" || role === "ADMIN") && (
          <form onSubmit={handleLogin} className="login-box">
            <h2>{role} Login</h2>

            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
