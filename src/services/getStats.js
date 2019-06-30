import axios from "axios";

const apiClient = axios.create({
  baseURL: 'https://api.mysportsfeeds.com/v2.1/pull/mlb/2019-regular/',
  headers: {
    Authorization: 'Basic MWEzYjdlNjQtMjAyNC00NWIwLTg1MWQtOWE3MmI1Ok1ZU1BPUlRTRkVFRFM='
  }
});

export default {
  getDynamicScores() {
    return apiClient.get("standings.json");
  }
};