// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import { fetchAgents } from '../api/valorantAPI'; // Função que busca os agentes
import AgentCard from '../components/AgentCard'; // Componente para exibir cada agente

const Home = () => {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    const loadAgents = async () => {
      const data = await fetchAgents();
      setAgents(data);
    };

    loadAgents();
  }, []);

  return (
    <div>
      <h1>Agentes do Valorant</h1>
      {agents.length === 0 ? (
        <p>Carregando agentes...</p>
      ) : (
        <div className="agent-list">
          {agents.map(agent => (
            <AgentCard key={agent.uuid} agent={agent} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
