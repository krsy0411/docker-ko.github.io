import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
export default defineConfig({
	plugins: [tailwindcss()],
	base: '/docker-ko.github.io/',
	build: {
		outDir: 'dist',
	}
});
