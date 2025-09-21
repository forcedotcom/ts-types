/*
 * Copyright 2025, Salesforce, Inc.
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

import { Optional } from './union';

/**
 * An object with arbitrary string-indexed values of an optional generic type `Optional<T>`. `T` defaults to `unknown`
 * when not explicitly supplied. For convenient iteration of definitely assigned (i.e. non-nullable) entries, keys,
 * and values, see the following functions: {@link definiteEntriesOf}, {@link definiteKeysOf}, and
 * {@link definiteValuesOf}.
 */
export type Dictionary<T = unknown> = {
  [key: string]: Optional<T>;
};

/**
 * An alias for an array of `T` elements, where `T` defaults to `unknown`.
 */
export type AnyArray<T = unknown> = T[];

/**
 * Any object with both a numeric index signature with values of type `T` and a numeric `length`
 * property. `T` defaults to `unknown` if unspecified.
 */
export type AnyArrayLike<T = unknown> = ArrayLike<T>;
