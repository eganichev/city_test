import { instance } from './index'

export const AppService = {
    async getCountries(){
        try{
            let response = await instance.get('/')
            return response
        }catch(err){
            console.log(err)
        }
    },
    async getCities(country: string){
        let body = {
            "limit": 100,
            "order": "asc",
            "orderBy": "name",
            "country": country
        }

        try{
            let response = await instance.post('/cities/filter', body)
            return response
        }catch(err){
            console.log(err)
        }
    },
    async getPopulation(city: string){
        try{
            let response = await instance.post('/cities', { city })
            return response
        }catch(err){
            console.log(err)
        }
    }
}
