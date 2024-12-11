<template>
  <Navigation
    ><v-container class="pa-0" fluid>
      <!-- Section de couverture -->
      <v-sheet
        color="primary"
        height="220"
        class="d-flex flex-column align-center justify-center"
      >
        <!-- Avatar utilisateur -->
        <v-avatar size="100" class="elevation-4">
          <img :src="user.avatar" alt="Avatar utilisateur" />
        </v-avatar>
        <div class="text-h6 mt-2 white--text font-weight-bold">
          {{ user.name }}
        </div>
        <p class="text-body-2 white--text">{{ user.email }}</p>
      </v-sheet>

      <!-- Liste des options -->
      <v-sheet class="rounded-lg elevation-4 mx-4 mt-n6 py-4 px-2">
        <v-list dense>
          <v-list-item
            append-icon="mdi-chevron-right"
            v-for="(option, index) in accountOptions"
            :key="index"
            class="hoverable py-3 px-4"
            @click="option.action"
            color="primary"
            :prepend-icon="option.icon"
          >
            <template #title>
              <div class="text-left">{{ option.title }}</div>
            </template>
          </v-list-item>
        </v-list>
      </v-sheet>

      <!-- Actions secondaires -->
      <v-sheet
        class="mt-4 mx-4 px-2 py-3 elevation-0 rounded-lg"
        style="background-color: whitesmoke"
      >
        <v-btn block color="red-darken-2" class="py-2" @click="logout">
          <v-icon left>mdi-logout</v-icon>Déconnexion
        </v-btn>
      </v-sheet>
    </v-container></Navigation
  >
</template>
<script setup>
/* eslint-disable */
import { storeToRefs } from "pinia";
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import Navigation from "@/components/Navigation.vue";

const drawer = ref(false);
const router = useRouter();

const currentPageTitle = ref("Dashboard");

const hasGoBackIcon = ref(false);

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

const NAVIGATION_DRAWER_ROUTES = [
  {
    title: "Tableau de bord",
    path: "/user/home",
    icon: "mdi-home",
  },
];

// Simulated User Info
const user = reactive({
  name: "Jean Dupont",
  email: "jean.dupont@example.com",
  avatar: "https://via.placeholder.com/96",
});

// Simulated Options
const accountOptions = [
  {
    title: "Historique de mes transactions",
    icon: "mdi-history",
    action: () => console.log("Edit Profile"),
  },
  {
    title: "Modifier le profil",
    icon: "mdi-account-edit",
    action: () => console.log("Edit Profile"),
  },
  {
    title: "Changer de mot de passe",
    icon: "mdi-lock-reset",
    action: () => console.log("Reset Password"),
  },
  // {
  //   title: "Préférences de notification",
  //   icon: "mdi-bell-ring-outline",
  //   action: () => console.log("Notification Preferences"),
  // },
  // {
  //   title: "Paramètres de confidentialité",
  //   icon: "mdi-shield-account-outline",
  //   action: () => console.log("Privacy Settings"),
  // },
  // {
  //   title: "Gestion des abonnements",
  //   icon: "mdi-credit-card-outline",
  //   action: () => console.log("Manage Subscriptions"),
  // },
];

// Simulated Navigation
const goBack = () => router.back();
const logout = () => console.log("Logged out");
</script>

<style scoped>
.text-grey-600 {
  color: #757575;
}

/* Personnalisation des styles */
.v-sheet {
  border-radius: 16px;
}

.hoverable:hover {
  background-color: rgba(0, 0, 0, 0.05);
  transition: background-color 0.2s ease-in-out;
}
</style>
