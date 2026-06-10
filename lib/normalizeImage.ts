export function norm(src: string) {
  if (!src) return src;
  try {
    // Ensure leading slash preserved and spaces encoded
    const prefix = src.startsWith('/') ? '/' : '';
    const trimmed = src.replace(/^\//, '');
    return prefix + encodeURI(trimmed);
  } catch {
    return src;
  }
}
