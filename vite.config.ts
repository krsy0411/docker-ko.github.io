/// <reference types="vitest/config" />
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [tailwindcss()],
	base: './',
	publicDir: 'public',
	server: {
        open: false,  // 컨테이너 환경에서는 브라우저 자동 열기 비활성화
        host: true,  // 네트워크에서 접근 가능하도록 설정
    },
    build: {
        outDir: "dist",
        emptyOutDir: true,
    },
    test: {
        // 테스트 환경 설정
        environment: 'jsdom', // 브라우저 환경 시뮬레이션
        // 테스트 파일 패턴
        include: ['tests/**/*.{test,spec}.{js,ts}'],
    }
});