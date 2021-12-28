export function get_safe_index(length: number, index: number): number {
  if (index > length - 1) return index % length;
  else if (index < 0) return get_safe_index(length, length + (index % length));

  return index;
}
