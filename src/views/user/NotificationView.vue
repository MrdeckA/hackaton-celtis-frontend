<template>
  <Navigation
    ><v-card class="mx-auto text-left" max-width="450">
      <v-list :items="items" lines="three" item-props>
        <template v-slot:subtitle="{ subtitle }">
          <div v-html="subtitle"></div>
        </template>
      </v-list>
    </v-card>
  </Navigation>
</template>
<script setup>
/* eslint-disable */
import Navigation from "@/components/Navigation.vue";
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

const items = ref([
  { type: "subheader", title: "Aujourd'hui" },
  {
    prependIcon: "mdi-account-circle",
    title: "Nouvelle adhésion",
    subtitle: `<span class="text-primary">Ali Connors</span> &mdash; Ali a rejoint votre tontine.`,
    color: "primary",
  },
  { type: "divider", inset: true },
  {
    prependIcon: "mdi-cash-multiple",
    title: "Cotisation reçue",
    subtitle: `<span class="text-primary">Alex Johnson</span> &mdash; a effectué sa cotisation pour le mois de décembre.`,
  },
  { type: "divider", inset: true },
  {
    prependIcon: "mdi-calendar",
    title: "Événement à venir",
    subtitle: `<span class="text-primary">Sandra Adams</span> &mdash; La réunion de la tontine est prévue pour le 15 décembre.`,
  },
  { type: "divider", inset: true },
  {
    prependIcon: "mdi-gift",
    title: "Cadeau collectif",
    subtitle: `<span class="text-primary">Trevor Hansen</span> &mdash; Idées de cadeaux pour la fête de fin d'année ?`,
  },
  { type: "divider", inset: true },
  {
    prependIcon: "mdi-alert-circle",
    title: "Rappel de paiement",
    subtitle: `<span class="text-primary">Britta Holt</span> &mdash; Vous avez un paiement en retard.`,
  },
  { type: "divider", inset: true },
  {
    prependIcon: "mdi-trophy",
    title: "Objectif atteint",
    subtitle: `<span class="text-primary">Votre tontine</span> &mdash; Le montant cible de 5000€ a été atteint !`,
  },
]);
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
