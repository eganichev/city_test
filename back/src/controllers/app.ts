import { AppService } from '../services/app'
import { Request, Response } from 'express';
import { City, Country, PopulationCount } from '../types/types';

interface CountriesResponse {
    error: boolean
    msg: string
    data: Country[]
}

interface GetCitiesResponse {
    error: boolean
    msg: string
    data: City[]
}


export const AppController = {
    async getCountries(req: Request, res: Response<CountriesResponse>){
        try{
            const response = await AppService.getCountries()
            res.status(200).send(response?.data.data)
        }catch(err){
            res.status(500).send(err.message)
        }
    },
    async getCities(req: Request<string>, res: Response<GetCitiesResponse>){
        try{
            const response = await AppService.getCities(req.body.country)
            res.status(200).send(response?.data.data)
        }catch(err){
            res.status(500).send(err.message)
        }
    },
    async getPopulation(req: Request<string>, res: Response){
        try{
            const response = await AppService.getPopulation(req.body.city)
            const populace: PopulationCount = response?.data.data.populationCounts[0] 

            res.status(200).send(populace)
        }catch(err){
            res.status(500).send(err.message)
        }
    }
}

