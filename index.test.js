const supertest = require("supertest")
// const db = require("./database/dbConfig")
const server = require("./index")

// test("register route", async () => {
	//      const res = await supertest(server).post("/api/auth/register").send({ username: "trey2", password: "password" })
	//      expect(res.statusCode).toBe(201)
    //      expect(res.type).toBe("application/json")
// })

// test("login route", async () => {
//     const res = await supertest(server).get("/api/jokes")
// 	expect(res.statusCode).toBe(401)
// 	expect(res.type).toBe("application/json")
// })