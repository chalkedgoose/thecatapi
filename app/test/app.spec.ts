import chai from 'chai';
import http from 'chai-http';
import app from '../app';
const should: Chai.Should = chai.should();
const expect: Chai.ExpectStatic = chai.expect;
import { Cats } from '../models/cat'

chai.use(http);

describe('Get Index Route Response /', function () {
    it('status 200 ✅ && some text 📖', done => {
        beforeEach(done => {
            console.log('cleanup');
            done();
        })
        chai.request(app).get("/")
            .end((err: Error, response: ChaiHttp.Response) => {
                if (err) console.error(err);
                response.should.have.status(200);
                expect(response.body.message).to.be.equal("The Cat API 😹");
                expect(response.status).to.be.equal(200);
            });
        done();
    });
});

describe('POST and Create Single Cat /createCat', function () {
    it('status 201 ✅ and a 😸 Cat JSON', done => {
        chai.request(app).post("/createCat")
            .send({ image: "", age: 3, name: "Mr.Mittens", price: 350.4 })
            .end((err: Error, response: ChaiHttp.Response) => {
                if (err) console.error(err);
                response.should.have.status(201);
                expect(response.body.name).to.be.equal("Mr.Mittens");
                expect(response.body.age).to.be.equal(3);
                expect(response.body.price).to.be.equal(350.4);
                expect(response.body.image).to.be.equal("");
                expect(response.status).to.be.equal(201);
            })
        done();
    });
});

describe('POST and Create Multiple Cats /createCats', function () {
    const count = Math.floor(Math.random() * Math.floor(50));
    it('status 201 ✅ & JSON of multiple Cats 🙀', done => {
        let payload = [];
        for (let i = 0; i <= count; i++) {
            payload.push({ image: "", age: 3, name: "Mr.Mittens", price: 350.4 })
        }
        chai.request(app).post("/createCats")
            .send(payload)
            .end((err: Error, response: ChaiHttp.Response) => {
                if (err) console.error(err);
                response.should.have.status(201);
                const cats = <Cats>response.body;

                cats.forEach(cat => {
                    expect(cat.name).to.be.equal("Mr.Mittens");
                    expect(cat.age).to.be.equal(3);
                    expect(cat.price).to.be.equal(350.4);
                    expect(cat.image).to.be.equal("");
                });

                expect(cats.length).to.be.equal(count + 1);
                expect(response.status).to.be.equal(201);
            })
        done();
    });
});

describe('Get Cats /getCats', function () {
    it('status 200 ✅', done => {
        chai.request(app).get("/getCats")
            .end((err: Error, response: ChaiHttp.Response) => {
                if (err) console.error(err);
                response.should.have.status(200);
                expect(response.status).to.be.equal(200);
            });
        done();
    });
});
