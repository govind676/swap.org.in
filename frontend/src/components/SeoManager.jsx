import { useEffect } from "react";

const upsertMetaTag = (key, value, attr = "name") => {
  if (!value) return;
  let meta = document.querySelector(`meta[${attr}='${key}']`);
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute(attr, key);
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", value);
};

const upsertCanonical = (href) => {
  if (!href) return;
  let canonical = document.querySelector("link[rel='canonical']");
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }
  canonical.setAttribute("href", href);
};

export default function SeoManager({ title, description, image, keywords, schema }) {
  useEffect(() => {
    document.title = title;
    const currentUrl = window.location.href;

    upsertMetaTag("description", description);
    upsertMetaTag("keywords", keywords);
    upsertMetaTag("og:title", title, "property");
    upsertMetaTag("og:description", description, "property");
    upsertMetaTag("og:type", "website", "property");
    upsertMetaTag("og:url", currentUrl, "property");
    upsertMetaTag("og:image", image, "property");
    upsertMetaTag("twitter:card", "summary_large_image", "name");
    upsertMetaTag("twitter:title", title, "name");
    upsertMetaTag("twitter:description", description, "name");
    upsertMetaTag("twitter:image", image, "name");
    upsertCanonical(currentUrl);

    if (schema) {
      let schemaScript = document.getElementById("dynamic-schema-json-ld");
      if (!schemaScript) {
        schemaScript = document.createElement("script");
        schemaScript.type = "application/ld+json";
        schemaScript.id = "dynamic-schema-json-ld";
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(schema);
    }
  }, [title, description, image, keywords, schema]);

  return null;
}
