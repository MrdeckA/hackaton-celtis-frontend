<template>
  <BackNavigation
    ><v-container fluid class="px-1">
      <v-row justify="center" class="mt-1 mb-3" no-gutters>
        <v-col cols="12" class="text-center">
          <h2 class="text-h5 font-weight-bold">Détails d'une tontine</h2>
        </v-col>
      </v-row>
      <!-- Header Section -->
      <v-card class="mb-4">
        <v-row align="center">
          <!-- <v-col cols="12" sm="4">
            <v-img
              :src="tontine.outputs.image || 'https://via.placeholder.com/150'"
              alt="Tontine Image"
              max-height="200"
              contain
            ></v-img>
          </v-col> -->
          <v-col cols="12" sm="8">
            <v-card-title>{{ tontine.title }}</v-card-title>
            <v-card-subtitle
              >Fréquence : {{ tontine.frequency }}</v-card-subtitle
            >
            <v-card-text class="text-left">
              <div>
                Montant à atteindre :
                {{ tontine.amount_to_reach || "Non défini" }}
              </div>
              <div>Contribution : {{ tontine.contribution }} FCFA</div>
              <div>Désignation : {{ tontine.designation }}</div>
            </v-card-text>
          </v-col>
        </v-row>
      </v-card>

      <!-- Payment History Section -->
      <v-card>
        <v-card-title>Historique des Paiements</v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-data-table
            :headers="headers"
            :items="paymentHistory"
            item-value="id"
            class="elevation-0 px-0"
          >
            <template #item.date="{ item }">
              {{ new Date(item.date).toLocaleDateString() }}
            </template>
            <template #item.amount="{ item }">
              {{ item.amount }} FCFA
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
    </v-container>
  </BackNavigation>
</template>

<script setup>
import { useRoute } from "vue-router";

import Navigation from "@/components/Navigation.vue";
import BackNavigation from "@/components/BackNavigation.vue";
import { ref } from "vue";

const route = useRoute();

const { id } = route.params;

const tontine = ref({});
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
tontine.value = tontines.value.find((t) => t.id == id);
</script>

<script>
export default {
  data() {
    return {
      tontine: {
        interviewId: "002N000001IhL3MW9AAq",
        outputs: {
          amount_to_reach: null,
          contribution: 5000,
          designation: "50000",
          frequency: "weekly",
          image: null,
          name: "Acheter une dayang GT",
          product_id: null,
        },
      },
      paymentHistory: [
        { id: 1, date: "2024-12-01", amount: 5000 },
        { id: 2, date: "2024-12-08", amount: 5000 },
        { id: 3, date: "2024-12-15", amount: 5000 },
      ],
      headers: [
        { text: "Date", value: "date" },
        { text: "Montant", value: "amount" },
      ],
    };
  },
};
</script>

<style scoped>
/* Personnalisation */
.v-card-title {
  font-weight: bold;
}
</style>
