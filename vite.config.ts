import { fileURLToPath, URL } from "url"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@hooks": fileURLToPath(new URL("./src/hooks", import.meta.url)),
			"@models": fileURLToPath(new URL("./src/models", import.meta.url)),
			"@store": fileURLToPath(new URL("./src/store", import.meta.url)),
			"@shared": fileURLToPath(new URL("./src/components/shared", import.meta.url)),
		},
	},
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: "./src/setupTests.ts",
	},
})
