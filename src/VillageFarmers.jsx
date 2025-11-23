import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const VillageFarmers = () => {
  const { villageName } = useParams();
  const [farmers, setFarmers] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8888/farmers/by-village/${villageName}`)
      .then((res) => res.json())
      .then((data) => setFarmers(data))
      .catch((err) => console.error(err));
  }, [villageName]);

  return (
    <div>
      <h2>Farmers of {villageName}</h2>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Farmer Code</th>
            <th>Reg Date</th>
            <th>Village</th>
            <th>Village Code</th>
          </tr>
        </thead>

        <tbody>
          {farmers.map((farmer) => (
            <tr key={farmer.id || farmer.farmerCode}>
              <td>{farmer.farmerCode}</td>
              <td>{farmer.regDate}</td>
              <td>{farmer.plotVillage}</td>
              <td>{farmer.plotVillageCode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VillageFarmers;
