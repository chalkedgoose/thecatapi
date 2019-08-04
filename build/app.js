"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cats_1 = require("./controllers/cats");
var body_parser_1 = __importDefault(require("body-parser"));
var app = express_1.default();
app.use(body_parser_1.default.json());
app.get('/', function (request, response) {
    response.json({
        message: "The Cat API 😹"
    }).status(200);
});
app.post('/createCat', cats_1.createCatHandler);
app.post('/createCats', cats_1.createBulkCatsHandler);
app.get('/getCats', cats_1.getCats);
app.listen(process.env.PORT || 3000, function () {
    console.log("Application running on port 3000");
});
exports.default = app;
