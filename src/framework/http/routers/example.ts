import { Router } from "express";
import { createExampleControllerBuild } from "../../Di/httpAssembly.js";

const ExampleRouter:Router = Router()

ExampleRouter.post("/create" ,createExampleControllerBuild)

export default ExampleRouter