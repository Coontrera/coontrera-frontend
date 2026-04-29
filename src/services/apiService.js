import { auth } from './firebase';

const API_BASE_URL = 'http://localhost:5149/api'; 

export const fetchProtectedData = async (endpoint) => {
  const user = auth.currentUser;
  
  if (!user) {
    throw new Error('Usuário não está logado');
  }

  const token = await user.getIdToken();

  const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  });

  if (!response.ok) {
    throw new Error('Falha ao buscar dados');
  }

  return await response.json();
};