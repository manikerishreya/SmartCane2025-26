import { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const FarmerRequest = () => {
  const [que1, setQue1] = useState("");
  const [que2, setQue2] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (que1 !== "Yes") {
      alert("Since you selected 'No', the request will not be sent.");
      return;
    }


    const requestData = {
      que1: que1,
      que2: que2,
    };

    try {
      await axios.post(
        "http://localhost:8888/farmer/request",
        requestData,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );

      alert("Request submitted successfully!");
      setQue1("");
      setQue2("");

    } catch (error) {
      console.error("Error submitting request:", error);
      alert("Failed to submit request");
    }
  };

  return (
    <>
      <Navbar />

      <div style={{ padding: "20px", maxWidth: "500px", margin: "250px auto" }}>
        <h2 style={{ textAlign: "center" }}>Farmer Request Form</h2>

        <form onSubmit={handleSubmit}>

          {/* Question 1 */}
          <label style={{ fontWeight: "bold" }}>
            Do you want fertilizer?
          </label>
          <select
            value={que1}
            onChange={(e) => setQue1(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "10px",
           
              margin: "10px 0",
              borderRadius: "5px",
              border: "1px solid #333"
            }}
          >
            <option value="">-- Select Option --</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          {/* Question 2 only when YES */}
          {que1 === "Yes" && (
            <>
              <label style={{ fontWeight: "bold" }}>
                Select Payment Method
              </label>
              <select
                value={que2}
                onChange={(e) => setQue2(e.target.value)}
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  margin: "10px 0",
                  borderRadius: "5px",
                  border: "1px solid #333"
                }}
              >
                <option value="">-- Select Method --</option>
                <option value="Separately pay">Separately pay</option>
                <option value="Deduct from Bill">Deduct from Bill</option>
              </select>
            </>
          )}

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              background: "black",
              color: "white",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
              marginTop: "10px"
            }}
          >
            Submit
          </button>

        </form>
      </div>
    </>
  );
};

export default FarmerRequest;




