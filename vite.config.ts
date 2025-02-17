import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [tailwindcss()],
	base: './',
	publicDir: 'public',
	server: {
        open: true,  // 개발 서버 실행 시 자동으로 열기
        host: true,  // 네트워크에서 접근 가능하도록 설정
    },
    build: {
        outDir: "dist",
        emptyOutDir: true,
    }
});