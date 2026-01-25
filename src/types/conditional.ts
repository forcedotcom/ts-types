/*
 * Copyright 2026, Salesforce, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @module types
 */

/**
 * Subtracts `undefined` from any union type `T`. This is the opposite of {@link Optional}.
 */
export type NonOptional<T> = T extends undefined ? never : T;

/**
 * Converts a type `T` that may have optional properties into a type `T` with only required
 * properties (e.g. `undefined` values are not allowed). Explicit `null`s in value unions
 * will still be possible. This is similar to the `Required` builtin mapped type, but also
 * subtracts `undefined` from value union types as well as the optional property declaration.
 *
 * ```
 * type Foo = { bar?: string | undefined | null };
 * type RequiredNonOptionalFoo = RequiredNonOptional<Foo>;
 * // RequiredNonOptionalFoo -> { bar: string | null };
 * ```
 */
export type RequiredNonOptional<T> = T extends object ? { [P in keyof T]-?: NonOptional<T[P]> } : T;

/**
 * Converts a type `T` that may have optional, nullable properties into a new type with only required
 * properties, while also subtracting `null` from all possible property values.
 *
 * ```
 * type Foo = { bar?: string | undefined | null };
 * type RequiredNonNullableFoo = RequiredNonNullable<Foo>;
 * // RequiredNonNullableFoo -> { bar: string };
 * ```
 */
export type RequiredNonNullable<T> = T extends object ? Required<{ [P in keyof T]: NonNullable<T[P]> }> : T;

/**
 * Extracts literally defined property names from a type `T` as a union of key name strings, minus
 * any index signatures.
 */
export type Literals<T> = Extract<
  { [K in keyof T]: string extends K ? never : number extends K ? never : K } extends { [_ in keyof T]: infer U }
    ? U
    : never,
  string
>;
