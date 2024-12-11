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

const cards = ref([
  {
    id: 1,
    title: "Pack d’Urgence",
    icon: "mdi-alert-circle-outline",
    color: "red",
    subtitle:
      "Gérez vos imprévus avec ce pack conçu pour des cotisations rapides et flexibles, idéales pour des urgences comme les mariages, funérailles ou frais de santé.",
    details: {
      amountRange: "5,000 - 50,000 FCFA",
      duration: "1 à 3 mois",
      frequency: "Hebdomadaire",
      participants: "3 à 10 membres",
      payoutCycle: "Chaque semaine",
      keyFeatures: [
        "Cycles courts pour une réponse rapide",
        "Flexibilité dans les montants et les délais",
        "Notifications pour garantir la ponctualité",
        "Prise en charge des paiements via mobile money ou cash",
      ],
    },
  },
  {
    id: 2,
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
  {
    id: 3,
    title: "Pack Agribusiness",
    icon: "mdi-tractor",
    color: "brown",
    subtitle:
      "Investissez dans votre exploitation agricole grâce à ce pack dédié aux agriculteurs, pour l’achat de matériel ou le financement des récoltes.",
    details: {
      amountRange: "20,000 - 500,000 FCFA",
      duration: "3 à 9 mois",
      frequency: "Mensuelle ou selon les saisons",
      participants: "5 à 15 membres",
      payoutCycle: "À la fin de chaque saison agricole",
      keyFeatures: [
        "Support pour achat groupé de matériel agricole",
        "Épargne ciblée pour semences ou intrants",
        "Partenariats avec fournisseurs locaux pour des réductions",
        "Gestion adaptée au calendrier agricole",
      ],
    },
  },
  {
    id: 4,
    title: "Pack Diaspora",
    icon: "mdi-airplane",
    color: "blue",
    subtitle:
      "Contribuez aux projets familiaux ou communautaires depuis l’étranger grâce à ce pack conçu pour la diaspora.",
    details: {
      amountRange: "50 USD - 1,000 USD",
      duration: "6 à 12 mois",
      frequency: "Mensuelle ou trimestrielle",
      participants: "Illimité",
      payoutCycle: "Flexible selon les projets",
      keyFeatures: [
        "Intégration des transferts internationaux via partenaires",
        "Visibilité sur l’usage des fonds pour garantir la confiance",
        "Paiement via mobile money, cartes bancaires ou plateformes de transfert",
        "Accès à des services additionnels comme le paiement des frais de scolarité à distance",
      ],
    },
  },
  {
    id: 5,
    title: "Pack Femme & Autonomisation",
    icon: "mdi-human-female",
    color: "purple",
    subtitle:
      "Encouragez l’entrepreneuriat et l’autonomisation des femmes avec un pack adapté à leurs besoins.",
    details: {
      amountRange: "5,000 - 100,000 FCFA",
      duration: "3 à 6 mois",
      frequency: "Hebdomadaire ou mensuelle",
      participants: "5 à 20 membres",
      payoutCycle: "Chaque mois ou selon les cycles des projets",
      keyFeatures: [
        "Épargne adaptée aux petits commerces",
        "Accès à des micro-crédits pour développer des activités",
        "Formation en gestion financière et accès à des mentors locaux",
        "Réduction sur l’achat d’outils et de matériel pour les commerces",
      ],
    },
  },
  {
    id: 6,
    title: "Pack Jeunesse Innovante",
    icon: "mdi-lightbulb-outline",
    color: "yellow",
    subtitle:
      "Un pack pour les jeunes souhaitant financer des startups, projets technologiques, ou formations professionnelles.",
    details: {
      amountRange: "10,000 - 200,000 FCFA",
      duration: "6 à 12 mois",
      frequency: "Mensuelle",
      participants: "5 à 10 membres",
      payoutCycle: "À chaque étape clé du projet",
      keyFeatures: [
        "Focus sur les projets innovants et éducatifs",
        "Accompagnement par des mentors ou experts locaux",
        "Accès à des récompenses pour des projets réussis",
        "Possibilité d’intégrer un incubateur ou des programmes de formation",
      ],
    },
  },
  {
    id: 7,
    title: "Pack Personnalisé",
    icon: "mdi-cog-outline",
    color: "grey",
    subtitle:
      "Créez un pack entièrement personnalisé : définissez vos propres objectifs, montants, durée et fréquence des paiements.",
    details: {
      amountRange: "Flexible (défini par l’utilisateur)",
      duration: "Flexible (défini par l’utilisateur)",
      frequency: "Flexible (hebdomadaire, mensuelle ou autre)",
      participants: "Minimum 2 membres",
      payoutCycle: "Flexible (à définir par l’utilisateur)",
      keyFeatures: [
        "Définissez votre objectif d’épargne ou de projet",
        "Choisissez les montants et la fréquence de cotisation",
        "Options pour inviter des participants à rejoindre votre tontine",
        "Accès à des outils de gestion personnalisés et des rapports",
        "Intégration avec les moyens de paiement de votre choix (mobile money, banques, etc.)",
      ],
    },
  },
]);

const plan = ref({});

const route = useRoute();

const { id } = route.params;

plan.value = cards.value.find((card) => card.id == id);

// api
//   .get("/plans/" + id)
//   .then((response) => {
//     console.log(response.data);
//     plan.value = response.data;
//   })
//   .catch((error) => {
//     console.error("Erreur lors de la récupération des plans:", error);
//   });
</script>

<style scoped>
.text-uppercase {
  text-transform: uppercase;
}
</style>
