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

import { Nullable } from '../types';

/**
 * Returns the given `value` if not either `undefined` or `null`, or the given `defaultValue` otherwise if defined.
 * Returns `null` if the value is `null` and `defaultValue` is `undefined`.
 *
 * @param value The value to test.
 * @param defaultValue The default to return if `value` was not defined.
 * @ignore
 */
export function valueOrDefault<T>(value: Nullable<T>, defaultValue: Nullable<T>): Nullable<T> {
  return value != null || defaultValue === undefined ? value : defaultValue;
}
