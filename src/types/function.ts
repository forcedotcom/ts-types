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

// Needed for special types
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * @module types
 */

/**
 * Any `function` returning type `T`. `T` defaults to `unknown` when not explicitly supplied.
 */
export type AnyFunction<T = unknown> = (...args: any[]) => T;

/**
 * A constructor for any type `T`. `T` defaults to `object` when not explicitly supplied.
 */
export type AnyConstructor<T = object> = new (...args: any[]) => T;
