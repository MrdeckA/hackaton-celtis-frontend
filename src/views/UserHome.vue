<template>
  <Navigation>
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
          <v-card class="py-2" style="height: 11em" :to="`/details/1`" outlined>
            <v-card-title>
              <v-icon size="48" color="green">mdi-tractor</v-icon>
            </v-card-title>
            <v-card-text style="font-size: 1em">Machines Agricoles</v-card-text>
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
            <v-card-text style="font-size: 1em"
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
            <v-card-text style="font-size: 1em"
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
            <v-card-text style="font-size: 1em">Immobilier</v-card-text>
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
            <v-card-text style="font-size: 1em">Éducation</v-card-text>
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
            <v-card-text style="font-size: 1em">Transport</v-card-text>
            <v-card-subtitle>
              Investissez dans des moyens de transport avec des plans de tontine
              adaptés à vos besoins.
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </Navigation>
</template>
<script setup>
/* eslint-disable */
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";
import Navigation from "@/components/Navigation.vue";

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
