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
            <v-card-title>{{ tontine.outputs.name }}</v-card-title>
            <v-card-subtitle
              >Fréquence : {{ tontine.outputs.frequency }}</v-card-subtitle
            >
            <v-card-text class="text-left">
              <div>
                Montant à atteindre :
                {{ tontine.outputs.amount_to_reach || "Non défini" }}
              </div>
              <div>Contribution : {{ tontine.outputs.contribution }} FCFA</div>
              <div>Désignation : {{ tontine.outputs.designation }}</div>
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

const route = useRoute();

const { id } = route.params;
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
