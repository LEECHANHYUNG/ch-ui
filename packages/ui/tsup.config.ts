// tsup.config.ts
import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";
import { defineConfig } from "tsup";

export default [
  // ESM 빌드: package.json의 "module": "dist/esm/index.js"에 맞춰 출력
  defineConfig({
    entryPoints: ["src/index.ts"],
    format: ["cjs"],
    outDir: "dist/cjs",
    external: ["react", "react-dom"],
    esbuildPlugins: [vanillaExtractPlugin()],
  }),
  defineConfig({
    entryPoints: ["src/index.ts"],
    format: ["esm"],
    outDir: "dist/esm",
    // "react" 와 "react-dom"만 외부 모듈로 처리합니다.
    external: ["react", "react-dom"],
    clean: true,
    // SCSS 파일을 빌드하기 위한 플러그인 추가
    esbuildPlugins: [vanillaExtractPlugin()],
  }),
  defineConfig({
    entryPoints: ["src/index.ts"],
    format: ["esm"],
    splitting: true,
    sourcemap: true,
    clean: true,
    dts: { only: true },
    outDir: "dist/types",
    external: ["react", "react-dom"],
    // dts 빌드는 자바스크립트 번들링이 아니므로 sassPlugin 적용하지 않음
  }),
];
