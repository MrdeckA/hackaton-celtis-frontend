<template>
  <v-layout>
    <v-navigation-drawer width="250" v-model="drawer" class="bg-primary">
      <v-list>
        <v-list-item>
          <a href="/dashboard" :style="{ 'text-decoration': 'none' }">
            <div
              class="text-center cursor-pointer my-app-title text-h5 text-uppercase text-white"
            >
              ChainMaster
            </div></a
          >
        </v-list-item>
      </v-list>

      <v-divider></v-divider>
      <v-list nav>
        <v-list-item
          v-for="(route, key) in NAVIGATION_DRAWER_ROUTES"
          :key="key"
          :prepend-icon="route.icon"
          :title="route.title"
          :to="route.path"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon
        v-if="hasGoBackIcon"
        @click="router.back()"
        icon="mdi-arrow-left"
      ></v-app-bar-nav-icon>

      <v-app-bar-nav-icon v-else @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Acceuil</v-app-bar-title>

      <v-avatar
        to="/profile"
        color="primary"
        class="me-5 cursor-pointer"
        @click="router.push('/profile')"
        >{{ logolify("Mériadeck AMOUSSOU") }}</v-avatar
      >

      <template #append>
        <v-btn icon><v-icon size="35">mdi-power</v-icon></v-btn>
      </template>
    </v-app-bar>

    <v-main> </v-main
  ></v-layout>
</template>
<script setup>
/* eslint-disable */
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";

const drawer = ref(false);
const router = useRouter();

// const onPowerButtonClick = () => {
//   authStore.resetStore();
//   router.replace("/auth/login");
// };

const currentPageTitle = ref("Dashboard");

const hasGoBackIcon = ref(false);

// $on("new-page-constants", (payload: any) => {
//   console.log(payload);
//   currentPageTitle.value = payload.currentPageTitle;
//   hasGoBackIcon.value = payload.hasGoBackIcon;
// });

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

  // {
  //   title: "Chaines",
  //   path: "/chains",
  //   icon: "mdi-list-box",
  // },

  // {
  //   title: "Technologies",
  //   path: "/technologies",
  //   icon: "mdi-group",
  // },
  // {
  //   title: "Lien entre Technologies",
  //   path: "/technologies-links",
  //   icon: "mdi-group",
  // },
  // {
  //   title: "Fichiers",
  //   path: "/files",
  //   icon: "mdi-file-pdf-box",
  // },
  // {
  //   title: "Candidats",
  //   path: "/applicants",
  //   icon: "mdi-account",
  // },
  // {
  //   title: "Collaborateurs",
  //   path: "/collaborators",
  //   icon: "mdi-account-group",
  // },

  // {
  //   title: "Paramètres",
  //   path: "/settings",
  //   icon: "mdi-view-dashboard",
  // },
  // {
  //   title: "Déconnexion",
  //   path: "/settings",
  //   icon: "mdi-view-dashboard",
  // },
];
</script>

<style scoped></style>
