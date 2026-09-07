import { cp, mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const outputDir = path.resolve(root, process.env.PAGES_OUTPUT_DIR ?? "docs");
const sourceUrl = process.env.PAGES_SOURCE_URL ?? "http://127.0.0.1:4189/";

const response = await fetch(sourceUrl);
if (!response.ok) {
  throw new Error(`Could not fetch the production page: ${response.status}`);
}

let html = await response.text();
const cssDir = path.join(root, "dist", "client", "_next", "static", "css");
const cssFile = (await readdir(cssDir)).find((file) => file.endsWith(".css"));

if (!cssFile) {
  throw new Error("No compiled CSS file found in dist/client/_next/static/css");
}

// GitHub Pages does not run the Vinext server, so keep the server-rendered HTML,
// remove hydration/runtime scripts, and point optimized images at public assets.
html = html
  .replace(/<script[\s\S]*?<\/script>/gi, "")
  .replace(/<link[^>]+rel="modulepreload"[^>]*>/gi, "")
  .replace(/<link[^>]+rel="preload"[^>]*>/gi, "")
  .replace(/<link[^>]+rel="stylesheet"[^>]*>/i, '<link rel="stylesheet" href="./styles.css">')
  .replace(/\/_next\/image\?url=([^&"\s]+)[^"\s]*/g, (_, encodedPath) => decodeURIComponent(encodedPath).replace(/^\//, ""))
  .replaceAll('="/logo.svg', '="./logo.svg')
  .replaceAll('="/favicon.svg', '="./favicon.svg')
  .replaceAll('="/images/', '="./images/');

await mkdir(outputDir, { recursive: true });
await mkdir(path.join(outputDir, "images"), { recursive: true });
await cp(path.join(root, "public", "images"), path.join(outputDir, "images"), { recursive: true });
await cp(path.join(root, "public", "logo.svg"), path.join(outputDir, "logo.svg"));
await cp(path.join(root, "public", "favicon.svg"), path.join(outputDir, "favicon.svg"));
await cp(path.join(cssDir, cssFile), path.join(outputDir, "styles.css"));
await writeFile(path.join(outputDir, ".nojekyll"), "");
await writeFile(path.join(outputDir, "index.html"), `<!doctype html>${html.slice(html.indexOf("<html"))}`);

console.log(`Static GitHub Pages export written to ${outputDir}`);
