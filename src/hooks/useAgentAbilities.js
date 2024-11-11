// src/hooks/useAgentAbilities.js
import { useState, useEffect } from 'react';

const useAgentAbilities = (id) => {
  const [abilities, setAbilities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAbilities = async () => {
      try {
        const response = await fetch(`https://valorant-api.com/v1/agents/${id}`);
        const data = await response.json();
        setAbilities(data.data.abilities); // Garantindo que estamos acessando o campo correto
      } catch (error) {
        console.error('Erro ao buscar habilidades:', error);
        setAbilities([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAbilities();
  }, [id]);

  return { abilities, loading };
};

export default useAgentAbilities;
