import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const css = readFileSync(resolve("docs/.vitepress/theme/custom.css"), "utf8");

assert.match(
  css,
  /\.vp-doc td,\s*[\r\n]+\.vp-doc th\s*\{[^}]*overflow-wrap:\s*anywhere;/s,
  "table cells should wrap long words and links instead of forcing horizontal overflow",
);

assert.doesNotMatch(
  css,
  /@media \(max-width: 768px\)\s*\{[\s\S]*?display:\s*grid;/s,
  "mobile tables should remain real tables so borders and rows stay visually intact",
);

assert.match(
  css,
  /\.vp-doc table:has\(th:nth-child\(3\):last-child\) td:first-child,[\s\S]*?min-width:\s*10ch;/s,
  "three-column tables should keep date-sized first columns readable on desktop",
);

assert.match(
  css,
  /@media \(max-width: 768px\)\s*\{[\s\S]*?\.vp-doc table\s*\{[\s\S]*?table-layout:\s*fixed;/s,
  "mobile tables should use fixed layout so percentage column widths are stable",
);

assert.match(
  css,
  /@media \(max-width: 768px\)\s*\{[\s\S]*?\.vp-doc table:has\(th:nth-child\(3\):last-child\) td:nth-child\(2\),[\s\S]*?width:\s*42%;/s,
  "mobile three-column tables should give the event column more room",
);
