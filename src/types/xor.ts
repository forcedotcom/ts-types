/*
 * Copyright (c) 2023, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

/**
 * XOR type example:
 *
 * ```
 * interface A {
 *   name: string;
 * }
 *
 * interface B {
 *   id: string;
 * }
 *
 * type MyXORType = XOR<A, B>;
 *
 * const valid1: MyXORType = { name: 'My_Foo' }; // Valid
 * const valid2: MyXORType = { id: '0xT0000cxxxeeRGtHM' };    // Valid
 *
 * const invalid1: MyXORType = { name: 'hello', id: 123 }; // Error: Object literal may only specify known properties
 * const invalid2: MyXORType = {}; // Error: Property 'name' or 'id' is missing
 * ```
 */
export type XOR<T, U> = T | U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;
