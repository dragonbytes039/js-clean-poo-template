import type { Example } from "../entities/Example.js"


export interface IExampleDbRepository {
    
    
    create( data:Example ):Promise<Example> //returns Example to the user in development only

    update(data: Example):Promise<Example> //returns Example to the user in development only

    deleteById( ExampleId: Example['id']):Promise<boolean>

}
