import { defineStore } from "pinia";
import { ref } from "vue";

export default defineStore("auth", () => {
  const authenticationToken = ref(undefined);

  const authenticatedUser = ref(undefined);

  function updateAuthenticationToken(_authenticationToken) {
    authenticationToken.value = _authenticationToken;
  }
  function updateAuthenticatedUser(_user) {
    authenticatedUser.value = _user;
  }

  function resetStore() {
    authenticationToken.value = undefined;
    authenticatedUser.value = undefined;
  }

  return {
    authenticationToken,
    authenticatedUser,
    updateAuthenticationToken,
    updateAuthenticatedUser,
    resetStore,
  };
});
