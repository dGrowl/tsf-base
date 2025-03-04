import { describe, expect, it } from "vitest"

import { createServer } from "../../src/core/server.js"

describe("API root", () => {
	it("should greet the client", async () => {
		const server = createServer()

		const response = await server.inject({ path: "/api" })
		const body = await response.json()

		expect(response.statusCode).toBe(200)
		expect(body).toMatchObject({ message: "Hello, client!" })
	})
})
