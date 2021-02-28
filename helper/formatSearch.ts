export default function(search: string): string {
  return search
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .join("+");
}
