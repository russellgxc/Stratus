/**
 * Convert Sanity portable text (or a plain string) into plain text.
 * Keeps pages resilient while long fields migrate from text → WYSIWYG.
 */
export function portableTextToPlain(value: unknown): string {
  if (!value) return "";
  if (typeof value === "string") return value.trim();
  if (!Array.isArray(value)) return "";

  return value
    .map((block) => {
      if (!block || typeof block !== "object") return "";
      const typed = block as {
        _type?: string;
        children?: Array<{ text?: string }>;
      };
      if (typed._type !== "block" || !Array.isArray(typed.children)) return "";
      return typed.children.map((child) => child.text ?? "").join("");
    })
    .filter(Boolean)
    .join("\n\n")
    .trim();
}
