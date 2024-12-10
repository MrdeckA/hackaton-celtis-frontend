import { defineStore } from "pinia";
import { ref } from "vue";

export default defineStore(
  "setting",
  () => {
    const showHome = ref(true);

    function updateShowHome(value) {
      showHome.value = value;
    }

    function resetStore() {
      showHome.value = true;
    }

    return {
      showHome,
      updateShowHome,
      resetStore,
    };
  },
  {
    persist: true,
  }
);
