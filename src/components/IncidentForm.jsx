import React, { useState } from "react";

const IncidentForm = ({ onAddIncident }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [severity, setSeverity] = useState("Low");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description) {
      const newIncident = {
        id: Date.now(),
        title,
        description,
        severity,
        reported_at: new Date().toISOString(),
      };
      onAddIncident(newIncident);
      setTitle("");
      setDescription("");
    }
  };

  return (
    <>
      <h2>Report New Incident</h2>
      <form onSubmit={handleSubmit} className="incident-form">
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input-field"
            placeholder="Enter incident title"
          />
        </label>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="textarea-field"
            placeholder="Provide a detailed description"
          />
        </label>
        <label>
          Severity:
          <select
            value={severity}
            onChange={(e) => setSeverity(e.target.value)}
            className="select-field"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </label>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </>
  );
};

export default IncidentForm;
