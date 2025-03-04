import type { FastifyInstance } from "fastify"

export const ApiPlugin = (server: FastifyInstance) => {
	server.get("/", () => {
		return { message: "Hello, client!" }
	})
}
