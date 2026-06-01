const API_BASE_URL = 'http://localhost:5149/api'; 

export const fetchProtectedData = async (endpoint) => {
  const token = localStorage.getItem('coontrera_token');
  
  if (!token) {
    throw new Error('Usuário não está logado');
  }

  const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  });

  if (!response.ok) {
    if (response.status === 401) {
        localStorage.removeItem('coontrera_token');
        throw new Error('Por favor, faça login novamente.');
      }
    throw new Error('Falha ao buscar dados');
  }

  return await response.json();
};