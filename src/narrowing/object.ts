/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { KeyOf, Nullable } from '../types';

/**
 * Returns the keys of an object of type `T`. This is like `Object.keys` except the return type
 * captures the known keys of `T`.
 *
 * Note that it is the responsibility of the caller to use this wisely -- there are cases where
 * the runtime set of keys returned may be broader than the type checked set at compile time,
 * so there's potential for this to be abused in ways that are not inherently type safe. For
 * example, given base class `Animal`, subclass `Fish`, and `const animal: Animal = new Fish();`
 * then `keysOf(animal)` will not type-check the entire set of keys of the object `animal` since
 * it is actually an instance of type `Fish`, which has an extended property set.
 *
 * In general, it should be both convenient and type-safe to use this when enumerating the keys
 * of simple data objects with known properties.
 *
 * ```
 * interface Point { x: number; y: number; }
 * const point: Point = { x: 1, y: 2 };
 * const keys = keysOf(point);
 * // type of keys -> ('a' | 'b')[]
 * for (const key of keys) {
 *   console.log(key, point[key]);
 * }
 * // x 1
 * // y 2
 * ```
 *
 * @param obj The object of interest.
 */
export function keysOf<T extends object, K extends KeyOf<T>>(obj: Nullable<T>): K[] {
  return Object.keys(obj ?? {}) as K[];
}

/**
 * Returns the entries of an object of type `T`. This is like `Object.entries` except the return type
 * captures the known keys and value types of `T`.
 *
 * Note that it is the responsibility of the caller to use this wisely -- there are cases where
 * the runtime set of entries returned may be broader than the type checked set at compile time,
 * so there's potential for this to be abused in ways that are not inherently type safe. For
 * example, given base class `Animal`, subclass `Fish`, and `const animal: Animal = new Fish();`
 * then `entriesOf(animal)` will not type-check the entire set of keys of the object `animal` since
 * it is actually an instance of type `Fish`, which has an extended property set.
 *
 * In general, it should be both convenient and type-safe to use this when enumerating the entries
 * of simple data objects with known properties.
 *
 * ```
 * interface Point { x: number; y: number; }
 * const point: Point = { x: 1, y: 2 };
 * // type of entries -> ['x' | 'y', number][]
 * const entries = entriesOf(point);
 * for (const entry of entries) {
 *   console.log(entry[0], entry[1]);
 * }
 * // x 1
 * // y 2
 * ```
 *
 * @param obj The object of interest.
 */
export function entriesOf<T extends object, K extends KeyOf<T>>(obj: Nullable<T>): Array<[K, T[K]]> {
  return Object.entries(obj ?? {}) as Array<[K, T[K]]>;
}

/**
 * Returns the values of an object of type `T`. This is like `Object.values` except the return type
 * captures the possible value types of `T`.
 *
 * Note that it is the responsibility of the caller to use this wisely -- there are cases where
 * the runtime set of values returned may be broader than the type checked set at compile time,
 * so there's potential for this to be abused in ways that are not inherently type safe. For
 * example, given base class `Animal`, subclass `Fish`, and `const animal: Animal = new Fish();`
 * then `valuesOf(animal)` will not type-check the entire set of values of the object `animal` since
 * it is actually an instance of type `Fish`, which has an extended property set.
 *
 * In general, it should be both convenient and type-safe to use this when enumerating the values
 * of simple data objects with known properties.
 *
 * ```
 * interface Point { x: number; y: number; }
 * const point: Point = { x: 1, y: 2 };
 * const values = valuesOf(point);
 * // type of values -> number[]
 * for (const value of values) {
 *   console.log(value);
 * }
 * // 1
 * // 2
 * ```
 *
 * @param obj The object of interest.
 */
export function valuesOf<T extends object, K extends KeyOf<T>>(obj: Nullable<T>): Array<T[K]> {
  return Object.values(obj ?? {});
}

/**
 * Returns an array of all entry tuples of type `[K, NonNullable<T[K]>]` in an object `T` whose values are neither
 * `null` nor `undefined`. This can be convenient for enumerating the entries of unknown objects with optional
 * properties (including `Dictionary`s) without worrying about performing checks against possibly `undefined` or
 * `null` values.
 *
 * See also caveats outlined in {@link entriesOf}.
 *
 * @param obj The object of interest.
 */
export function definiteEntriesOf<T extends object, K extends KeyOf<T>, V extends NonNullable<T[K]>>(
  obj: Nullable<T>
): Array<[K, V]> {
  return entriesOf(obj).filter((entry): entry is [K, V] => entry[1] != null);
}

/**
 * Returns an array of all `string` keys in an object of type `T` whose values are neither `null` nor `undefined`.
 * This can be convenient for enumerating the keys of definitely assigned properties in an object or `Dictionary`.
 *
 * See also caveats outlined in {@link keysOf}.
 *
 * @param obj The object of interest.
 */
export function definiteKeysOf<T extends object>(obj: Nullable<T>): Array<KeyOf<T>> {
  return definiteEntriesOf(obj).map((entry) => entry[0]);
}

/**
 * Returns an array of all values of type `T` in an object `T` for values that are neither `null` nor `undefined`.
 * This can be convenient for enumerating the values of unknown objects with optional properties (including
 * `Dictionary`s) without worrying about performing checks against possibly `undefined` or `null` values.
 *
 * @param obj The object of interest.
 */
export function definiteValuesOf<T extends object>(obj: Nullable<T>): Array<NonNullable<T[KeyOf<T>]>> {
  return definiteEntriesOf(obj).map((entry) => entry[1]);
}
