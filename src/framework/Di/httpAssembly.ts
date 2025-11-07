import type {Request, Response, NextFunction} from 'express'
import { examplePostgressRepository } from "../../adapters/repositories/example/postgres.js"
import { CreateExampleController } from "../../adapters/http/controllers/example/create.js"
import { CreateExampleUseCase } from '../../application/useCases/example/create.js'

// repository
export const repositoryAssembly = new examplePostgressRepository()


//
export function createExampleControllerBuild(req:Request, res:Response, next:NextFunction){

    const useCase = new CreateExampleUseCase(repositoryAssembly)

    const controller = new CreateExampleController(useCase)

    return controller.execute(req,res,next)
}



