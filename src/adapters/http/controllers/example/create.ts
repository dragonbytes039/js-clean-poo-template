
import type { Request, Response, NextFunction } from "express"
import type { ICreateExampleUseCase } from "../../../../application/ports/example/interfaces.js"

export class CreateExampleController{
   
    constructor(private createExampleUseCase: ICreateExampleUseCase) {} 

    // create Example
    async execute(req: Request, res:Response, next:NextFunction) {

        const dataExample = { 
            id:req.body,
            name:req.body,
            description:req.body
        } 

        try {
            const result = await this.createExampleUseCase.execute( dataExample) // or dataExample
            
            // It is not advisable to return the entity
           return res.status(201).json({result})


        } catch (error) {
            return res.status(500).send("Error")
        }

    }
}