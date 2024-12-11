<template>
  <Navigation
    ><v-container class="py-5 scrollable">
      <!-- Titre principal -->
      <v-row justify="center">
        <v-col cols="12" class="text-center">
          <h2 class="text-h5 font-weight-bold text-primary">
            Découvrez nos packs de Tontine
          </h2>
        </v-col>
      </v-row>

      <!-- Cartes des plans -->
      <v-row justify="center" align="center" dense>
        <v-col
          cols="6"
          md="6"
          lg="4"
          class="mb-5"
          v-for="(card, index) in cards"
          :key="index"
        >
          <v-card class="py-2 hoverable" :style="{ height: '12em' }" outlined>
            <v-card-title>
              <v-icon :color="card.color" size="48">{{ card.icon }}</v-icon>
            </v-card-title>
            <v-card-text class="text-h" style="font-size: 16px">{{
              card.title
            }}</v-card-text>
            <v-card-subtitle>{{ card.subtitle }}</v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-container></Navigation
  >
</template>

<script setup>
import Navigation from "@/components/Navigation.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

// Données utilisateur
const drawer = ref(false);
const router = useRouter();
const hasGoBackIcon = ref(false);

const isLoading = ref(false);

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

// Routes de navigation latérale
const NAVIGATION_DRAWER_ROUTES = [
  { title: "Tableau de bord", path: "/user/home", icon: "mdi-home" },
  { title: "Mes tontines", path: "/user/tontines", icon: "mdi-history" },
  { title: "Plans", path: "/user/plans", icon: "mdi-view-list" },
  { title: "Profil", path: "/user/account", icon: "mdi-account-circle" },
];

// Cartes de plans
const cards = [
  {
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
];

// Barre de navigation inférieure
const bottomRoutes = [
  { label: "Accueil", path: "/user/home", icon: "mdi-home" },
  { label: "Plans", path: "/user/plans", icon: "mdi-view-list" },
  { label: "Mes tontines", path: "/user/tontines", icon: "mdi-history" },
  { label: "Compte", path: "/user/account", icon: "mdi-account-circle" },
];
</script>

<style scoped>
/* Styles personnalisés */
.hoverable:hover {
  background-color: rgba(0, 0, 0, 0.05);
  transition: background-color 0.2s ease-in-out;
}

.v-icon {
  transition: transform 0.2s ease;
}
.v-icon:hover {
  transform: scale(1.2);
}

.v-btn-fab-transition {
  z-index: 1;

  margin-bottom: 5em;
  margin-right: 1.5em;
}
</style>
