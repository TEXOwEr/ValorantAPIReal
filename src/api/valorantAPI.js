// src/api/valorantAPI.js

const API_URL = 'https://valorant-api.com/v1/';

// Função para buscar todos os agentes
export const fetchAgents = async () => {
  try {
    const response = await fetch(`${API_URL}agents`);
    if (!response.ok) throw new Error('Erro ao carregar os agentes');
    const data = await response.json();
    return data.data; // Retorna os agentes
  } catch (error) {
    console.error('Erro ao buscar agentes:', error);
    return []; // Retorna um array vazio em caso de erro
  }
};

// Função para buscar os detalhes de um agente específico
export const fetchAgentDetails = async (id) => {
  try {
    const response = await fetch(`${API_URL}agents/${id}`);
    if (!response.ok) throw new Error('Erro ao carregar detalhes do agente');
    const data = await response.json();
    return data.data; // Retorna os detalhes do agente
  } catch (error) {
    console.error('Erro ao buscar detalhes do agente:', error);
    return null; // Retorna null em caso de erro
  }
};
