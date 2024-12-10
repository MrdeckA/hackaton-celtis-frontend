<template>
  <Navigation
    ><v-container class="py-10 scrollable">
      <!-- Titre principal -->
      <v-row justify="center" class="mb-4">
        <v-col cols="12" class="text-center">
          <h2 class="text-h5 font-weight-bold">
            Découvrez Nos Plans de Tontine
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
          <v-card class="py-2 hoverable" :style="{ height: '12em' }" outlined>
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
const cards = [
  {
    title: "Machines Agricoles",
    icon: "mdi-tractor",
    color: "green",
    subtitle:
      "Découvrez nos machines agricoles modernes et efficaces pour vos exploitations.",
  },
  {
    title: "Production Agroalimentaire",
    icon: "mdi-factory",
    color: "orange",
    subtitle:
      "Explorez nos solutions pour la transformation et la production agroalimentaire.",
  },
  {
    title: "Machines pour Jus de Fruits",
    icon: "mdi-fruit-grapes",
    color: "red",
    subtitle:
      "Produisez des jus frais et délicieux grâce à nos équipements spécialisés.",
  },
  {
    title: "Immobilier",
    icon: "mdi-home-city",
    color: "blue",
    subtitle:
      "Participez à une tontine pour financer vos projets immobiliers : achat, construction ou rénovation.",
  },
  {
    title: "Éducation",
    icon: "mdi-school",
    color: "purple",
    subtitle:
      "Facilitez l'accès à une éducation de qualité pour vos enfants grâce à une tontine éducative.",
  },
  {
    title: "Transport",
    icon: "mdi-bus",
    color: "brown",
    subtitle:
      "Investissez dans des moyens de transport avec des plans de tontine adaptés à vos besoins.",
  },
];

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
