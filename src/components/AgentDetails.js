// src/components/AgentDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchAgentDetails } from '../api/valorantAPI'; // Agora a função é importada corretamente
import useAgentAbilities from '../hooks/useAgentAbilities';

const AgentDetails = () => {
  const { id } = useParams();
  const [agentDetails, setAgentDetails] = useState(null);
  const { abilities, loading } = useAgentAbilities(id);

  useEffect(() => {
    const fetchDetails = async () => {
      const data = await fetchAgentDetails(id);
      console.log(data); // Verificando a resposta da API
      setAgentDetails(data);
    };

    fetchDetails();
  }, [id]);

  if (!agentDetails) return <p>Carregando...</p>;

  return (
    <div>
      <h1>{agentDetails.displayName}</h1>
      <img src={agentDetails.fullPortrait} alt={agentDetails.displayName} />
      <p>{agentDetails.description}</p>

      <h2>Habilidades</h2>
      {loading ? (
        <p>Carregando habilidades...</p>
      ) : (
        abilities && abilities.length > 0 ? (
          abilities.map((ability, index) => (
            <div key={index}>
              <h3>{ability.displayName}</h3>
              <p>{ability.description}</p>
            </div>
          ))
        ) : (
          <p>Habilidades não encontradas.</p>
        )
      )}
    </div>
  );
};

export default AgentDetails;
