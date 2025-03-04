import type { FastifyInstance } from "fastify"

const plugin = (server: FastifyInstance) => {
	server.get("/", () => {
		return { message: "Hello, client!" }
	})
}

export default plugin
