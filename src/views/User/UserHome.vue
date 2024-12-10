<template>
  <v-container class="py-10 scrollable">
    <!-- Titre principal -->
    <v-row justify="center" class="mb-5">
      <v-col cols="12" class="text-center">
        <h2 class="text-h4 font-weight-bold">Nos plans de tontine</h2>
      </v-col>
    </v-row>

    <!-- Cartes -->
    <v-row justify="center" align="center" dense>
      <!-- Carte 1 : Machines agricoles -->
      <v-col cols="6" md="4" class="mb-5">
        <v-card outlined>
          <v-card-title>
            <v-icon size="48" color="green">mdi-tractor</v-icon>
          </v-card-title>
          <v-card-title class="text-h6 text-uppercase">Machines Agricoles</v-card-title>
          <v-card-subtitle>
            Découvrez nos machines agricoles modernes et efficaces pour vos exploitations.
          </v-card-subtitle>
          <v-card-actions>
            <v-btn
  color="primary"
  block
  @click="$router.push({ name: 'tontine-details', params: { id: '1' } })"
>
  Consulter
</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <!-- Carte 2 : Machines de production agroalimentaire -->
      <v-col cols="6" md="4" class="mb-5">
        <v-card outlined>
          <v-card-title>
            <v-icon size="48" color="orange">mdi-factory</v-icon>
          </v-card-title>
          <v-card-title class="text-h6 text-uppercase">Production Agroalimentaire</v-card-title>
          <v-card-subtitle>
            Explorez nos solutions pour la transformation et la production agroalimentaire.
          </v-card-subtitle>
          <v-card-actions>
            <v-btn color="primary" block>Consulter</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <!-- Carte 3 : Machines pour jus de fruits -->
      <v-col cols="6" md="4" class="mb-5">
        <v-card outlined>
          <v-card-title>
            <v-icon size="48" color="red">mdi-fruit-grapes</v-icon>
          </v-card-title>
          <v-card-title class="text-h6 text-uppercase">Machines pour Jus de Fruits</v-card-title>
          <v-card-subtitle>
            Produisez des jus frais et délicieux grâce à nos équipements spécialisés.
          </v-card-subtitle>
          <v-card-actions>
            <v-btn color="primary" block>Consulter</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <!-- Carte 4 : Tontine pour l'immobilier -->
      <v-col cols="6" md="4" class="mb-5">
        <v-card outlined>
          <v-card-title>
            <v-icon size="48" color="blue">mdi-home-city</v-icon>
          </v-card-title>
          <v-card-title class="text-h6 text-uppercase">Immobilier</v-card-title>
          <v-card-subtitle>
            Participez à une tontine pour financer vos projets immobiliers : achat, construction ou rénovation.
          </v-card-subtitle>
          <v-card-actions>
            <v-btn color="primary" block>Consulter</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <!-- Carte 5 : Tontine pour l'éducation -->
      <v-col cols="6" md="4" class="mb-5">
        <v-card outlined>
          <v-card-title>
            <v-icon size="48" color="purple">mdi-school</v-icon>
          </v-card-title>
          <v-card-title class="text-h6 text-uppercase">Éducation</v-card-title>
          <v-card-subtitle>
            Facilitez l'accès à une éducation de qualité pour vos enfants grâce à une tontine éducative.
          </v-card-subtitle>
          <v-card-actions>
            <v-btn color="primary" block>Consulter</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <!-- Carte 6 : Tontine pour le transport -->
      <v-col cols="6" md="4" class="mb-5">
        <v-card outlined>
          <v-card-title>
            <v-icon size="48" color="brown">mdi-bus</v-icon>
          </v-card-title>
          <v-card-title class="text-h6 text-uppercase">Transport</v-card-title>
          <v-card-subtitle>
            Investissez dans des moyens de transport avec des plans de tontine adaptés à vos besoins.
          </v-card-subtitle>
          <v-card-actions>
            <v-btn color="primary" block>Consulter</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
/* Le contenu est statique */
</script>

<style scoped>
.scrollable {
  max-height: 100vh; /* S'assure que la hauteur est limitée à la fenêtre */
  overflow-y: auto; /* Active le défilement vertical */
}

.v-card {
  border-radius: 8px; /* Coins légèrement arrondis */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Légère ombre */
}

.v-icon {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

h2 {
  font-family: 'Roboto', sans-serif;
  color: #333;
}
</style>