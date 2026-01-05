export default function StatCard({ title, bigValue, footerText, icon }) {
    return (
      <div className="card statCard">
        <div className="statTop">
          <p className="statTitle">{title}</p>
          {icon ? <span className="statIcon">{icon}</span> : null}
        </div>
  
        {bigValue ? <div className="statValue">{bigValue}</div> : null}
  
        <p className="statFooter">{footerText}</p>
      </div>
    );
  }
  