<template>
  <div>
    <h1>Tontines</h1>

    <!-- Affichage d'un message de chargement si les données sont en cours de récupération -->
    <div v-if="loading">Chargement des tontines...</div>

    <!-- Si des tontines sont disponibles, les afficher sous forme de tableau -->
    <table v-if="tontines.length > 0">
      <thead>
        <tr>
          <th>Contribution</th>
          <th>Désignation</th>
          <th>Fréquence</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(tontine, index) in tontines" :key="index">
          <td>{{ tontine.contribution }}</td>
          <td>{{ tontine.designation }}</td>
          <td>{{ tontine.frequency }}</td>
        </tr>
      </tbody>
    </table>

    <!-- Message si aucune tontine n'est trouvée -->
    <div v-if="tontines.length === 0 && !loading">
      Aucune tontine disponible.
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { api } from "@/api";

const tontines = ref([]);

const loading = ref(false);

// const fetcher = await api();

// fetcher.get("/tontines").then((response) => {
//   console.log(response.data);
// });
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f4f4f4;
}
</style>
