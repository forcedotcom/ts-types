/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
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
