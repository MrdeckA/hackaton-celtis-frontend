import { defineStore } from "pinia";
import { ref } from "vue";

export default defineStore("setting", () => {
  const settings = ref([]);
  const currentSettingsPage = ref(1);
  const totalSettings = ref(1);
  const totalSettingsPage = ref(undefined);
  const settingsStartIndex = ref(undefined);
  const settingsEndIndex = ref(undefined);

  function updateSettings(_settings_response) {
    currentSettingsPage.value = _settings_response.currentPage;
    totalSettings.value = _settings_response.total;
    totalSettingsPage.value = _settings_response.totalPages;
    settingsStartIndex.value = _settings_response.startIndex;
    settingsEndIndex.value = _settings_response.endIndex;
  }

  function updateList(_settings) {
    settings.value = _settings;
  }
  function resetStore() {
    settings.value = [];
    currentSettingsPage.value = 1;
    totalSettings.value = 1;
    totalSettingsPage.value = undefined;
    settingsStartIndex.value = undefined;
    settingsEndIndex.value = undefined;
  }

  return {
    settings,
    currentSettingsPage,
    totalSettings,
    totalSettingsPage,
    settingsEndIndex,
    settingsStartIndex,
    updateSettings,
    resetStore,
    updateList,
  };
});
