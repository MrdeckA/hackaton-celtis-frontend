<template>
  <BackNavigation
    ><!-- En-tête -->
    <v-container class="py-4 px-3 text-center">
      <h1 class="text-h5 font-weight-bold">Mon Portefeuille</h1>
      <p class="text-body-2">
        Toutes vos informations financières à portée de main.
      </p>
    </v-container>

    <!-- Section Solde -->
    <v-container fluid class="">
      <v-card
        outlined
        class="elevation-2 rounded-xl pa-4 text-center bg-primary gradient-bg"
      >
        <v-icon size="48" class="mb-2" color="white">mdi-wallet</v-icon>
        <h2 class="text-h4 font-weight-bold mb-2 text-white">1 200 000 FCFA</h2>
        <p class="text-body-2 text-white">Solde actuel disponible</p>
      </v-card>
    </v-container>

    <!-- Statistiques supplémentaires -->
    <v-container fluid class="mt">
      <v-row justify="center" align="stretch">
        <v-col cols="6" class="pa-2">
          <v-card
            outlined
            class="elevation-2 rounded-xl pa-3 text-center bg-primary hover-card"
          >
            <v-icon size="32" color="green"
              >mdi-arrow-down-circle-outline</v-icon
            >
            <p class="text-h6 font-weight-bold mt-2 text-success">
              800 000 FCFA
            </p>
            <p class="text-body-2">Contributions Totales</p>
          </v-card>
        </v-col>
        <v-col cols="6" class="pa-2">
          <v-card
            outlined
            class="elevation-2 rounded-xl pa-3 text-center hover-card"
          >
            <v-icon size="32" color="red">mdi-arrow-up-circle-outline</v-icon>
            <p class="text-h6 font-weight-bold mt-2 text-error">400 000 FCFA</p>
            <p class="text-body-2">Retraits Totaux</p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Liste des Transactions -->
    <v-container class="mt-l">
      <v-card outlined class="rounded-xl elevation-1 text-left">
        <v-card-title>
          <h3 class="text-h6 font-weight-bold">Transactions Récentes</h3>
        </v-card-title>
        <v-divider></v-divider>
        <v-list>
          <v-list-item
            v-for="(transaction, index) in transactions"
            :key="index"
          >
            <v-list-item-avatar>
              <v-icon :color="transaction.type === 'credit' ? 'green' : 'red'">
                {{
                  transaction.type === "credit"
                    ? "mdi-arrow-down-bold-circle"
                    : "mdi-arrow-up-bold-circle"
                }}
              </v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{ transaction.label }}</v-list-item-title>
              <v-list-item-subtitle>
                {{ transaction.date }} -
                {{ transaction.type === "credit" ? "Crédit" : "Débit" }}
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <p
                :class="
                  transaction.type === 'credit' ? 'text-success' : 'text-error'
                "
              >
                {{ transaction.amount }} FCFA
              </p>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-card>
    </v-container></BackNavigation
  >
</template>

<script setup>
import BackNavigation from "@/components/BackNavigation.vue";
import { ref } from "vue";

// Transactions simulées
const transactions = ref([
  {
    label: "Contribution à la Tontine Communautaire",
    date: "10 décembre 2024",
    amount: "+200 000",
    type: "credit",
  },
  {
    label: "Retrait pour l'achat d'un équipement",
    date: "5 décembre 2024",
    amount: "-150 000",
    type: "debit",
  },
  {
    label: "Contribution à la Tontine Jeunesse",
    date: "1 décembre 2024",
    amount: "+100 000",
    type: "credit",
  },
  {
    label: "Retrait pour un événement familial",
    date: "28 novembre 2024",
    amount: "-250 000",
    type: "debit",
  },
]);
</script>

<style scoped>
/* Gradient background for the balance card */
.gradient-bg {
  color: white;
  border-radius: 20px;
}

/* Card hover effect */
.hover-card:hover {
  transform: scale(1.03);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease-in-out;
}

/* Transaction list styles */
.v-list-item {
  border-bottom: 1px solid #f0f0f0;
}
.v-list-item:last-child {
  border-bottom: none;
}
</style>
