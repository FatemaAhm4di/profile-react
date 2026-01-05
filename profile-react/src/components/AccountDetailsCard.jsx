import Row from "./Row";

export default function AccountDetailsCard({ details }) {
  return (
    <div className="card infoCard">
      <h2 className="cardTitle">Account Details</h2>

      <div className="rows">
        <Row label="Role" value={details.Role} />
        <Row label="Status" value={<span className="pill">{details["Status"]}</span>} />
        <Row label="Verification" value={<span className="verified">✓ Verified</span>} />
      </div>
    </div>
  );
}