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

/**
 * A union type for either the parameterized type `T` or `undefined` -- the opposite of {@link NonOptional}.
 */
export type Optional<T> = T | undefined;

/**
 * A union type for either the parameterized type `T`, `null`, or `undefined` -- the opposite of
 * the `NonNullable` builtin conditional type.
 */
export type Nullable<T> = Optional<T | null>;

/**
 * A union type for either the parameterized type `T` or an array of `T`.
 */
export type Many<T> = T | T[];
