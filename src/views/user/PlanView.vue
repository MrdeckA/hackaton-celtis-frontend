<template>
  <Navigation
    ><v-container class="py-5 scrollable">
      <!-- Titre principal -->
      <v-row justify="center">
        <v-col cols="12" class="text-center">
          <h2 class="text-h5 font-weight-bold text-primary">
            Découvrez nos packs de Tontine
          </h2>
        </v-col>
      </v-row>

      <!-- Cartes des plans -->
      <v-row justify="center" align="center" dense>
        <v-col
          cols="6"
          md="6"
          lg="4"
          class="mb-5"
          v-for="(card, index) in cards"
          :key="index"
        >
          <v-card
            :to="'/user/plans/' + card.id"
            v-ripple
            class="py-2 hoverable"
            :style="{ height: '12em' }"
            outlined
          >
            <v-card-title>
              <v-icon :color="card.color" size="48">{{ card.icon }}</v-icon>
            </v-card-title>
            <v-card-text class="text-h" style="font-size: 16px">{{
              card.title
            }}</v-card-text>
            <v-card-subtitle>{{ card.subtitle }}</v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-container></Navigation
  >
</template>

<script setup>
import Navigation from "@/components/Navigation.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

import { api } from "@/api";

// Données utilisateur
const drawer = ref(false);
const router = useRouter();
const hasGoBackIcon = ref(false);

const isLoading = ref(false);

const logolify = (value) => {
  return value
    ? value
        .toUpperCase()
        .split(" ")
        .map((w) => w[0])
        .join("")
        .slice(0, 2)
    : "";
};

// Routes de navigation latérale
const NAVIGATION_DRAWER_ROUTES = [
  { title: "Tableau de bord", path: "/user/home", icon: "mdi-home" },
  { title: "Mes tontines", path: "/user/tontines", icon: "mdi-history" },
  { title: "Plans", path: "/user/plans", icon: "mdi-view-list" },
  { title: "Profil", path: "/user/account", icon: "mdi-account-circle" },
];

// Cartes de plans
const cards = ref([]);

api
  .get("/plans")
  .then((response) => {
    console.log(response.data);
    cards.value = response.data;
  })
  .catch((error) => {
    console.error("Erreur lors de la récupération des plans:", error);
  });

// Barre de navigation inférieure
const bottomRoutes = [
  { label: "Accueil", path: "/user/home", icon: "mdi-home" },
  { label: "Plans", path: "/user/plans", icon: "mdi-view-list" },
  { label: "Mes tontines", path: "/user/tontines", icon: "mdi-history" },
  { label: "Compte", path: "/user/account", icon: "mdi-account-circle" },
];
</script>

<style scoped>
/* Styles personnalisés */
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
