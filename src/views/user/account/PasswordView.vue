<template>
  <BackNavigation>
    <v-row no-gutters justify="center" class="my-5">
      <v-col cols="12" md="6">
        <!-- Card for Change Password -->
        <v-card class="elevation-2">
          <v-card-title class="my-4">
            <v-icon left>mdi-lock-outline</v-icon>
            Modifier le mot de passe
          </v-card-title>

          <v-card-text>
            <!-- Password Change Form -->
            <v-form v-model="formIsValid" @submit.prevent="changePassword">
              <!-- Old Password -->
              <v-text-field
                v-model="oldPassword"
                label="Ancien mot de passe"
                type="password"
                outlined
                dense
                :rules="[rules.required, rules.password]"
                prepend-icon="mdi-lock"
              ></v-text-field>

              <!-- New Password -->
              <v-text-field
                v-model="newPassword"
                label="Nouveau mot de passe"
                type="password"
                outlined
                dense
                :rules="[rules.required, rules.password]"
                prepend-icon="mdi-lock"
              ></v-text-field>

              <!-- Confirm New Password -->
              <v-text-field
                v-model="confirmPassword"
                label="Confirmer le nouveau mot de passe"
                type="password"
                outlined
                dense
                :rules="[rules.required, rules.matchConfirmPassword]"
                prepend-icon="mdi-lock"
              ></v-text-field>

              <!-- Submit Button -->
              <v-btn :disabled="!formIsValid" color="primary" type="submit">
                Sauvegarder le mot de passe
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </BackNavigation>
</template>

<script setup>
import BackNavigation from "@/components/BackNavigation.vue";
import { ref } from "vue";

// Form data
const oldPassword = ref("");
const newPassword = ref("");
const confirmPassword = ref("");

// Validation rules
const rules = {
  required: (value) => !!value || "Ce champ est requis",
  password: (value) =>
    value.length >= 6 || "Le mot de passe doit comporter au moins 6 caractères",
  matchConfirmPassword: (value) =>
    value === newPassword.value || "Les mots de passe ne correspondent pas",
};

// Form validity
const formIsValid = ref(false);

// Change password function (this would be connected to backend in real app)
const changePassword = () => {
  // Simulating a password change process
  console.log("Ancien mot de passe:", oldPassword.value);
  console.log("Nouveau mot de passe:", newPassword.value);
  alert("Votre mot de passe a été mis à jour avec succès!");
};
</script>

<style scoped>
/* Custom styling for the password change page */
.v-card {
  max-width: 500px;
  margin: 0 auto;
}

.v-text-field {
  margin-bottom: 20px;
}

.v-btn {
  margin-top: 20px;
}
</style>
