import { useLocation } from "react-router-dom";

export default function SoilReportSuccess() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const reqId = query.get("reqId");
  const pdf = query.get("pdf");

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h2>✔ Soil Test Report Generated Successfully!</h2>

      <h3>Request ID: {reqId}</h3>

      <br />

      {pdf && (
        <a 
          href={`http://localhost:8888/soil-report/download/${pdf}`} 
          target="_blank"
          style={{
            background: "#3498db",
            padding: "12px 24px",
            color: "white",
            borderRadius: "6px",
            textDecoration: "none"
          }}
        >
          Download PDF
        </a>
      )}
    </div>
  );
}
