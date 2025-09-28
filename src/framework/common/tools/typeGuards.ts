/**
 * Mini TypeGuard Function for checking is value expected type
 *
 * @param value - value to check type
 * @param expectedType - expected type of value
 * @returns Boolean
 */

export function TypeGuard(value: unknown, expectedType: string): boolean {
  return typeof value === expectedType;
}
