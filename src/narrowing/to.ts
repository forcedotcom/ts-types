/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { JsonCloneError } from '../errors';
import { AnyJson, JsonArray, JsonMap, Nullable, Optional } from '../types';
import { asJsonArray, asJsonMap } from './as';

/**
 * Narrows an object of type `T` to an `AnyJson` following a deep, brute-force conversion of the object's data to
 * only consist of JSON-compatible values by performing a basic JSON clone on the object. This is preferable to
 * using the weaker `coerceAnyJson(unknown)` to type-narrow an arbitrary value to an `AnyJson` when the value's source
 * is unknown, but it comes with the increased overhead of performing the deep JSON clone to ensure runtime type
 * safety. The use of JSON cloning guarantees type safety by omitting non-JSON-compatible elements from the resulting
 * JSON data structure. Use `coerceAnyJson(unknown)` when the `value` object can be guaranteed to be JSON-compatible
 * and only needs type coercion.
 *
 * @param value The value to convert.
 * @throws {@link JsonCloneError} If the value values contain circular references.
 */
export function toAnyJson<T>(value: Nullable<T>): Optional<AnyJson>;
/**
 * Narrows an object of type `T` to an `AnyJson` following a deep, brute-force conversion of the object's data to
 * only consist of JSON-compatible values by performing a basic JSON clone on the object. This is preferable to
 * using the weaker `coerceAnyJson(unknown)` to type-narrow an arbitrary value to an `AnyJson` when the value's source
 * is unknown, but it comes with the increased overhead of performing the deep JSON clone to ensure runtime type
 * safety. The use of JSON cloning guarantees type safety by omitting non-JSON-compatible elements from the resulting
 * JSON data structure. Use `coerceAnyJson(unknown)` when the `value` object can be guaranteed to be JSON-compatible
 * and only needs type coercion.
 *
 * @param value The value to convert.
 * @param defaultValue The default to return if `value` was not defined.
 * @throws {@link JsonCloneError} If the value values contain circular references.
 */
export function toAnyJson<T>(value: Nullable<T>, defaultValue: AnyJson): AnyJson;
// underlying function
export function toAnyJson<T>(value: Nullable<T>, defaultValue?: AnyJson): Optional<AnyJson> {
  try {
    return (value !== undefined ? JSON.parse(JSON.stringify(value)) : defaultValue) as Optional<AnyJson>;
  } catch (err) {
    throw new JsonCloneError(err as Error);
  }
}

/**
 * Narrows an object of type `T` to a `JsonMap` following a deep, brute-force conversion of the object's data to
 * only consist of JSON-compatible values by performing a basic JSON clone on the object. This is preferable to
 * using the weaker `coerceJsonMap(object)` to type-narrow an arbitrary object to a `JsonMap` when the object's source
 * is unknown, but it comes with the increased overhead of performing the deep JSON clone to ensure runtime type
 * safety. The use of JSON cloning guarantees type safety by omitting non-JSON-compatible elements from the resulting
 * JSON data structure. Use `coerceJsonMap(object)` when the `value` object can be guaranteed to be JSON-compatible
 * and only needs type coercion.
 *
 * @param value The object to convert.
 * @throws {@link JsonCloneError} If the object values contain circular references.
 */
export function toJsonMap<T extends object>(value: T): JsonMap;
/**
 * Narrows an object of type `T` to a `JsonMap` following a deep, brute-force conversion of the object's data to
 * only consist of JSON-compatible values by performing a basic JSON clone on the object. This is preferable to
 * using the weaker `coerceJsonMap(object)` to type-narrow an arbitrary object to a `JsonMap` when the object's source
 * is unknown, but it comes with the increased overhead of performing the deep JSON clone to ensure runtime type
 * safety. The use of JSON cloning guarantees type safety by omitting non-JSON-compatible elements from the resulting
 * JSON data structure. Use `coerceJsonMap(object)` when the `value` object can be guaranteed to be JSON-compatible
 * and only needs type coercion.
 *
 * @param value The object to convert.
 * @throws {@link JsonCloneError} If the object values contain circular references.
 */
