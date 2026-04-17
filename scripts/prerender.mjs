import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";
import {
  DEFAULT_META_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  absoluteUrl,
  getSeoSchemaEntries,
  prerenderPages,
} from "../src/data/seoData.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const distDir = path.join(projectRoot, "dist");
const templatePath = path.join(distDir, "index.html");

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function replaceOrAppend(html, pattern, nextValue) {
  if (pattern.test(html)) {
    return html.replace(pattern, nextValue);
  }

  return html.replace("</head>", `${nextValue}\n  </head>`);
}

function upsertMeta(html, attribute, key, content) {
  const pattern = new RegExp(
    `<meta\\s+[^>]*${attribute}=["']${escapeRegExp(key)}["'][^>]*>`,
    "i"
  );

  if (!content) {
    return html.replace(pattern, "");
  }

  const tag = `  <meta ${attribute}="${key}" content="${escapeHtml(content)}" />`;
  return replaceOrAppend(html, pattern, tag);
}

function upsertCanonical(html, href) {
  const pattern = /<link\s+[^>]*rel=["']canonical["'][^>]*>/i;
  const tag = `  <link rel="canonical" href="${escapeHtml(href)}" />`;
  return replaceOrAppend(html, pattern, tag);
}

function upsertTitle(html, title) {
  const pattern = /<title>[\s\S]*?<\/title>/i;
  const tag = `  <title>${escapeHtml(title)}</title>`;
  return replaceOrAppend(html, pattern, tag);
}

function injectStructuredData(html, seo) {
  const schemaEntries = getSeoSchemaEntries({
    schema: seo.schema,
    breadcrumbs: seo.breadcrumbs,
  });

  const cleanedHtml = html.replace(
    /\s*<script[^>]*data-seo-managed="true"[^>]*>[\s\S]*?<\/script>/gi,
    ""
  );

  const scripts = schemaEntries
    .map(
      (entry) =>
        `  <script type="application/ld+json" data-seo-managed="true">${JSON.stringify(entry)}</script>`
    )
    .join("\n");

  return cleanedHtml.replace("</head>", `${scripts}\n</head>`);
}

function applySeo(template, seo) {
  const title = seo.title || SITE_NAME;
  const description = seo.description || DEFAULT_META_DESCRIPTION;
  const pathname = seo.pathname || "/";
  const imagePath = seo.image || DEFAULT_OG_IMAGE;
  const pageUrl = absoluteUrl(pathname);
  const imageUrl = imagePath.startsWith("http")
    ? imagePath
    : absoluteUrl(imagePath);

  let html = template;
  html = upsertTitle(html, title);
  html = upsertMeta(html, "name", "description", description);
  html = upsertMeta(html, "name", "keywords", seo.keywords || "");
  html = upsertMeta(html, "name", "robots", seo.robots || "index,follow");
  html = upsertMeta(html, "name", "theme-color", "#08111f");
  html = upsertMeta(html, "property", "og:site_name", SITE_NAME);
  html = upsertMeta(html, "property", "og:type", seo.type || "website");
  html = upsertMeta(html, "property", "og:title", title);
  html = upsertMeta(html, "property", "og:description", description);
  html = upsertMeta(html, "property", "og:url", pageUrl);
  html = upsertMeta(html, "property", "og:image", imageUrl);
  html = upsertMeta(html, "property", "og:image:alt", title);
  html = upsertMeta(html, "property", "og:locale", "en_US");
  html = upsertMeta(html, "name", "twitter:card", "summary_large_image");
  html = upsertMeta(html, "name", "twitter:title", title);
  html = upsertMeta(html, "name", "twitter:description", description);
  html = upsertMeta(html, "name", "twitter:image", imageUrl);
  html = upsertCanonical(html, pageUrl);
  html = injectStructuredData(html, seo);
  return html;
}

function injectAppHtml(template, appHtml) {
  return template.replace(
    /<div id="root"><\/div>/i,
    `<div id="root">${appHtml}</div>`
  );
}

function outputFileForPage(page) {
  if (page.fileName) {
    return path.join(distDir, page.fileName);
  }

  if (page.path === "/") {
    return path.join(distDir, "index.html");
  }

  return path.join(distDir, page.path.replace(/^\//, ""), "index.html");
}

const template = await fs.readFile(templatePath, "utf8");

const vite = await createServer({
  root: projectRoot,
  logLevel: "error",
  appType: "custom",
  server: { middlewareMode: true },
});

try {
  const { render } = await vite.ssrLoadModule("/src/entry-server.jsx");

  for (const page of prerenderPages) {
    const appHtml = await render(page.path);
    const html = applySeo(injectAppHtml(template, appHtml), page.seo);
    const outputFile = outputFileForPage(page);

    await fs.mkdir(path.dirname(outputFile), { recursive: true });
    await fs.writeFile(outputFile, html, "utf8");
  }
} finally {
  await vite.close();
}
