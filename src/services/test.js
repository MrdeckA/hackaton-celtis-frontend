const { fetchTontines } = require('./tontines'); // Assurez-vous que le chemin est correct

const testFetchTontines = async () => {
  try {
    const tontines = await fetchTontines();
    console.log('Objet des tontines récupéré :', tontines);
  } catch (error) {
    console.error('Erreur lors du test de la récupération des tontines :', error.message);
  }
};

// Appeler la fonction pour tester
testFetchTontines();
