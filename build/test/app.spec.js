"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = __importDefault(require("chai"));
var chai_http_1 = __importDefault(require("chai-http"));
var app_1 = __importDefault(require("../app"));
var should = chai_1.default.should();
var expect = chai_1.default.expect;
chai_1.default.use(chai_http_1.default);
describe('Get Index Route Response /', function () {
    it('status 200 ✅ && some text 📖', function (done) {
        beforeEach(function (done) {
            console.log('cleanup');
            done();
        });
        chai_1.default.request(app_1.default).get("/")
            .end(function (err, response) {
            if (err)
                console.error(err);
            response.should.have.status(200);
            expect(response.body.message).to.be.equal("The Cat API 😹");
            expect(response.status).to.be.equal(200);
        });
        done();
    });
});
describe('POST and Create Single Cat /createCat', function () {
    it('status 201 ✅ and a 😸 Cat JSON', function (done) {
        chai_1.default.request(app_1.default).post("/createCat")
            .send({ image: "", age: 3, name: "Mr.Mittens", price: 350.4 })
            .end(function (err, response) {
            if (err)
                console.error(err);
            response.should.have.status(201);
            expect(response.body.name).to.be.equal("Mr.Mittens");
            expect(response.body.age).to.be.equal(3);
            expect(response.body.price).to.be.equal(350.4);
            expect(response.body.image).to.be.equal("");
            expect(response.status).to.be.equal(201);
        });
        done();
    });
});
describe('POST and Create Multiple Cats /createCats', function () {
    var count = Math.floor(Math.random() * Math.floor(50));
    it('status 201 ✅ & JSON of multiple Cats 🙀', function (done) {
        var payload = [];
        for (var i = 0; i <= count; i++) {
            payload.push({ image: "", age: 3, name: "Mr.Mittens", price: 350.4 });
        }
        chai_1.default.request(app_1.default).post("/createCats")
            .send(payload)
            .end(function (err, response) {
            if (err)
                console.error(err);
            response.should.have.status(201);
            var cats = response.body;
            cats.forEach(function (cat) {
                expect(cat.name).to.be.equal("Mr.Mittens");
                expect(cat.age).to.be.equal(3);
                expect(cat.price).to.be.equal(350.4);
                expect(cat.image).to.be.equal("");
            });
            expect(cats.length).to.be.equal(count + 1);
            expect(response.status).to.be.equal(201);
        });
        done();
    });
});
describe('Get Cats /getCats', function () {
    it('status 200 ✅', function (done) {
        chai_1.default.request(app_1.default).get("/getCats")
            .end(function (err, response) {
            if (err)
                console.error(err);
            response.should.have.status(200);
            expect(response.status).to.be.equal(200);
        });
        done();
    });
});
