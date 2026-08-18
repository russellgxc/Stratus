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
