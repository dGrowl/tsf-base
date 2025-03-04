import Fastify from "fastify"

import { ApiPlugin } from "../api/root.js"

export const createServer = () => {
	const server = Fastify({ logger: true })

	server.register(ApiPlugin, { prefix: "/api" })

	return server
}
