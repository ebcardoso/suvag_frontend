import { useAccessTokenStore } from "@/stores/accessToken";
import axios from "axios";

export const datasource = axios.create({
  baseURL: 'http://localhost:3000'
});

export const getConfigs = function() {
  const store = useAccessTokenStore();
  return {
    headers: {
      Authorization: store.getBearerToken
    }
  }
};
