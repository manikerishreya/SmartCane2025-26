import { useState } from "react";
import axios from "axios";

export default function LabRegister() {
  const [form, setForm] = useState({
    labName: "",
    labAssistantName: "",
    contactNumber: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    let mobile = form.contactNumber.trim();

    // Always save in +91 format
    if (!mobile.startsWith("+91")) {
      mobile = "+91" + mobile;
    }

    const payload = {
      ...form,
      contactNumber: mobile,
    };

    try {
      const res = await axios.post("http://localhost:8888/lab/add", payload);
      alert("Lab Registered Successfully!");
      console.log(res.data);

      setForm({
        labName: "",
        labAssistantName: "",
        contactNumber: "",
      });
    } catch (error) {
      console.error(error);
      alert("Error registering lab!");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Lab Registration</h2>

      <form style={styles.form} onSubmit={submitForm}>
        <input
          type="text"
          name="labName"
          placeholder="Lab Name"
          value={form.labName}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="labAssistantName"
          placeholder="Lab Assistant Name"
          value={form.labAssistantName}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="contactNumber"
          placeholder="Mobile Number"
          value={form.contactNumber}
          onChange={handleChange}
          required
        />

        <button type="submit">Register Lab</button>
      </form>
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
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
};
