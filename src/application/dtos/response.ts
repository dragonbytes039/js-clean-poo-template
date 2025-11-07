// response UseCase

import type { Example } from "../../domain/entities/Example.js"

export type ResponseDto = {
    data?:string | Example, // | Example['id'] <<<< repository responses only if necessary 
    error?:Error,
    success:boolean
}

