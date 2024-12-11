<template>
  <Navigation>
    <!-- En-tête de la page -->
    <v-container class="py-4 px-3 text-center">
      <h1 class="text-h5 font-weight-bold">Bonjour, {{ userName }} 👋</h1>
      <p class="text-body-2">
        Voici un aperçu de votre activité dans vos tontines.
      </p>
    </v-container>

    <!-- Grille de statistiques principales -->
    <v-container class="mt-4" fluid>
      <v-row justify="center" align="stretch">
        <v-col
          v-for="(stat, index) in stats"
          :key="index"
          cols="6"
          class="pa-2"
        >
          <v-card
            outlined
            class="py-3 text-center elevation-2 rounded-xl hover-card"
            style="height: 10em"
          >
            <v-icon :color="stat.iconColor" size="48">{{ stat.icon }}</v-icon>
            <h2
              class="text-h6 font-weight-bold mt-2"
              :style="{ color: stat.textColor }"
            >
              {{ stat.value }}
            </h2>
            <p class="text-body-2">{{ stat.description }}</p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Diagrammes d'activité -->
    <v-container fluid class="mt-6">
      <v-row justify="space-between" align="center" class="mb-4">
        <v-col cols="auto">
          <h3 class="text-h6 font-weight-bold">Résumé de vos Activités</h3>
        </v-col>
      </v-row>

      <v-row justify="center">
        <!-- Diagramme circulaire -->
        <v-col cols="12" md="6" class="pa-3">
          <v-card outlined class="elevation-1 rounded-xl">
            <v-card-title class="justify-center text-center">
              <h3 class="text-h6 font-weight-bold">Répartition des Tontines</h3>
            </v-card-title>
            <v-card-text>
              <canvas id="tontine-pie-chart"></canvas>
            </v-card-text>
          </v-card>
        </v-col>

        <!-- Historique d’activité -->
        <v-col cols="12" md="6" class="pa-3">
          <v-card outlined class="elevation-1 rounded-xl">
            <v-card-title class="justify-center text-center">
              <h3 class="text-h6 font-weight-bold">
                Évolution des Contributions
              </h3>
            </v-card-title>
            <v-card-text>
              <canvas id="activity-line-chart"></canvas>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Navigation rapide en bas -->
    <v-bottom-navigation app color="primary" dark>
      <v-btn @click="goToDashboard">
        <span>Accueil</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn @click="goToTontines">
        <span>Tontines</span>
        <v-icon>mdi-cash-multiple</v-icon>
      </v-btn>
      <v-btn @click="goToProfile">
        <span>Profil</span>
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </Navigation>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import Chart from "chart.js/auto";
import Navigation from "@/components/Navigation.vue";

// Nom utilisateur simulé
const userName = "Jean Dupont";

// Données des statistiques principales
const stats = ref([
  {
    title: "Solde Portefeuille",
    icon: "mdi-wallet-outline",
    iconColor: "blue",
    value: "1 200 000 FCFA",
    description: "Solde actuel disponible.",
    textColor: "blue",
  },
  {
    title: "Tontines Actives",
    icon: "mdi-account-group-outline",
    iconColor: "green",
    value: "5",
    description: "Nombre de tontines en cours.",
    textColor: "green",
  },
  {
    title: "Contributions Totales",
    icon: "mdi-currency-usd",
    iconColor: "purple",
    value: "3 500 000 FCFA",
    description: "Montant total contribué.",
    textColor: "purple",
  },
  {
    title: "Membres Rejoints",
    icon: "mdi-account-multiple",
    iconColor: "orange",
    value: "20",
    description: "Membres participatifs.",
    textColor: "orange",
  },
]);

// Chart.js pour les graphiques
onMounted(() => {
  const pieCtx = document.getElementById("tontine-pie-chart").getContext("2d");
  const lineCtx = document
    .getElementById("activity-line-chart")
    .getContext("2d");

  // Diagramme circulaire
  new Chart(pieCtx, {
    type: "pie",
    data: {
      labels: [
        "Tontines d'Urgence",
        "Tontines Communautaires",
        "Tontines Diaspora",
      ],
      datasets: [
        {
          label: "Répartition des Tontines",
          data: [45, 30, 25],
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        },
      ],
    },
  });

  // Graphique linéaire
  new Chart(lineCtx, {
    type: "line",
    data: {
      labels: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin"],
      datasets: [
        {
          label: "Contributions",
          data: [500000, 700000, 800000, 600000, 750000, 850000],
          fill: false,
          borderColor: "#4CAF50",
          tension: 0.1,
        },
      ],
    },
  });
});

// Navigation
const router = useRouter();
const goToDashboard = () => router.push({ name: "Dashboard" });
const goToTontines = () => router.push({ name: "Tontines" });
const goToProfile = () => router.push({ name: "Profile" });
</script>

<style scoped>
/* Animation pour les cartes */
.hover-card:hover {
  transform: scale(1.03);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease-in-out;
}

/* Styles pour les graphiques */
canvas {
  max-width: 100%;
  height: auto;
}

.hoverable:hover {
  background-color: rgba(0, 0, 0, 0.05);
  transition: background-color 0.2s ease-in-out;
}

.v-icon {
  transition: transform 0.2s ease;
}
.v-icon:hover {
  transform: scale(1.2);
}

.v-btn-fab-transition {
  z-index: 1;

  margin-bottom: 5em;
  margin-right: 1.5em;
}
</style>
