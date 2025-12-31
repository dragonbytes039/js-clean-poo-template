import { Router } from "express";
import exampleController from "../../assembly/example.assembly.js";

const ExampleRouter:Router = Router()

ExampleRouter.post("/create" ,exampleController.createExample )

export default ExampleRouter