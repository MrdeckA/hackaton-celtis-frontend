<template>
  <BackNavigation>
    <v-row justify="center" class="my-5" no-gutters>
      <v-col cols="12">
        <h2 class="mb-2">Historique des transactions</h2>
      </v-col>
      <!-- Displaying transactions as cards -->
      <v-col
        v-for="transaction in transactions"
        :key="transaction.id"
        cols="12"
        md="4"
        class="mb-4"
      >
        <v-card class="elevation-2" hover>
          <v-card-title>
            <v-icon left>mdi-history</v-icon>
            <span>{{ transaction.transactionId }}</span>
          </v-card-title>

          <v-card-subtitle>
            <v-row>
              <v-col class="d-flex" cols="6">
                <v-chip color="primary" text-color="white">{{
                  transaction.status
                }}</v-chip>
              </v-col>
              <v-col class="d-flex justify-end" cols="6">
                <v-chip color="green" text-color="white"
                  >{{ formatAmount(transaction.amount) }}
                  {{ transaction.currency }}</v-chip
                >
              </v-col>
            </v-row>
          </v-card-subtitle>

          <v-card-text class="text-left">
            <div>
              <strong>Date :</strong> {{ formatDate(transaction.date) }}
            </div>
            <div>
              <strong>Mode de paiement :</strong>
              <v-chip color="blue" text-color="white">{{
                transaction.paymentMethod.method
              }}</v-chip>
            </div>
            <div>
              <strong>Description :</strong> {{ transaction.description }}
            </div>
            <div v-if="transaction.remarks">
              <strong>Remarques :</strong> {{ transaction.remarks }}
            </div>
          </v-card-text>

          <v-card-actions>
            <v-btn text @click="viewTransactionDetails(transaction.id)">
              Voir les détails
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </BackNavigation>
</template>
<script setup>
import BackNavigation from "@/components/BackNavigation.vue";
import { ref } from "vue";

// Data: Transactions mock data
const transactions = ref([
  {
    id: "1",
    transactionId: "TX123456789",
    date: "2024-12-10T14:23:00Z",
    amount: 5000,
    currency: "FCFA",
    type: "Dépôt",
    status: "Réussi",
    description: "Dépôt de fonds pour le Pack d’Urgence",
    paymentMethod: { method: "Mobile Money", provider: "Orange Money" },
    sender: { name: "John Doe" },
    recipient: { name: "Entreprise Pack d'Urgence" },
    transactionFee: 100,
    totalAmount: 5100,
    remarks: "Fonds déposés pour des urgences",
  },
  {
    id: "2",
    transactionId: "TX987654321",
    date: "2024-12-08T10:12:00Z",
    amount: 15000,
    currency: "FCFA",
    type: "Retrait",
    status: "Réussi",
    description: "Retrait pour un projet communautaire",
    paymentMethod: { method: "Virement bancaire", provider: "Banque XYZ" },
    sender: { name: "Alice Dupont" },
    recipient: { name: "Comité de Projet Communautaire" },
    transactionFee: 200,
    totalAmount: 15200,
    remarks: "Financement pour un projet d'école",
  },
]);

// Table headers configuration
const headers = [
  {
    text: "ID Transaction",
    align: "start",
    key: "transactionId",
    sortable: true,
  },
  { text: "Date", align: "center", key: "date" },
  { text: "Montant", align: "center", key: "amount" },
  { text: "Mode de paiement", align: "center", key: "paymentMethod" },
  { text: "Statut", align: "center", key: "status" },
  { text: "Remarques", align: "start", key: "remarks" },
];

// Helper methods
const formatDate = (date) => {
  const d = new Date(date);
  return `${d.getDate()}/${
    d.getMonth() + 1
  }/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`;
};

const formatAmount = (amount) => {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "CFA",
  }).format(amount);
};

const getStatusColor = (status) => {
  switch (status) {
    case "Réussi":
      return "primary";
    case "En attente":
      return "orange";
    case "Annulé":
      return "red";
    default:
      return "grey";
  }
};
</script>

<style scoped>
/* Custom styles */
.v-chip {
  margin: 0 5px;
}
</style>
