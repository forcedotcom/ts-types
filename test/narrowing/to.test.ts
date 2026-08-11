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
/* eslint-disable @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-argument */

import { expect } from 'chai';
import { JsonCloneError } from '../../src/errors';
import { toAnyJson, toJsonArray, toJsonMap } from '../../src/narrowing/to';
import { Dictionary } from '../../src/types';

describe('to type', () => {
  describe('toAnyJson', () => {
    it('should return undefined when passed undefined', () => {
      const value = undefined;
      expect(toAnyJson(value)).to.equal(value);
    });

    it('should return a string when passed a string', () => {
      const value = '';
      expect(toAnyJson(value)).to.equal(value);
    });

    it('should return a number when passed a number', () => {
      const value = 0;
      expect(toAnyJson(value)).to.equal(value);
    });

    it('should return a boolean when passed a boolean', () => {
      const value = false;
      expect(toAnyJson(value)).to.equal(value);
    });

    it('should return an object when passed an object', () => {
      const value = { a: 'b', c: 'd' };
      expect(toAnyJson(value)).to.deep.equal(value);
    });

    it('should return an array when passed an array', () => {
      const value = ['a', 'b'];
      expect(toAnyJson(value)).to.deep.equal(value);
    });
  });

  describe('toJsonMap', () => {
    it('should return undefined when passed undefined', () => {
      expect(toJsonMap(undefined)).to.be.undefined;
    });

    it('should return a JsonMap when passed a JsonMap', () => {
      const value = { a: 'b', c: 'd' };
      expect(toJsonMap(value)).to.deep.equal(value);
    });

    it('should return the default when passed undefined and a default', () => {
      const def = { a: 'b', c: 'd' };
      expect(toJsonMap(undefined, def)).to.equal(def);
    });

    it('should omit non-JSON values when passed an object with non-JSON values', () => {
      const value = {
        a: 'b',
        c: 'd',
        e: (): void => {
          /* do nothing */
        },
      };
      expect(toJsonMap(value)).to.deep.equal({ a: 'b', c: 'd' });
    });

    it('should throw when passed an object with circular references', () => {
      const a: Dictionary = {};
      const b: Dictionary = {};
      a.b = b;
      b.a = a;
      const value = a;
      expect(() => toJsonMap(value)).to.throw(JsonCloneError);
    });
  });

  describe('toJsonArray', () => {
    it('should return undefined when passed undefined', () => {
      expect(toJsonArray(undefined)).to.be.undefined;
    });

    it('should return a JsonArray when passed a JsonArray', () => {
      const value = ['a', 'b'];
      expect(toJsonArray(value)).to.deep.equal(value);
    });

    it('should return the default when passed undefined and a default', () => {
      const def = ['a', 'b'];
      expect(toJsonArray(undefined, def)).to.equal(def);
    });

    it('should omit non-JSON values when passed an array with non-JSON values', () => {
      const value = [
        'a',
        null,
        'b',
        (): void => {
          /* do nothing */
        },
      ];
      expect(toJsonArray(value)).to.deep.equal(['a', null, 'b', null]);
    });

    it('should throw when passed an array with circular references', () => {
      const a: Dictionary = {};
      const b: Dictionary = {};
      a.b = b;
      b.a = a;
      const value = [a, b];
      expect(() => toJsonArray(value)).to.throw(JsonCloneError);
    });
  });
});
