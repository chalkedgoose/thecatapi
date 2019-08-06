import { Request, Response } from 'express';
import { Cat, Cats } from '../models/cat';
import uuid from 'uuid/v1';

export function createCatHandler(request: Request, response: Response) {
    try {
        const data = <Cat>request.body;
        response.status(201).json(data);
    }
    catch (error) {
        console.error(error);
        response.sendStatus(500);
    }
}

export function createBulkCatsHandler(request: Request, response: Response) {
    try {
        const data = <Cats>request.body;
        response.status(201).json(data);
    }
    catch (error) {
        console.error(error);
        response.sendStatus(500);
    }
}

export function getCats(request: Request, response: Response) {
    try {
        const count = Math.floor(Math.random() * Math.floor(50));
        let payload = [];
        for (let i = 0; i <= count; i++) {
            payload.push({ image: "", age: 3, name: "Mr.Mittens", price: 350.4, id: uuid()})
        }
        const data = <Cats>payload;
        response.status(200).json(data);
    } catch (error) {
        console.error(error);
        response.sendStatus(500);
    }
}