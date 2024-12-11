<template>
  <Navigation>
    <v-row class="mb-6" no-gutters justify="space-around">
      <v-col v-for="(stat, index) in stats" :key="index" cols="12" md="4">
        <v-card class="rounded-xl">
          <v-card-title class="d-flex align-center justify-space-between">
            <v-icon :color="stat.iconColor" size="48">{{ stat.icon }}</v-icon>
            <v-avatar size="60" class="ml-auto">
              <v-img :src="stat.image" alt="Stat icon"></v-img>
            </v-avatar>
          </v-card-title>
          <v-card-subtitle
            class="headline text-center"
            :style="{ color: stat.textColor }"
          >
            {{ stat.value }}
          </v-card-subtitle>
          <v-card-text class="text-center" :style="{ color: stat.textColor }">
            {{ stat.description }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Title -->
    <v-row justify="center" class="mb-4">
      <v-col cols="12" md="8">
        <v-card class="rounded-xl">
          <v-card-title class="headline text-center">
            <span class="text-h5 font-weight-bold"
              >Liste des Packs de Tontine</span
            >
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>

    <!-- Data Table -->
    <v-row>
      <v-col cols="12">
        <v-card class="rounded-xl">
          <v-card-text>
            <!-- Search Field -->
            <v-text-field
              v-model="search"
              label="Rechercher un pack"
              prepend-icon="mdi-magnify"
              class="mb-6"
              outlined
            ></v-text-field>

            <!-- Vuetify Data Table -->
            <v-data-table
              :headers="headers"
              :items="packs"
              :search="search"
              item-key="id"
              :items-per-page="itemsPerPage"
              :footer-props="{
                'items-per-page-options': [5, 10, 15],
                'items-per-page': itemsPerPage,
              }"
              class="elevation-0 rounded-xl"
            >
              <template v-slot:item.icon="{ item }">
                <v-icon :color="item.color" size="32">{{ item.icon }}</v-icon>
              </template>

              <template v-slot:item.actions="{ item }">
                <v-btn
                  @click="goToPackDetails(item)"
                  color="primary"
                  small
                  rounded
                >
                  Détails
                </v-btn>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row></Navigation
  >
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import Navigation from "@/components/Navigation.vue";

// Router for navigation
const router = useRouter();

// Data state for packs and search
const search = ref("");
const packs = ref([]);
const itemsPerPage = ref(10);

// Statistics data with additional styling
const stats = ref([
  {
    title: "Solde du portefeuille",
    icon: "mdi-wallet",
    iconColor: "indigo",
    value: "5 000 000 FCFA",
    description: "Le solde total disponible dans votre portefeuille.",
    textColor: "indigo",
    image: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
  },
  {
    title: "Packs Actifs",
    icon: "mdi-package",
    iconColor: "green",
    value: "3",
    description: "Nombre de packs de tontine actifs.",
    textColor: "green",
    image: "https://cdn.vuetifyjs.com/images/cards/forest.jpg",
  },
  {
    title: "Membres",
    icon: "mdi-account-group",
    iconColor: "orange",
    value: "25",
    description: "Nombre total de membres dans vos tontines.",
    textColor: "orange",
    image: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
  },
]);

// Table headers
const headers = [
  { text: "Titre", align: "start", key: "title", sortable: true },
  { text: "Description", align: "start", key: "subtitle", sortable: false },
  { text: "Icône", align: "center", key: "icon", sortable: false },
  { text: "Actions", align: "center", key: "actions", sortable: false },
];

// Fetch data from API on mount
onMounted(async () => {
  try {
    const response = await axios.get("/api/packs"); // Change with your actual API endpoint
    packs.value = response.data; // Assuming the API returns an array of packs
  } catch (error) {
    console.error("Failed to fetch packs:", error);
  }
});

// Go to pack details page
const goToPackDetails = (pack) => {
  router.push({ name: "PackDetails", params: { packId: pack.id } });
};
</script>

<style scoped>
/* Styling for the page */
.v-card {
  margin-bottom: 20px;
  border-radius: 20px;
}

.v-btn {
  font-weight: bold;
}

.v-text-field {
  width: 100%;
}

.v-data-table {
  margin-top: 20px;
}

.v-icon {
  font-size: 24px;
}

.v-avatar {
  border-radius: 50%;
}

.v-row {
  margin-top: 30px;
}

.v-col {
  display: flex;
  justify-content: center;
}
</style>
