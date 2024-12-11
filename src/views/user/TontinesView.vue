<template>
  <Navigation
    ><v-container fluid>
      <!-- Titre principal -->
      <v-row justify="center" class="mb-">
        <v-col cols="12" class="text-center">
          <h1 class="text-h5 font-weight-bold text-primary">Mes Tontines</h1>
          <p class="text-subtitle-1 text-secondary">
            Retrouvez toutes les tontines auxquelles vous participez.
          </p>
        </v-col>
      </v-row>

      <!-- <v-list v-if="tontines.length">
        <v-list-item
          to="#"
          v-for="n in 3"
          :key="n"
          :title="'Item ' + n"
          subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit"
          prepend-icon="mdi-home"
          class="text-left py-2"
        >
        </v-list-item>

        
      </v-list> -->

      <v-btn
        to="/user/tontines/create"
        color="primary"
        variant="flat"
        class="text-none my-4"
      >
        Rejoindre une tontine
      </v-btn>

      <v-row no-gutters v-if="tontines.length">
        <v-col cols="12" class="my-1" v-for="(item, n) in tontines" :key="n"
          ><v-list-item
            :to="'/user/tontines/' + item.id"
            rounded
            color="primary"
            v-ripple
            :prepend-icon="item.icon"
            :title="item.title"
            :subtitle="item.description"
            class="text-left py-4 bg-white"
            elevation="1"
          >
          </v-list-item
        ></v-col>
      </v-row>

      <!-- Message aucun élément -->
      <v-row v-else justify="center">
        <v-col cols="12" class="text-center">
          <v-icon size="48" color="grey lighten-1"
            >mdi-emoticon-sad-outline</v-icon
          >
          <p class="text-body-1 text-secondary mt-2">
            Vous ne participez à aucune tontine pour l'instant.
          </p>
        </v-col>
      </v-row>
    </v-container>
    <v-fab-transition>
      <v-btn
        fab
        large
        size="large"
        position="fixed"
        location="bottom right"
        color="primary"
        class="v-btn-fab-transition"
        icon="mdi-plus"
        :loading="isLoading"
        dark
        to="/user/tontines/create"
      >
      </v-btn> </v-fab-transition
  ></Navigation>
</template>

<script setup>
import Navigation from "@/components/Navigation.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const isLoading = ref(false);

// Liste des tontines
const tontines = ref([
  {
    id: 1,
    title: "Tontine Agricole",
    icon: "mdi-tractor",
    color: "#4CAF50",
    description: "Financer des équipements agricoles modernes.",
    members: 12,
    frequency: "Mensuel",
    balance: 3200,
    amountRange: {
      min: 5000,
      max: 50000,
    },
    duration: "6 mois",
    paymentFrequency: "Mensuelle",
    participants: {
      current: 12,
      max: 30,
    },
    payoutCycle: "Mensuel",
    features: [
      "Investir dans des équipements agricoles modernes",
      "Accompagnement des exploitants agricoles locaux",
      "Possibilité de cotisations flexibles",
    ],
    status: "active",
  },
  {
    id: "1",
    title: "Tontine Communautaire",
    icon: "mdi-account-group",
    color: "#2196F3",
    description:
      "Unissez vos forces pour financer des projets communautaires comme des écoles, centres de santé, ou autres initiatives locales.",
    members: 15,
    frequency: "Mensuelle",
    balance: 5000,
    amountRange: {
      min: 10000,
      max: 200000,
    },
    duration: "6 à 12 mois",
    paymentFrequency: "Mensuelle",
    participants: {
      current: 15,
      max: 50,
    },
    payoutCycle: "Mensuel",
    features: [
      "Gestion transparente avec accès partagé aux rapports",
      "Possibilité de définir des objectifs collectifs",
      "Caisse commune pour des urgences ou des projets solidaires",
    ],
    status: "active",
  },
  {
    id: 2,
    title: "Tontine Éducation",
    icon: "mdi-school",
    color: "#9C27B0",
    description: "Facilitez l'accès à l'éducation.",
    members: 8,
    frequency: "Trimestriel",
    balance: 1500,
    amountRange: {
      min: 5000,
      max: 20000,
    },
    duration: "6 mois",
    paymentFrequency: "Trimestrielle",
    participants: {
      current: 8,
      max: 20,
    },
    payoutCycle: "Trimestriel",
    features: [
      "Couvrir les frais de scolarité des enfants",
      "Soutenir des bourses d'études",
      "Financer des infrastructures scolaires",
    ],
    status: "active",
  },
  {
    id: 3,
    title: "Tontine Transport",
    icon: "mdi-bus",
    color: "#FFC107",
    description: "Achetez un véhicule en commun.",
    members: 15,
    frequency: "Mensuel",
    balance: 4500,
    amountRange: {
      min: 10000,
      max: 150000,
    },
    duration: "6 mois",
    paymentFrequency: "Mensuelle",
    participants: {
      current: 15,
      max: 30,
    },
    payoutCycle: "Mensuel",
    features: [
      "Achat d'un véhicule en commun",
      "Caisse pour les frais d'entretien et de réparation",
      "Assurance partagée",
    ],
    status: "active",
  },
]);
</script>

<style scoped>
.tontine-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.tontine-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
}
.hoverable:hover {
  cursor: pointer;
}

.v-chip {
  font-size: 0.75rem;
}

.v-btn-fab-transition {
  z-index: 1;

  margin-bottom: 5em;
  margin-right: 1.5em;
}
</style>
