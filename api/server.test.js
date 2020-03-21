const check = require("supertest")
// const db = require("./database/dbConfig")
const server = require("./server")

describe("base route",  () => {
	it("base status and message", async () => {
		const res = await check(server).get("/")
		expect(res.statusCode).toBe(200)
		expect(res.body.message).toBe("you're here")
	})
})

describe("register route", () => {
	it("register status and type", async () => {	 
		const res = await check(server).post("/api/auth/register").send({ username: "trey5", password: "password" })
		expect(res.statusCode).toBe(201)
		expect(res.type).toBe("application/json")
	})
})

describe("login route", () => {
	it("login status and message", async () => {	 
		const res = await check(server).post("/api/auth/login").send({ username: "trey", password: "password" })
		expect(res.statusCode).toBe(201)
		expect(res.body.message).toBe("Welcome trey!")
	})
})

describe("jokes route", () => {
	it("jokes status ", async () => {	 
		const res = await check(server).get("/api/jokes")
		//not authorized
		expect(res.statusCode).toBe(401)
		expect(res.type).toBe("application/json")
	})
})