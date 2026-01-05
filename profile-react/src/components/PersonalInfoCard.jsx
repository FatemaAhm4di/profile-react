import Row from "./Row";

export default function PersonalInfoCard({ info }) {
  return (
    <div className="card infoCard">
      <h2 className="cardTitle">Personal Information</h2>

      <div className="rows">
        {Object.keys(info).map((label) => (
            <Row key={label} label={label} value={info[label]}></Row>
        ))}
      </div>
    </div>
  );
}