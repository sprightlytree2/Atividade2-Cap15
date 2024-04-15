import { Router, request, response, Request, Response } from "express";

import { getItem, getItems, postItems, updateItem, deleteItem } from "./controller/ItemController";


const routes = Router();

routes.get("/home", (request: Request, response: Response) => {
    return response.json({message: "Hello turma!"})
});

routes.get("/items", getItems);
routes.post("/items", postItems);
routes.get("/items/:id", getItem);
routes.put("/items/:id", updateItem);
routes.delete("/items/:id", deleteItem);

export default routes;