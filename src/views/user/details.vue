<template>
  <BackNavigation>
    <v-container class="py-5">
      <v-row justify="center">
        <v-col cols="12" md="8" lg="6">
          <v-card class="rounded-lg overflow-hidden">
            <!-- Card Header -->
            <v-img
              :src="packDetails.icon"
              aspect-ratio="2"
              class="primary--text bg-primary d-flex align-center justify-center text-center"
              style="padding: 20px; color: white"
            >
              <v-icon :color="packDetails.color" size="56" class="me-3">
                {{ packDetails.icon }}
              </v-icon>
              <div>
                <h1 class="text-h4 font-weight-bold mb-1">
                  {{ packDetails.title }}
                </h1>
                <p class="text-subtitle-2 font-italic">
                  {{ packDetails.subtitle }}
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
                    to="/user/tontines/create"
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
                        {{ packDetails.details.amountRange }}
                      </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                      <v-list-item-icon>
                        <v-icon color="primary">mdi-calendar-clock</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <strong>Durée :</strong>
                        {{ packDetails.details.duration }}
                      </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                      <v-list-item-icon>
                        <v-icon color="primary">mdi-clock-outline</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <strong>Fréquence :</strong>
                        {{ packDetails.details.frequency }}
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
                        {{ packDetails.details.participants }}
                      </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                      <v-list-item-icon>
                        <v-icon color="primary">mdi-recycle-variant</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <strong>Cycle de paiement :</strong>
                        {{ packDetails.details.payoutCycle }}
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
                            v-for="(feature, index) in packDetails.details
                              .keyFeatures"
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
                to="/user/tontines/create"
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

export default {
  name: "PackDetails",
  components: { BackNavigation },
  data() {
    return {
      packDetails: {
        title: "Pack Communautaire",
        icon: "mdi-account-group",
        color: "green",
        subtitle:
          "Unissez vos forces pour financer des projets communautaires comme des écoles, centres de santé, ou autres initiatives locales.",
        details: {
          amountRange: "10,000 - 200,000 FCFA",
          duration: "6 à 12 mois",
          frequency: "Mensuelle",
          participants: "10 à 50 membres",
          payoutCycle: "À la fin de chaque mois",
          keyFeatures: [
            "Gestion transparente avec accès partagé aux rapports",
            "Possibilité de définir des objectifs collectifs",
            "Caisse commune pour des urgences ou des projets solidaires",
            "Assistance pour rédiger des projets et attirer des financements extérieurs",
          ],
        },
      },
    };
  },
  methods: {
    joinTontine() {
      alert("Vous avez rejoint la tontine !");
    },
  },
};
</script>

<style scoped>
.text-uppercase {
  text-transform: uppercase;
}
</style>
