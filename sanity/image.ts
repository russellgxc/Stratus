import { createImageUrlBuilder } from "@sanity/image-url";

import { dataset, projectId } from "./env";

const builder = projectId
  ? createImageUrlBuilder({ projectId, dataset })
  : null;

export function urlForImage(source: unknown) {
  if (!builder || !source || typeof source !== "object") return "";
  try {
    return builder.image(source).auto("format").fit("max").url();
  } catch {
    return "";
  }
}

function assetRefFromImage(source: unknown) {
  if (!source || typeof source !== "object") return undefined;

  const asset = (source as { asset?: { _ref?: string } }).asset;
  return asset?._ref;
}

export function urlForImageWithRevision(source: unknown) {
  const url = urlForImage(source);
  if (!url) return "";

  const assetRef = assetRefFromImage(source);
  if (!assetRef) return url;

  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}v=${encodeURIComponent(assetRef)}`;
}
