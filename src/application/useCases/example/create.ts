import type { Example } from "../../../domain/entities/Example.js"
import type { IExampleDbRepository } from "../../../domain/repositories/example/db.js"
import type { CreateExampleUseCaseDto } from "../../ports/example/dtos.js"
import type { ICreateExampleUseCase } from "../../ports/example/interfaces.js"



export class CreateExampleUseCase implements ICreateExampleUseCase{
   
    constructor(private exampleRepository:IExampleDbRepository) {} 

    // create Example
    async execute(data:CreateExampleUseCaseDto):Promise<Example> {

        // logic application
        
        try {
            const result = await this.exampleRepository.create(data )
            
           return result

        } catch (error) {
            throw new Error("error")
        }

    }
}