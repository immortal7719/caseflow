/**
 * Moves an array item from one position to another.
 * @param array - The array to move items in
 * @param fromIndex - The index of the item to move
 * @param toIndex - The index to move the item to
 * @returns A new array with the item moved
 */
export function arrayMove<T>(
  array: T[],
  fromIndex: number,
  toIndex: number
): T[] {
  const result = [...array];
  const [removed] = result.splice(fromIndex, 1);
  result.splice(toIndex, 0, removed);
  return result;
}
