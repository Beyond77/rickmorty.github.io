import axios from "axios"

export const rickmortyApi = axios.create({
    baseURL: `${process.env.API_ROOT_RICKANDMORTY}`
})