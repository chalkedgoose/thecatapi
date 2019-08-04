"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createCatHandler(request, response) {
    try {
        var data = request.body;
        response.status(201).json(data);
    }
    catch (error) {
        console.error(error);
        response.sendStatus(500);
    }
}
exports.createCatHandler = createCatHandler;
function createBulkCatsHandler(request, response) {
    try {
        var data = request.body;
        response.status(201).json(data);
    }
    catch (error) {
        console.error(error);
        response.sendStatus(500);
    }
}
exports.createBulkCatsHandler = createBulkCatsHandler;
function getCats(request, response) {
    try {
        var count = Math.floor(Math.random() * Math.floor(50));
        var payload = [];
        for (var i = 0; i <= count; i++) {
            payload.push({ image: "", age: 3, name: "Mr.Mittens", price: 350.4 });
        }
        var data = payload;
        response.status(200).json(data);
    }
    catch (error) {
        console.error(error);
        response.sendStatus(500);
    }
}
exports.getCats = getCats;
