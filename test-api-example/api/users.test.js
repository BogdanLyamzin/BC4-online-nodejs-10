const express = require("express");
const request = require("supertest");

const usersRouter = require("./users");

const app = express();

app.use("/users", usersRouter);

describe("Test users routes", ()=> {
    beforeAll(()=> app.listen(3000));

    const res = await request(app).get("/users");

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body.data.result)).toBeTruthy();
    if(res.body.data.result.length){
        expect(res.body.data.result[0].name).toBeString();
    }
    
    afterAll(()=> app.close());
})