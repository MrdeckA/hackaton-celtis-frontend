<template>
  <BackNavigation>
    <v-container class="py-5">
      <v-row justify="center">
        <v-col cols="12" md="8" lg="6">
          <v-card class="rounded-lg overflow-hidden">
            <!-- Card Header -->
            <v-img
              :src="plan.icon"
              aspect-ratio="2"
              class="primary--text bg-primary d-flex align-center justify-center text-center"
              style="padding: 20px; color: white"
            >
              <v-icon :color="plan.color" size="56" class="me-3">
                {{ plan.icon }}
              </v-icon>
              <div>
                <h1 class="text-h4 font-weight-bold mb-1">
                  {{ plan.title }}
                </h1>
                <p class="text-subtitle-2 font-italic">
                  {{ plan.subtitle }}
                </p>
              </div>
            </v-img>

            <!-- Card Body -->
            <v-card-text class="py-4 px-5">
              <v-row no-gutters>
                <v-col cols="12">
                  <v-divider></v-divider>
                </v-col>
                <v-col cols="12">
                  <v-btn
                    color="primary"
                    :to="'/user/tontines/create?plan=' + id"
                    variant="flat"
                    >Rejoindre</v-btn
                  >
                </v-col>

                <v-col cols="12">
                  <v-list dense class="text-left">
                    <v-list-item>
                      <v-list-item-icon>
                        <v-icon color="primary">mdi-currency-usd</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <strong>Montant :</strong>
                        {{ plan.details?.amountRange }}
                      </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                      <v-list-item-icon>
                        <v-icon color="primary">mdi-calendar-clock</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <strong>Durée :</strong>
                        {{ plan.details?.duration }}
                      </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                      <v-list-item-icon>
                        <v-icon color="primary">mdi-clock-outline</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <strong>Fréquence :</strong>
                        {{ plan.details?.frequency }}
                      </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                      <v-list-item-icon>
                        <v-icon color="primary"
                          >mdi-account-group-outline</v-icon
                        >
                      </v-list-item-icon>
                      <v-list-item-content>
                        <strong>Participants :</strong>
                        {{ plan.details?.participants }}
                      </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                      <v-list-item-icon>
                        <v-icon color="primary">mdi-recycle-variant</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <strong>Cycle de paiement :</strong>
                        {{ plan.details?.payoutCycle }}
                      </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                      <v-list-item-icon>
                        <v-icon color="primary">mdi-star-outline</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <strong>Fonctionnalités principales :</strong>
                        <ul class="pl-4">
                          <li
                            v-for="(feature, index) in plan.details
                              ?.keyFeatures"
                            :key="index"
                          >
                            {{ feature }}
                          </li>
                        </ul>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-col>

                <v-col cols="12">
                  <v-divider></v-divider>
                </v-col>
              </v-row>
            </v-card-text>

            <!-- Card Actions -->
            <v-card-actions class="justify-center">
              <v-btn
                :to="'/user/tontines/create?plan=' + id"
                color="primary"
                dark
                rounded
                class="text-uppercase text-white py-3 px-6"
              >
                <v-icon left>mdi-account-plus</v-icon> Rejoindre la Tontine
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container></BackNavigation
  >
</template>

<script>
import BackNavigation from "@/components/BackNavigation.vue";
import { ref } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "plan",
  components: { BackNavigation },
  data() {
    return {};
  },
  methods: {
    joinTontine() {
      alert("Vous avez rejoint la tontine !");
    },
  },
};
</script>

<script setup>
import { api } from "@/api";

const plan = ref({});

const route = useRoute();

const { id } = route.params;

api
  .get("/plans/" + id)
  .then((response) => {
    console.log(response.data);
    plan.value = response.data;
  })
  .catch((error) => {
    console.error("Erreur lors de la récupération des plans:", error);
  });
</script>

<style scoped>
.text-uppercase {
  text-transform: uppercase;
}
</style>
