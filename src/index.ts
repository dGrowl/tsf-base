import { createServer } from "./core/server.js"

const main = async () => {
	const server = createServer()

	try {
		await server.listen({ port: 3000 })
	} catch (error) {
		server.log.error(error)
	}
}

main()
