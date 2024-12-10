<template>
    <div v-if="loading" class="loading">Chargement des données...</div>
  
    <div v-else>
      <div v-if="error" class="error">{{ error }}</div>
  
      <div v-else>
        <h1>Détails de la Tontine</h1>
        <ul>
          <li><strong>Interview ID:</strong> {{ tontine.interviewId }}</li>
          <li><strong>Contribution:</strong> {{ tontine.outputs.contribution }}</li>
          <li><strong>Designation:</strong> {{ tontine.outputs.designation }}</li>
          <li><strong>Frequency:</strong> {{ tontine.outputs.frequency }}</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  import { fetchTontineData } from './services/tontines'; // Assurez-vous que le chemin est correct
  
  export default {
    name: 'TontineDetails',
    data() {
      return {
        tontine: null, // Données récupérées
        loading: true, // État de chargement
        error: null, // Message d'erreur
      };
    },
    async created() {
      try {
        const data = await fetchTontineData(); // Récupérer les données
        this.tontine = data; // Les assigner au state local
      } catch (err) {
        this.error = 'Impossible de charger les données. Vérifiez votre connexion ou votre authentification.';
      } finally {
        this.loading = false; // Terminer le chargement
      }
    },
  };
  </script>
  
  <style>
  .loading {
    font-size: 1.2em;
    color: #007bff;
  }
  
  .error {
    color: #ff0000;
    font-weight: bold;
  }
  </style>
  