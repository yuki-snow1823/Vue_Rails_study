import axios from "@nuxtjs/axios";

export default axios.create({
    baseURL: process.env.API_ENDPOINT
})