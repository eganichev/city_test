import express from 'express'
import { AppController } from '../controllers/app'
const appRouter = express.Router()


appRouter.get('/countries', AppController.getCountries)
appRouter.post('/cities', AppController.getCities)
appRouter.post('/populations', AppController.getPopulation)

export default appRouter