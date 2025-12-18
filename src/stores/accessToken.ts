import { defineStore } from "pinia";
import { ref } from "vue";

export const useAccessTokenStore = defineStore('accessTokenStore', {
  state: () => ({
    accessToken: ref('-'),
  }),
  getters: {
    getToken: (state) => state.accessToken,
    getBearerToken: (state) => 'Bearer ' + state.accessToken,
  },
  actions: {
    setToken(newToken:string) {
      this.accessToken = newToken;
    },
  },
  persist: true
})
