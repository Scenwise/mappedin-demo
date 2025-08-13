export function pageTitle(title?: string) {
  const DEFAULT_TITLE = 'Scenwise MappedIn Demo';
  if (title) return `${title} | ${DEFAULT_TITLE}`
  return DEFAULT_TITLE
}