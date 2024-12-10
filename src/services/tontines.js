import axios from 'axios';

export const fetchTontineData = async () => {
  try {
    const token = localStorage.getItem('token'); // Récupérer le token du localStorage

    if (!token) {
      throw new Error('Token manquant. Veuillez vous authentifier.');
    }

    const response = await axios.get('https://pub-za.appcubecloud.com/service/TontiisCash__Tontine/1.0.0/tontines', {
      headers: {
        Authorization: `Bearer ${token}`, // Ajouter le token dans les en-têtes
      },
    });

    return response.data; // Retourner les données
  } catch (error) {
    console.error('Erreur lors de la récupération des données:', error);
    throw error; // Relancer l'erreur pour une gestion appropriée
  }
};
