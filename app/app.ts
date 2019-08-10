import express, { Request, Response, Application } from 'express';
import { createCatHandler, createBulkCatsHandler, getCats } from './controllers/cats';
import bodyParser from 'body-parser';
import helmet from 'helmet'
import cors from 'cors'
import mongoose from 'mongoose';
require('dotenv').config()

const app: Application = express();
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
try {
    mongoose.connect(process.env.DATABASE, { useNewUrlParser: true });
} catch (error) {
    console.error(error);
}


app.get('/',
    function (request: Request, response: Response) {
        response.json({
            message: "The Cat API 😹"
        }).status(200);
    });

app.post('/createCat', createCatHandler);
app.post('/createCats', createBulkCatsHandler);
app.get('/getCats', getCats);

app.listen(process.env.PORT || process.env.CUSTOM_PORT,
    function () {
        console.log(`Application running on port ${process.env.CUSTOM_PORT}`)
    });

export default app;