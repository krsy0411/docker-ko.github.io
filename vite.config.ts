import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import * as markdown from "vite-plugin-markdown";
import { Mode } from "vite-plugin-markdown";

export default defineConfig({
	plugins: [
		tailwindcss(),
		markdown.plugin({
			mode: [Mode.HTML], // Markdown을 HTML로 변환
		}),
	],
	base: './',
	build: {
		outDir: 'dist',
	},
	publicDir: 'public',
});
