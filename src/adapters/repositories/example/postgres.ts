import type { Example } from "../../../domain/entities/Example.js";
import type { IExampleDbRepository } from "../../../domain/repositories/example.db.js";


export class examplePostgressRepository implements IExampleDbRepository {

    create(data: Example): Promise<Example> {
        throw new Error("Method not implemented.");

        //The response of some ORM or ODM must be mapped to match the entity
    }
    update(data: Example): Promise<Example> {
        throw new Error("Method not implemented.");
    }
    deleteById(ExampleId: Example["id"]): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}