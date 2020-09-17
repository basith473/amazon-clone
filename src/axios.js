import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/fir-4d6bc/us-central1/api", //The API (cloud function) URL
});

export default instance;
