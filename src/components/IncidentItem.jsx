import React, { useState } from "react";

const IncidentItem = ({ incident }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Determine the severity class to apply for the left border
  const getSeverityClass = (severity) => {
    switch (severity.toLowerCase()) {
      case "low":
        return "low";
      case "medium":
        return "medium";
      case "high":
        return "high";
      default:
        return "";
    }
  };

  return (
    <div className={`incident-item ${getSeverityClass(incident.severity)}`}>
      <h3>{incident.title}</h3>
      <p>
        <strong>Severity:</strong> {incident.severity}
      </p>
      <p>
        <strong>Reported on:</strong>{" "}
        {new Date(incident.reported_at).toLocaleDateString()}
      </p>
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? "Hide Details" : "View Details"}
      </button>
      {isExpanded && (
        <p>
          <strong>Details: </strong> {incident.description}
        </p>
      )}
    </div>
  );
};

export default IncidentItem;
