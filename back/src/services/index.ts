import axios from 'axios'

export const instance = axios.create({
    baseURL: 'https://countriesnow.space/api/v0.1/countries/population'
})