<template>
  <router-view />
</template>

<script setup>
import { useRouter } from "vue-router";
import { api } from "@/api";
import useAuthStore from "./store/auth";
import { storeToRefs } from "pinia";

const router = useRouter();

const authStore = useAuthStore();

const { authenticatedUser, authenticationToken } = storeToRefs(authStore);

// router.afterEach(() => {
//   api
//     .get("/users/1")
//     .then((response) => {
//       console.log(response.data);
//       authStore.updateAuthenticatedUser(response.data);
//     })
//     .catch((error) => {
//       console.error("Erreur lors de la récupération des plans:", error);
//     });
// });
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
  background-color: #92c01f09;
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
