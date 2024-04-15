import { AppDataSource } from "../data-source";
import { Item } from "../entity/Item";

import { Request, Response } from "express";

const repository = AppDataSource.getRepository(Item);

export const getItems = async (request: Request, response: Response) => {
    const items = await repository.find();
    return response.json(items);
}

export const postItems = async (request: Request, response: Response) => {
    const item = await repository.save(request.body)
    return response.json(item);
}

export const getItem = async (request: Request, response: Response) => {
    const {id} = request.params;
    const item = await repository.findOneBy({id: parseInt(id)});
    return response.json(item)
}

export const updateItem = async (request: Request, response: Response) => {
    const {id} = request.params;
    const item = await repository.update(id, request.body)

    if(item.affected){
        const itemUpdated = await repository.findOneBy({id: parseInt(id)})
        return response.json(itemUpdated);
    }
    else
        return response.status(404).json({message: "Item não encontrado"})
}

export const deleteItem = async (request: Request, response: Response) => {
    const {id} = request.params;
    const item = await repository.delete(id);

    if(item.affected){
        return response.status(204).json({message: "Item excluído com sucesso"});
    }
    else
        return response.status(404).json({message: "Item não encontrado"})
}
