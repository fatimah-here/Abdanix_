import { useEffect } from "react";
import {
  DEFAULT_META_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  absoluteUrl,
  getSeoSchemaEntries,
} from "../data/seoData";

function upsertMeta(attribute, key, content) {
  const selector = `meta[${attribute}="${key}"]`;
  let element = document.head.querySelector(selector);

  if (!content) {
    element?.remove();
    return;
  }

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function upsertLink(rel, href) {
  const selector = `link[rel="${rel}"]`;
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
}

export default function Seo({
  title = SITE_NAME,
  description = DEFAULT_META_DESCRIPTION,
  pathname = "/",
  type = "website",
  image = DEFAULT_OG_IMAGE,
  robots = "index,follow",
  keywords = "",
  breadcrumbs = [],
  schema = [],
}) {
  const schemaKey = JSON.stringify(schema);
  const breadcrumbKey = JSON.stringify(breadcrumbs);

  useEffect(() => {
    const pageUrl = absoluteUrl(pathname);
    const imageUrl = image.startsWith("http") ? image : absoluteUrl(image);

    document.title = title;
    document.documentElement.lang = "en";

    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", robots);
    upsertMeta("name", "keywords", keywords);
    upsertMeta("name", "theme-color", "#08111f");
    upsertMeta("property", "og:site_name", SITE_NAME);
    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", pageUrl);
    upsertMeta("property", "og:image", imageUrl);
    upsertMeta("property", "og:image:alt", title);
    upsertMeta("property", "og:locale", "en_US");
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", imageUrl);
    upsertLink("canonical", pageUrl);

    document.head
      .querySelectorAll('script[data-seo-managed="true"]')
      .forEach((element) => element.remove());

    const schemaEntries = getSeoSchemaEntries({ schema, breadcrumbs });

    schemaEntries.forEach((entry) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.seoManaged = "true";
      script.text = JSON.stringify(entry);
      document.head.appendChild(script);
    });
  }, [
    title,
    description,
    pathname,
    type,
    image,
    robots,
    keywords,
    schemaKey,
    breadcrumbKey,
  ]);

  return null;
}
