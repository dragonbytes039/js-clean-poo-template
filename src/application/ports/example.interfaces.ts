import type { Example } from "../../domain/entities/Example.js";
import type { CreateExampleUseCaseDto } from "./example.dtos.js";



export interface ICreateExampleUseCase {
    execute(data: CreateExampleUseCaseDto):Promise<Example> 
}