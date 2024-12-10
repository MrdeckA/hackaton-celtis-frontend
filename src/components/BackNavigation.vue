<template>
  <v-layout>
    <!-- <v-navigation-drawer
        width="300"
        v-model="drawer"
        style="background-color: whitesmoke; padding: 0"
      >
        <v-list class="border">
          <v-list-item>
            <a href="/dashboard" :style="{ 'text-decoration': 'none' }">
              <div
                class="text-center cursor-pointer my-app-title text-h5 text-uppercase text-white"
              >
                <img
                  src="../assets/android-chrome-512x512.png"
                  width="200em"
                  alt=""
                /></div
            ></a>
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
      </v-navigation-drawer> -->

    <v-app-bar>
      <v-app-bar-nav-icon
        @click="router.back()"
        icon="mdi-arrow-left"
      ></v-app-bar-nav-icon>

      <!-- <v-app-bar-nav-icon v-else @click="drawer = !drawer"></v-app-bar-nav-icon> -->

      <!-- <v-app-bar-title>Acceuil</v-app-bar-title> -->
      <v-app-bar-title
        ><img src="../assets/android-chrome-512x512.png" width="80em" alt=""
      /></v-app-bar-title>

      <!-- <v-avatar
            to="/profile"
            color="primary"
            class="me-5 cursor-pointer"
            @click="router.push('/profile')"
            >{{ logolify("Mériadeck AMOUSSOU") }}</v-avatar
          > -->

      <template #append>
        <v-btn to="/user/notifications" icon
          ><v-icon size="30">mdi-bell</v-icon></v-btn
        >
      </template>
    </v-app-bar>

    <v-main><slot></slot></v-main
    ><v-bottom-navigation v-model="value" color="primary" active grow>
      <v-btn to="/user/home">
        <v-icon>mdi-home</v-icon>

        Accueil
      </v-btn>

      <v-btn to="/user/plans">
        <v-icon>mdi-view-list</v-icon>

        Plans
      </v-btn>
      <v-btn to="/user/tontines">
        <v-icon>mdi-history</v-icon>

        Mes tontines
      </v-btn>

      <v-btn to="/user/account">
        <v-icon>mdi-account-circle</v-icon>

        <span>Compte</span>
      </v-btn>
    </v-bottom-navigation></v-layout
  >
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
];
</script>

<style scoped></style>