export function toJsonMap<T extends object>(value: Nullable<T>): Optional<JsonMap>;
/**
 * Narrows an object of type `T` to a `JsonMap` following a deep, brute-force conversion of the object's data to
 * only consist of JSON-compatible values by performing a basic JSON clone on the object. This is preferable to
 * using the weaker `coerceJsonMap(object)` to type-narrow an arbitrary object to a `JsonMap` when the object's source
 * is unknown, but it comes with the increased overhead of performing the deep JSON clone to ensure runtime type
 * safety. The use of JSON cloning guarantees type safety by omitting non-JSON-compatible elements from the resulting
 * JSON data structure. Use `coerceJsonMap(object)` when the `value` object can be guaranteed to be JSON-compatible
 * and only needs type coercion.
 *
 * @param value The object to convert.
 * @param defaultValue The default to return if `value` was not defined.
 * @throws {@link JsonCloneError} If the object values contain circular references.
 */
export function toJsonMap<T extends object>(value: Nullable<T>, defaultValue: JsonMap): JsonMap;
// underlying function
export function toJsonMap<T extends object>(value: Nullable<T>, defaultValue?: JsonMap): Optional<JsonMap> {
  return asJsonMap(toAnyJson(value)) ?? defaultValue;
}

/**
 * Narrows an array of type `T` to a `JsonArray` following a deep, brute-force conversion of the array's data to
 * only consist of JSON-compatible values by performing a basic JSON clone on the array. This is preferable to
 * using the weaker `coerceJsonArray(array)` to type-narrow an arbitrary array to a `JsonArray` when the array's source
 * is unknown, but it comes with the increased overhead of performing the deep JSON clone to ensure runtime type
 * safety. The use of JSON cloning guarantees type safety by omitting non-JSON-compatible elements from the resulting
 * JSON data structure. Non-JSON entries will be converted to `null`s. Use `coerceJsonArray(array)` when the `value`
 * object can be guaranteed to be JSON-compatible and only needs type coercion.
 *
 * @param value The array to convert.
 * @throws {@link JsonCloneError} If the array values contain circular references.
 */
export function toJsonArray<T>(value: T[]): JsonArray;
/**
 * Narrows an array of type `T` to a `JsonArray` following a deep, brute-force conversion of the array's data to
 * only consist of JSON-compatible values by performing a basic JSON clone on the array. This is preferable to
 * using the weaker `coerceJsonArray(array)` to type-narrow an arbitrary array to a `JsonArray` when the array's source
 * is unknown, but it comes with the increased overhead of performing the deep JSON clone to ensure runtime type
 * safety. The use of JSON cloning guarantees type safety by omitting non-JSON-compatible elements from the resulting
 * JSON data structure. Non-JSON entries will be converted to `null`s. Use `coerceJsonArray(array)` when the `value`
 * object can be guaranteed to be JSON-compatible and only needs type coercion.
 *
 * @param value The array to convert.
 * @throws {@link JsonCloneError} If the array values contain circular references.
 */
export function toJsonArray<T>(value: Optional<T[]>): Optional<JsonArray>;
/**
 * Narrows an object of type `T` to a `JsonMap` following a deep, brute-force conversion of the object's data to
 * only consist of JSON-compatible values by performing a basic JSON clone on the object. This is preferable to
 * using the weaker `coerceJsonMap(object)` to type-narrow an arbitrary array to a `JsonMap` when the object's source
 * is unknown, but it comes with the increased overhead of performing the deep JSON clone to ensure runtime type
 * safety. The use of JSON cloning guarantees type safety by omitting non-JSON-compatible elements from the resulting
 * JSON data structure. Non-JSON entries will be converted to `null`s. Use `coerceJsonArray(array)` when the `value`
 * object can be guaranteed to be JSON-compatible and only needs type coercion.
 *
 * @param value The array to convert.
 * @param defaultValue The default to return if the value was undefined or of the incorrect type.
 * @throws {@link JsonCloneError} If the array values contain circular references.
 */
export function toJsonArray<T>(value: Optional<T[]>, defaultValue: JsonArray): JsonArray;
// underlying method
export function toJsonArray<T>(value: Optional<T[]>, defaultValue?: JsonArray): Optional<JsonArray> {
  return asJsonArray(toAnyJson(value)) ?? defaultValue;
}
