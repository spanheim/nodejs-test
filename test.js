const express = require("express");
const request = require("supertest");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("My greetings from application Node.js 🚀");
});

const server = app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});

describe("GET /", function () {
    it("should return a greeting message", function (done) {
        request(app)
            .get("/")
            .expect(200)
            .expect("My greetings from application Node.js 🚀", done);
    });
});

after(function (done) {
    server.close(done);
});

