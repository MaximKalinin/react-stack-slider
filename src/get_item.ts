import { get_safe_index } from './get_safe_index';

export function get_item<T>(array: T[], index: number) {
  return array[get_safe_index(array.length, index)];
}
