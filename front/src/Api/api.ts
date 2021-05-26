import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3003/api'
})

export const appApi = {
    getCountries(){
        return instance.get('/countries')
        .then(response => response.data)
    },
    getCities(country: string){
        return instance.post('/cities', {country})
        .then(response => response.data)
    },
    getPopulations(city: string){
        return instance.post('/populations', {city})
        .then(response => response.data)
    }
}