<template>
  <v-layout>
    <v-navigation-drawer
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
                src="../../assets/android-chrome-512x512.png"
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
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon
        v-if="hasGoBackIcon"
        @click="router.back()"
        icon="mdi-arrow-left"
      ></v-app-bar-nav-icon>

      <!-- <v-app-bar-nav-icon v-else @click="drawer = !drawer"></v-app-bar-nav-icon> -->
      <v-avatar
        v-else
        to="/profile"
        color="primary"
        class="ms-2 cursor-pointer"
        @click="router.push('/profile')"
        >{{ logolify("Mériadeck AMOUSSOU") }}</v-avatar
      >

      <!-- <v-app-bar-title>Acceuil</v-app-bar-title> -->
      <v-app-bar-title
        ><img src="../../assets/android-chrome-512x512.png" width="80em" alt=""
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

    <v-main>
      <v-container class="py-10 scrollable">
        <!-- Titre principal -->
        <v-row justify="center" class="mb-5">
          <v-col cols="12" class="text-center">
            <h2 class="text-h4 font-weight-bold">Nos plans de tontine</h2>
          </v-col>
        </v-row>
        <!-- Cartes -->
        <v-row justify="center" align="center" dense>
          <!-- Carte 1 : Machines agricoles -->
          <v-col cols="6" md="4" class="mb-5">
            <v-card
              class="py-2"
              style="height: 11em"
              :to="`/details/1`"
              outlined
            >
              <v-card-title>
                <v-icon size="48" color="green">mdi-tractor</v-icon>
              </v-card-title>
              <v-card-text class="text-h6">Machines Agricoles</v-card-text>
              <v-card-subtitle>
                Découvrez nos machines agricoles modernes et efficaces pour vos
                exploitations.
              </v-card-subtitle>
              <!-- <v-card-actions>
                <v-btn
                  color="primary"
                  block
                  @click="
                    $router.push({
                      name: 'tontine-details',
                      params: { id: '1' },
                    })
                  "
                >
                  Consulter
                </v-btn>
              </v-card-actions> -->
            </v-card>
          </v-col>
          <!-- Carte 2 : Machines de production agroalimentaire -->
          <v-col cols="6" md="4" class="mb-5">
            <v-card class="py-2" style="height: 11em" outlined>
              <v-card-title>
                <v-icon size="48" color="orange">mdi-factory</v-icon>
              </v-card-title>
              <v-card-text class="text-h6"
                >Production Agroalimentaire</v-card-text
              >
              <v-card-subtitle>
                Explorez nos solutions pour la transformation et la production
                agroalimentaire.
              </v-card-subtitle>
            </v-card>
          </v-col>
          <!-- Carte 3 : Machines pour jus de fruits -->
          <v-col cols="6" md="4" class="mb-5">
            <v-card class="py-2" style="height: 11em" outlined>
              <v-card-title>
                <v-icon size="48" color="red">mdi-fruit-grapes</v-icon>
              </v-card-title>
              <v-card-text class="text-h6"
                >Machines pour Jus de Fruits</v-card-text
              >
              <v-card-subtitle>
                Produisez des jus frais et délicieux grâce à nos équipements
                spécialisés.
              </v-card-subtitle>
            </v-card>
          </v-col>
          <!-- Carte 4 : Tontine pour l'immobilier -->
          <v-col cols="6" md="4" class="mb-5">
            <v-card class="py-2" style="height: 11em" outlined>
              <v-card-title>
                <v-icon size="48" color="blue">mdi-home-city</v-icon>
              </v-card-title>
              <v-card-text class="text-h6">Immobilier</v-card-text>
              <v-card-subtitle>
                Participez à une tontine pour financer vos projets immobiliers :
                achat, construction ou rénovation.
              </v-card-subtitle>
            </v-card>
          </v-col>
          <!-- Carte 5 : Tontine pour l'éducation -->
          <v-col cols="6" md="4" class="mb-5">
            <v-card class="py-2" style="height: 11em" outlined>
              <v-card-title>
                <v-icon size="48" color="purple">mdi-school</v-icon>
              </v-card-title>
              <v-card-text class="text-h6">Éducation</v-card-text>
              <v-card-subtitle>
                Facilitez l'accès à une éducation de qualité pour vos enfants
                grâce à une tontine éducative.
              </v-card-subtitle>
            </v-card>
          </v-col>
          <!-- Carte 6 : Tontine pour le transport -->
          <v-col cols="6" md="4" class="mb-5">
            <v-card class="py-2" style="height: 11em" outlined>
              <v-card-title>
                <v-icon size="48" color="brown">mdi-bus</v-icon>
              </v-card-title>
              <v-card-text class="text-h6">Transport</v-card-text>
              <v-card-subtitle>
                Investissez dans des moyens de transport avec des plans de
                tontine adaptés à vos besoins.
              </v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
      </v-container> </v-main
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

<style scoped>
/* .v-icon {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
} */
/* h2 {
  font-family: "Roboto", sans-serif;
  color: #333;
} */
</style>
