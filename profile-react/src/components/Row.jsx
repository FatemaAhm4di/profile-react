export default function Row({ label, value }) {
    return (
      <div className="row">
        <span className="rowLabel">{label}</span>
        <span className="rowValue">{value}</span>
      </div>
    );
  }
  