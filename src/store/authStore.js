import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token') || null, // Récupérer le token du localStorage s'il existe
  }),
  actions: {
    setToken(token) {
      this.token = token;
      localStorage.setItem('token', token); // Stocker le token dans le localStorage
    },
    clearToken() {
      this.token = null;
      localStorage.removeItem('token'); // Supprimer le token du localStorage
    },
  },
});
