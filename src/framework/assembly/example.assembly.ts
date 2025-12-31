import type {Request, Response, NextFunction} from 'express'
import { examplePostgressRepository } from "../../adapters/repositories/example/postgres.js"
import { CreateExampleController } from "../../adapters/http/example/create.js"
import { CreateExampleUseCase } from '../../application/useCases/example/create.js'

// repository
const repositoryAssembly = new examplePostgressRepository()

const createExampleUseCase = new CreateExampleUseCase(repositoryAssembly)

const createExample= new CreateExampleController(createExampleUseCase)


export default {
    createExample 
}



