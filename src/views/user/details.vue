<template>
    <v-container class="py-10">
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-card outlined>
            <v-card-title class="text-h4 text-center">
              Détails du Plan de Tontine
            </v-card-title>
            <v-card-subtitle class="text-center mb-4">
              Informations concernant le plan sélectionné.
            </v-card-subtitle>
  
            <v-card-text>
              <p><strong>ID du Plan :</strong> {{ id }}</p>
              <p><strong>Nom :</strong> {{ tontineDetails.name }}</p>
              <p><strong>Description :</strong> {{ tontineDetails.description }}</p>
              <p><strong>Catégorie :</strong> {{ tontineDetails.category }}</p>
              <p><strong>Montant :</strong> {{ tontineDetails.amount }} FCFA</p>
            </v-card-text>
  
            <v-card-actions>
              <v-btn color="primary" @click="$router.push('/')">Retour à la liste</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  
  // Récupération du paramètre ID depuis la route
  const route = useRoute();
  const id = route.params.id;
  
  // Simuler des données de tontine (à remplacer par une requête API si nécessaire)
  const tontineDetails = ref({});
  
  const fetchTontineDetails = () => {
    const mockData = [
      { id: '1', name: 'Machines Agricoles', description: 'Découvrez nos machines agricoles modernes et efficaces.', category: 'Agriculture', amount: 50000 },
      { id: '2', name: 'Production Agroalimentaire', description: 'Solutions pour la transformation et la production agroalimentaire.', category: 'Agroalimentaire', amount: 75000 },
      { id: '3', name: 'Machines pour Jus de Fruits', description: 'Produisez des jus frais et délicieux grâce à nos équipements spécialisés.', category: 'Alimentation', amount: 60000 },
      { id: '4', name: 'Immobilier', description: 'Investissez dans des biens immobiliers avec nos plans de tontine adaptés.', category: 'Immobilier', amount: 200000 },
    ];
  
    tontineDetails.value = mockData.find((item) => item.id === id) || {};
  };
  
  // Charger les données lors de l'affichage
  onMounted(fetchTontineDetails);
  </script>
  
  <style scoped>
  .text-center {
    text-align: center;
  }
  </style>
  