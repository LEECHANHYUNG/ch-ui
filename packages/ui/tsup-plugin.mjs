import fs from "fs";
import path from "path";

// __dirname 대체: import.meta.url을 사용하여 현재 파일의 디렉터리 경로 얻기
const dirname = path.dirname(new URL(import.meta.url).pathname);

const mjsPath = path.resolve(dirname, "dist/esm/index.mjs");
const cssImport = "import './index.css';\n";

// index.mjs 파일에 CSS 임포트 추가
fs.appendFileSync(mjsPath, cssImport);
console.log("index.mjs에 index.css import 추가 완료");
