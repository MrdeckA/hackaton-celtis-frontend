<template>
  <BackNavigation>
    <v-container class="py-4 px-3">
      <!-- Titre principal -->
      <h1 class="text-h5 font-weight-bold text-center mb-6">
        Rejoindre une Tontine
      </h1>

      <!-- Formulaire -->
      <v-form ref="form" v-model="valid" class="px-3">
        <!-- Sélectionner une Tontine -->
        <v-select
          v-model="selectedTontine"
          :items="tontines"
          item-text="name"
          item-value="id"
          label="Sélectionner un pack"
          outlined
          required
        ></v-select>

        <!-- Montant de contribution -->
        <v-text-field
          v-model="amount"
          label="Montant de contribution (FCFA)"
          outlined
          type="number"
          required
        ></v-text-field>

        <!-- Fréquence de paiement -->
        <v-radio-group
          v-model="paymentFrequency"
          label="Fréquence de paiement"
          row
          required
        >
          <v-radio label="Hebdomadaire" value="weekly"></v-radio>
          <v-radio label="Mensuel" value="monthly"></v-radio>
        </v-radio-group>

        <!-- Informations supplémentaires -->
        <v-textarea
          v-model="additionalInfo"
          label="Message ou information supplémentaire"
          outlined
          rows="3"
        ></v-textarea>

        <!-- Bouton de soumission -->
        <v-btn
          :disabled="!valid"
          block
          color="primary"
          class="mt-4"
          @click="submitForm"
        >
          Rejoindre la Tontine
        </v-btn>
      </v-form>
    </v-container></BackNavigation
  >
</template>

<script setup>
import BackNavigation from "@/components/BackNavigation.vue";
import { ref } from "vue";

// État des données
const tontines = ref([
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
const selectedTontine = ref(null);
const amount = ref(null);
const paymentFrequency = ref(null);
const additionalInfo = ref("");
const valid = ref(false);

// Soumettre le formulaire
const submitForm = () => {
  if (valid.value) {
    const formData = {
      tontineId: selectedTontine.value,
      contributionAmount: amount.value,
      frequency: paymentFrequency.value,
      additionalMessage: additionalInfo.value,
    };
    console.log("Formulaire soumis :", formData);
    alert("Vous avez rejoint la tontine avec succès !");
  } else {
    alert("Veuillez remplir tous les champs requis.");
  }
};
</script>

<style scoped>
/* Style pour le formulaire */
.v-container {
  max-width: 500px;
  margin: auto;
}

.v-btn {
  font-weight: bold;
  border-radius: 10px;
}
</style>
