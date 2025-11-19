

import React, { useState } from "react";
import "./FarmerRegistration.css";


const FarmerRegistration = () => {
  const [formData, setFormData] = useState({
    farmerCode: "",
    regDate: "",
    plotVillage: "",
    plotVillageCode: "",
    guttNo: "",
    farmerFName: "",
    farmerLName: "",
    fatherName: "",
    address: "",
    aadharNo: "",
    dob: "",
    phoneNo: "",
    landArea: "",
    branchName: "",
    accNo: "",
    panNo: "",
    caneVariety: "",
    plantingDate: "",
    irrigationType: "",
    cropType: "",
    spacing: "",
    sourceOfWater: "",
    plantingMethod: "",
    riverBelt: "",
    needFertilizer: ""
  });

  const village = ["Jaysingpur", "Shirol", "Nandani", "Umalwad", "Other"];
  const caneVariety = ["Co-86032", "Co-94012", "Vasant 95", "Co-265"];
  const irrigationType = ["Drip", "Sprinkler", "Flood", "None"];
  const cropType = ["PL", "R1", "R2", "R3"];
  const plantingMethod = ["Ridge & Furrow", "Trench", "Pit", "Other"];
  const riverBelt = ["Krishna", "Panchaganga", "Other"];
  const sourceOfWater = ["Well", "Bore-Well", "River", "Canal", "Other"];
  const needFertilizer = ["Yes", "No"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="fr-container">

      <h2 className="form-title">Farmer Registration</h2>

      <div className="form-grid">

        {/** Each card below */}

        <div className="fr-card">
          <label>Farmer Code</label>
          <input type="text" name="farmerCode" value={formData.farmerCode} onChange={handleChange} />
        </div>

        <div className="fr-card">
          <label>Registration Date</label>
          <input type="date" name="regDate" value={formData.regDate} onChange={handleChange} />
        </div>

        <div className="fr-card">
          <label>Plot Village</label>
          <select name="plotVillage" value={formData.plotVillage} onChange={handleChange}>
            <option value="">Select Village</option>
            {village.map((v, i) => <option key={i} value={v}>{v}</option>)}
          </select>
        </div>

        <div className="fr-card">
          <label>Plot Village Code</label>
          <input type="text" name="plotVillageCode" value={formData.plotVillageCode} onChange={handleChange} />
        </div>

        <div className="fr-card">
          <label>Gutt No</label>
          <input type="text" name="guttNo" value={formData.guttNo} onChange={handleChange} />
        </div>

        <div className="fr-card">
          <label>Farmer First Name</label>
          <input type="text" name="farmerFName" value={formData.farmerFName} onChange={handleChange} />
        </div>

        <div className="fr-card">
          <label>Farmer Last Name</label>
          <input type="text" name="farmerLName" value={formData.farmerLName} onChange={handleChange} />
        </div>

        <div className="fr-card">
          <label>Father Name</label>
          <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} />
        </div>

        <div className="fr-card">
          <label>Address</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} />
        </div>

        <div className="fr-card">
          <label>Aadhar No</label>
          <input type="text" name="aadharNo" value={formData.aadharNo} onChange={handleChange} />
        </div>

        <div className="fr-card">
          <label>Date of Birth</label>
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
        </div>

        <div className="fr-card">
          <label>Phone No</label>
          <input type="text" name="phoneNo" value={formData.phoneNo} onChange={handleChange} />
        </div>

        <div className="fr-card">
          <label>Land Area</label>
          <input type="number" name="landArea" value={formData.landArea} onChange={handleChange} />
        </div>

        <div className="fr-card">
          <label>Branch Name</label>
          <input type="text" name="branchName" value={formData.branchName} onChange={handleChange} />
        </div>

        <div className="fr-card">
          <label>Account No</label>
          <input type="number" name="accNo" value={formData.accNo} onChange={handleChange} />
        </div>

        <div className="fr-card">
          <label>PAN No</label>
          <input type="text" name="panNo" value={formData.panNo} onChange={handleChange} />
        </div>

        <div className="fr-card">
          <label>Cane Variety</label>
          <select name="caneVariety" value={formData.caneVariety} onChange={handleChange}>
            <option value="">Select Variety</option>
            {caneVariety.map((c, i) => <option key={i} value={c}>{c}</option>)}
          </select>
        </div>

        <div className="fr-card">
          <label>Planting Date</label>
          <input type="date" name="plantingDate" value={formData.plantingDate} onChange={handleChange} />
        </div>

        <div className="fr-card">
          <label>Irrigation Type</label>
          <select name="irrigationType" value={formData.irrigationType} onChange={handleChange}>
            <option value="">Select Irrigation</option>
            {irrigationType.map((i, idx) => <option key={idx} value={i}>{i}</option>)}
          </select>
        </div>

        <div className="fr-card">
          <label>Crop Type</label>
          <select name="cropType" value={formData.cropType} onChange={handleChange}>
            <option value="">Select Crop</option>
            {cropType.map((c, idx) => <option key={idx} value={c}>{c}</option>)}
          </select>
        </div>

        <div className="fr-card">
          <label>Spacing (cm)</label>
          <input type="number" name="spacing" value={formData.spacing} onChange={handleChange} />
        </div>

        <div className="fr-card">
          <label>Source of Water</label>
          <select name="sourceOfWater" value={formData.sourceOfWater} onChange={handleChange}>
            <option value="">Select</option>
            {sourceOfWater.map((s, idx) => <option key={idx} value={s}>{s}</option>)}
          </select>
        </div>

        <div className="fr-card">
          <label>Planting Method</label>
          <select name="plantingMethod" value={formData.plantingMethod} onChange={handleChange}>
            <option value="">Select Method</option>
            {plantingMethod.map((p, idx) => <option key={idx} value={p}>{p}</option>)}
          </select>
        </div>

        <div className="fr-card">
          <label>River Belt</label>
          <select name="riverBelt" value={formData.riverBelt} onChange={handleChange}>
            <option value="">Select River</option>
            {riverBelt.map((r, idx) => <option key={idx} value={r}>{r}</option>)}
          </select>
        </div>

        <div className="fr-card">
          <label>Need Fertilizer</label>
          <select name="needFertilizer" value={formData.needFertilizer} onChange={handleChange}>
            <option value="">Select</option>
            {needFertilizer.map((f, idx) => <option key={idx} value={f}>{f}</option>)}
          </select>
        </div>

      </div>

      <button type="submit" className="submit-btn">Submit</button>
    </form>
  );
};

export default FarmerRegistration;
