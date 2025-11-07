import type { Example } from "../../../domain/entities/Example.js";
import type { CreateExampleUseCaseDto } from "./dtos.js";



export interface ICreateExampleUseCase {
    execute(data: CreateExampleUseCaseDto):Promise<Example> 
}