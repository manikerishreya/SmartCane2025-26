


import { useState } from "react";
import "./SlipBoylogin.css";


function SlipBoylogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const formBody = new URLSearchParams();
    formBody.append("username", username);
    formBody.append("password", password);

    try { 

      const res = await fetch("http://localhost:8888/officerLogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formBody.toString(),
        credentials: "include", 
      });

      if (res.ok || res.status === 302) {
       
        window.location.href = "/"; 
      } else {
        setError("Login failed");
      }
    } catch (err) {
      console.error(err);
      setError("Login failed");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
      {error && <p>{error}</p>}
    </form>
  );
}

export default SlipBoylogin;  