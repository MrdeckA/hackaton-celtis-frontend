<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->

  <!-- <UserHome /> -->
  <!-- <HomeView /> -->

  <v-container v-if="showHome">
    <v-row class="mt-10">
      <v-col cols="12">
        <img
          src="./assets/android-chrome-512x512.png"
          alt="logo"
          width="200em"
        />
      </v-col>
      <v-col cols="12" class="">
        <h1>Bienvenue sur Tontiis Cash</h1>
      </v-col>

      <v-col cols="12" class="text-center"
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
          @click.prevent="onBtnClick()"
          variant="flat"
          color="primary"
          icon="mdi-arrow-right"
        ></v-btn
      ></v-col>
    </v-row>
  </v-container>

  <router-view v-else />
</template>

<script setup>
import UserHome from "@/views/user/UserHome.vue";
import HomeView from "@/views/HomeView.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

import useSettingStore from "@/store/setting";
import { storeToRefs } from "pinia";

const settingStore = useSettingStore();

const { showHome } = storeToRefs(settingStore);

const router = useRouter();

function onBtnClick() {
  settingStore.updateShowHome(false);
  return router.push("/user/home");
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
  /* background-color: #f2f2f2; */
  background-color: whitesmoke;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
