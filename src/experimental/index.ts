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
 * A staging area for either introducing or removing type and functions, incrementally.
 */

import { definiteEntriesOf, get, has, isFunction, isString } from '../narrowing';
import { AnyConstructor, Dictionary, Nullable, Optional, View } from '../types';

/**
 * @ignore
 */
export type PrimitiveType = 'boolean' | 'function' | 'number' | 'object' | 'string' | 'symbol' | 'undefined';

/**
 * @ignore
 */
export type VerifiableType = PrimitiveType | AnyConstructor;

/**
 * @ignore
 */
export type PropertyShape = { type: VerifiableType; optional: boolean };

/**
 * @ignore
 */
export type ObjectShape = Dictionary<VerifiableType | PropertyShape>;

/**
 * @ignore
 */
export function is<T extends object>(obj: Nullable<object>, shape: ObjectShape): obj is T {
  const isVerifiable = (v: VerifiableType | PropertyShape): v is VerifiableType => isString(v) || isFunction(v);
  return (
    !obj ||
    definiteEntriesOf(shape)
      .map(([k, v]) => ({
        key: k,
        ...(isVerifiable(v) ? { type: v, optional: false } : v),
      }))
      .every(
        ({ key, type, optional }) =>
          (optional && !(key in obj)) ||
          (isString(type) ? typeof get(obj, key) === type : get(obj, key) instanceof type)
      )
  );
}

/**
 * @ignore
 */
// type Foo = { name: string, bar: Bar };
// class Bar { public baz = 'bar'; }
// const maybeFoo: object = { name: 'bar', bar: new Bar() };
// const foo = ensure(as<Foo>(maybeFoo, { name: 'string', bar: Bar }));
export function as<T extends object>(obj: Nullable<object>, shape: ObjectShape): Optional<T> {
  return is<T>(obj, shape) ? obj : undefined;
}

/**
 * @ignore
 */
export function hasNull<T, K extends string>(value: T, key: K): value is T & View<K, string> {
  return has(value, key) && value[key] == null;
}
