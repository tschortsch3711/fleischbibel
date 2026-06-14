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
  /\.vp-doc (?:td|th):nth-child\([^)]+\)[\s\S]*?min-width:/,
  "table columns should not be globally widened with min-width rules",
);

assert.match(
  css,
  /@media \(max-width: 768px\)\s*\{[\s\S]*?\.vp-doc table\s*\{[\s\S]*?display:\s*grid;/s,
  "mobile document tables should switch to grid so column caps are actually applied",
);

assert.match(
  css,
  /\.vp-doc table:has\(th:nth-child\(2\):last-child\)\s*\{[^}]*grid-template-columns:\s*clamp\(8rem,\s*38%,\s*14rem\)\s*minmax\(0,\s*1fr\);/s,
  "two-column tables should cap the label column and leave the remaining width to content",
);

assert.match(
  css,
  /\.vp-doc table:has\(th:nth-child\(3\):last-child\)\s*\{[^}]*grid-template-columns:\s*clamp\(5\.5rem,\s*28%,\s*8rem\)\s*clamp\(6rem,\s*34%,\s*13rem\)\s*minmax\(0,\s*1fr\);/s,
  "three-column tables need explicit mobile columns for date, title, and context",
);
