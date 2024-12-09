<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <img
          src="../assets/android-chrome-512x512.png"
          alt="logo"
          width="200em"
        />
      </v-col>
      <v-col cols="12" class="">
        <h1>Bienvenue sur Tontiis Cash</h1>
      </v-col>

      <v-col cols="12" class="text-left"
        >Votre application poour intégrer et gérer vos
        <div
          class="text-center mx-auto"
          style="
            scale: 120%;
            font-weight: bold;
            border-bottom: solid;
            width: 20%;
            border-bottom-color: #93c01f;
          "
        >
          tontines
        </div>
      </v-col>

      <v-col cols="12" class="mt-14">
        <span style="font-size: medium" class="mr-2">Continuer</span>
        <v-btn
          to="/user/home"
          variant="flat"
          color="primary"
          icon="mdi-arrow-right"
        ></v-btn
      ></v-col>
    </v-row>
  </v-container>
</template>

<script setup></script>

<style scoped></style>
