/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

/**
 * @module types
 */

import { Dictionary } from './collection';

/**
 * Any valid JSON primitive value.
 */
export type JsonPrimitive = null | boolean | number | string;

/**
 * Any valid JSON collection value.
 */
export type JsonCollection = JsonMap | JsonArray;

/**
 * Any valid JSON value.
 */
export type AnyJson = JsonPrimitive | JsonCollection;

/**
 * Any JSON-compatible object.
 */

// leave this as an interface because it requires circular references that type aliases cannot do
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export interface JsonMap extends Dictionary<AnyJson> {}

/**
 * Any JSON-compatible array.
 */
export type JsonArray = AnyJson[];
