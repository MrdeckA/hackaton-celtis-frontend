<template>
  <BackNavigation
    ><v-row justify="center" no-gutters class="my-">
      <v-col cols="12" md="8">
        <!-- Card for Profile Edit -->
        <v-card class="elevation-2">
          <v-card-title class="my-4">
            <v-icon left>mdi-account-edit</v-icon>
            Modifier le profil
          </v-card-title>

          <v-card-text>
            <!-- Profile Form -->
            <v-form v-model="formIsValid" @submit.prevent="updateProfile">
              <!-- Profile Picture -->
              <v-file-input
                v-model="profilePicture"
                label="Photo de profil"
                accept="image/*"
                outlined
                dense
                prepend-icon="mdi-camera"
                :rules="[rules.required]"
              ></v-file-input>

              <!-- Name Field -->
              <v-text-field
                v-model="user.name"
                label="Nom"
                outlined
                dense
                :rules="[rules.required]"
              ></v-text-field>

              <!-- Email Field -->
              <v-text-field
                v-model="user.email"
                label="Email"
                outlined
                dense
                :rules="[rules.required, rules.email]"
              ></v-text-field>

              <!-- Phone Field -->
              <v-text-field
                v-model="user.phone"
                label="Numéro de téléphone"
                outlined
                dense
                :rules="[rules.required, rules.phone]"
              ></v-text-field>

              <!-- Gender Select -->
              <v-select
                v-model="user.gender"
                :items="genders"
                label="Genre"
                outlined
                dense
                :rules="[rules.required]"
              ></v-select>

              <!-- Bio Field -->
              <v-textarea
                v-model="user.bio"
                label="Biographie"
                outlined
                dense
                rows="3"
              ></v-textarea>

              <!-- Save Button -->
              <v-btn color="primary" :disabled="!formIsValid" type="submit">
                Sauvegarder
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row></BackNavigation
  >
</template>

<script setup>
import BackNavigation from "@/components/BackNavigation.vue";
import { ref } from "vue";

// Data for the form
const user = ref({
  name: "Jean Dupont",
  email: "jean.dupont@example.com",
  phone: "+123456789",
  gender: "Homme",
  bio: "Développeur web passionné par la technologie.",
});

const genders = ["Homme", "Femme", "Autre"];

// State for profile picture
const profilePicture = ref(null);

// Validation rules
const rules = {
  required: (value) => !!value || "Ce champ est requis",
  email: (value) => /.+@.+\..+/.test(value) || "L'email doit être valide",
  phone: (value) =>
    /^\+?\d{10,15}$/.test(value) || "Le numéro de téléphone est invalide",
};

// Form validity
const formIsValid = ref(false);

// Update Profile function (this would be connected to a backend in a real app)
const updateProfile = () => {
  // Simulating a form submission
  console.log("Profil mis à jour:", user.value);
  // For example, you could send the data to an API or local storage
  alert("Votre profil a été mis à jour avec succès!");
};
</script>

<style scoped>
/* Custom styles for the profile edit page */
.v-card {
  max-width: 600px;
  margin: 0 auto;
}

.v-text-field,
.v-select,
.v-textarea {
  margin-bottom: 20px;
}

.v-btn {
  margin-top: 20px;
}
</style>
