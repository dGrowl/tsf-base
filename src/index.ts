import Fastify from "fastify"

import APIPlugin from "./api/root.js"

const server = Fastify({ logger: true })

server.register(APIPlugin, { prefix: "/api" })

const main = async () => {
	try {
		await server.listen({ port: 3000 })
	}	catch (error) {
		console.error(error)
	}
}

main()
