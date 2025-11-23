import axios from "axios";
import { useState } from "react";
import "./SoilTestingForm.css";

export default function SoilTestingForm() {

  const [formData, setFormData] = useState({
    requestId: "",
    labId: "",
    labAssistantId: "",

    phSalt: "",
    phSaltRating: "",
    phosphorus: "",
    phosphorusRating: "",
    potassium: "",
    potassiumRating: "",
    calcium: "",
    calciumRating: "",
    magnesium: "",
    magnesiumRating: "",
    sodium: "",
    sodiumRating: "",
    organicMatter: "",
    phWater: "",
    nitrate: "",

    sulfur: "",
    sulfurRating: "",
    zinc: "",
    zincRating: "",
    manganese: "",
    manganeseRating: "",
    iron: "",
    ironRating: "",
    copper: "",
    copperRating: "",
    boron: "",
    boronRating: "",

    soilTexture: "",
    cationExchange: "",
    electricalConductivity: "",

    cropName: "",
    recNitrogen: "",
    recPhosphorus: "",
    recPotassium: "",
    recZinc: "",
    recSulfur: "",
    recBoron: "",

    effectiveNeutralizingMaterial: "",
    effectiveMagnesium: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const saveReport = async () => {
    try {
      const response = await axios.post("http://localhost:8888/soil-report/save", formData);
      const reportId = response.data.reportId;

      alert(`Report Saved Successfully! (Request ID: ${formData.requestId})`);

      generatePdf(reportId);

    } catch (error) {
      alert("Error saving soil report!");
      console.log(error);
    }
  };

  const generatePdf = async (reportId) => {
    try {
      const res = await axios.get(`http://localhost:8888/soil-report/generate/${reportId}`);
      const pdfPath = res.data;

      const fileName = pdfPath.split("/").pop(); // extract file name

      // ⭐ Redirect to the success page
      window.location.href = `/soil/report/success?reqId=${formData.requestId}&pdf=${fileName}`;

    } catch (error) {
      alert("Error generating PDF!");
      console.log(error);
    }
  };

  return (
    <div className="compact-container">

      <h2 className="compact-title">Soil Testing Report Entry</h2>

      {/* BASIC DETAILS */}
      <h4>Basic Details</h4>
      <div className="compact-grid">
        <input name="requestId" onChange={handleChange} placeholder="Request ID" />
        <input name="labId" onChange={handleChange} placeholder="Lab ID" />
        <input name="labAssistantId" onChange={handleChange} placeholder="Assistant ID" />
      </div>

      {/* MACRO NUTRIENTS */}
      <h4>Macro Nutrients</h4>
      <div className="compact-grid">
        <input name="phSalt" onChange={handleChange} placeholder="pH Salt" />
        <input name="phSaltRating" onChange={handleChange} placeholder="Rating" />
        <input name="phosphorus" onChange={handleChange} placeholder="Phosphorus" />
        <input name="phosphorusRating" onChange={handleChange} placeholder="Rating" />
        <input name="potassium" onChange={handleChange} placeholder="Potassium" />
        <input name="potassiumRating" onChange={handleChange} placeholder="Rating" />
        <input name="calcium" onChange={handleChange} placeholder="Calcium" />
        <input name="calciumRating" onChange={handleChange} placeholder="Rating" />
        <input name="magnesium" onChange={handleChange} placeholder="Magnesium" />
        <input name="magnesiumRating" onChange={handleChange} placeholder="Rating" />
        <input name="sodium" onChange={handleChange} placeholder="Sodium" />
        <input name="sodiumRating" onChange={handleChange} placeholder="Rating" />
        <input name="organicMatter" onChange={handleChange} placeholder="Organic Matter (%)" />
        <input name="phWater" onChange={handleChange} placeholder="pH Water" />
        <input name="nitrate" onChange={handleChange} placeholder="Nitrate" />
      </div>

      {/* MICRO NUTRIENTS */}
      <h4>Micro Nutrients</h4>
      <div className="compact-grid">
        <input name="sulfur" onChange={handleChange} placeholder="Sulfur" />
        <input name="sulfurRating" onChange={handleChange} placeholder="Rating" />
        <input name="zinc" onChange={handleChange} placeholder="Zinc" />
        <input name="zincRating" onChange={handleChange} placeholder="Rating" />
        <input name="manganese" onChange={handleChange} placeholder="Manganese" />
        <input name="manganeseRating" onChange={handleChange} placeholder="Rating" />
        <input name="iron" onChange={handleChange} placeholder="Iron" />
        <input name="ironRating" onChange={handleChange} placeholder="Rating" />
        <input name="copper" onChange={handleChange} placeholder="Copper" />
        <input name="copperRating" onChange={handleChange} placeholder="Rating" />
        <input name="boron" onChange={handleChange} placeholder="Boron" />
        <input name="boronRating" onChange={handleChange} placeholder="Rating" />
      </div>

      {/* SOIL PROPERTIES */}
      <h4>Soil Properties</h4>
      <div className="compact-grid">
        <input name="soilTexture" onChange={handleChange} placeholder="Texture" />
        <input name="cationExchange" onChange={handleChange} placeholder="Cation Exchange" />
        <input name="electricalConductivity" onChange={handleChange} placeholder="EC" />
      </div>

      {/* CROP RECOMMENDATIONS */}
      <h4>Crop Recommendations</h4>
      <div className="compact-grid">
        <input name="cropName" onChange={handleChange} placeholder="Crop Name" />
        <input name="recNitrogen" onChange={handleChange} placeholder="N" />
        <input name="recPhosphorus" onChange={handleChange} placeholder="P" />
        <input name="recPotassium" onChange={handleChange} placeholder="K" />
        <input name="recZinc" onChange={handleChange} placeholder="Zn" />
        <input name="recSulfur" onChange={handleChange} placeholder="S" />
        <input name="recBoron" onChange={handleChange} placeholder="B" />
      </div>

      {/* LIME */}
      <h4>Lime & Magnesium Suggestions</h4>
      <div className="compact-grid">
        <input name="effectiveNeutralizingMaterial" onChange={handleChange} placeholder="ENM" />
        <input name="effectiveMagnesium" onChange={handleChange} placeholder="EMg" />
      </div>

      <button className="compact-btn" onClick={saveReport}>
        Save & Generate PDF
      </button>
    </div>
  );
}
