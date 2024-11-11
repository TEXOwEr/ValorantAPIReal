// src/components/AgentCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './AgentCard.css'; // Arquivo de estilo específico

const AgentCard = ({ agent }) => {
  return (
    <div className="agent-card">
      <img src={agent.displayIcon} alt={agent.displayName} />
      <h2>{agent.displayName}</h2>
      <p>{agent.description}</p>
      <Link to={`/agents/${agent.uuid}`}>
        <button>Ver Detalhes</button>
      </Link>
    </div>
  );
};

export default AgentCard;
