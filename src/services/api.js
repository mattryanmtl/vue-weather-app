import axios from "axios";

export const API = axios.create({
  baseURL: "https://api.weatherbit.io/v2.0/"
});
export const key = "dabc510102a44ddca2127a89ab8f3a44";
