import React, { useState } from "react";
import IncidentList from "./components/IncidentList";
import FilterSortControls from "./components/FilterSortControls";
import IncidentForm from "./components/IncidentForm";

const App = () => {
  const [incidents, setIncidents] = useState([
    {
      id: 1,
      title: "Biased Recommendation Algorithm",
      description: "Algorithm consistently favored certain demographics...",
      severity: "Medium",
      reported_at: "2025-03-15T10:00:00Z",
    },
    {
      id: 2,
      title: "LLM Hallucination in Critical Info",
      description: "LLM provided incorrect safety procedure information...",
      severity: "High",
      reported_at: "2025-04-01T14:30:00Z",
    },
    {
      id: 3,
      title: "Minor Data Leak via Chatbot",
      description:
        "Chatbot inadvertently exposed non-sensitive user metadata...",
      severity: "Low",
      reported_at: "2025-03-20T09:15:00Z",
    },
  ]);
  const [filter, setFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("Newest First");

  const filteredIncidents = incidents.filter(
    (incident) => filter === "All" || incident.severity === filter
  );
  const sortedIncidents = filteredIncidents.sort((a, b) => {
    const dateA = new Date(a.reported_at);
    const dateB = new Date(b.reported_at);
    return sortOrder === "Newest First" ? dateB - dateA : dateA - dateB;
  });

  const handleAddIncident = (newIncident) => {
    setIncidents([...incidents, newIncident]);
  };

  return (
    <div className="container">
      <h1>AI Safety Incident Dashboard</h1>
      <FilterSortControls setFilter={setFilter} setSortOrder={setSortOrder} />
      <IncidentList incidents={sortedIncidents} />
      <IncidentForm onAddIncident={handleAddIncident} />
    </div>
  );
};

export default App;
