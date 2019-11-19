const request = require("supertest");
const assert = require("assert");

var app = require("../bin/www");

it('GET / should return "Hello World!"', function (done) {

    request(app)
        .get("/")
        .expect("Hello World!")
        .end(done);
});

it("GET /not-found should return NotFound with status 404", function (done) {

    request(app)
        .get("/not-found")
        .expect(404)
        .end(done);
});

it("GET /healthcheck should return status 200", function (done) {

    request(app)
        .get("/healthcheck")
        .expect(200)
        .end(done);
});

it("GET /elements should return json array", function (done) {

    request(app)
        .get("/elements")
        .expect(function (response) {
            const elements = response.body;
            const values = elements.map(element => element.value);
            assert.deepEqual(values, ['foo', 'bar', 'baz', 'qux']);
        })
        .end(done);
});