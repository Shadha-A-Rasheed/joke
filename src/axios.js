import axios from "axios";

export const api = axios.create({
    baseURL: "https://official-joke-api.appspot.com"
})