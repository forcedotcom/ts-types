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

import { expect } from 'chai';
import { AssertionFailedError } from '../../src/errors';
import {
  assert,
  assertAnyJson,
  assertArray,
  assertBoolean,
  assertDictionary,
  assertFunction,
  assertInstance,
  assertJsonArray,
  assertJsonMap,
  assertNonNull,
  assertNumber,
  assertObject,
  assertPlainObject,
  assertString,
} from '../../src/narrowing/assert';

class TestClass {
  public name: string;
  public constructor(name = 'test') {
    this.name = name;
  }
}

describe('assert type', () => {
  describe('assert', () => {
    it('should do nothing when passed true', () => {
      assert(true);
    });

    it('should raise an error when passed false', () => {
      expect(() => assert(false)).to.throw(AssertionFailedError);
    });
  });

  describe('assertNonNull', () => {
    it('should raise an error when passed undefined', () => {
      expect(() => assertNonNull(undefined)).to.throw(AssertionFailedError);
    });

    it('should raise an error when passed null', () => {
      expect(() => assertNonNull(null)).to.throw(AssertionFailedError);
    });

    it('should do nothing given a non-nullish value', () => {
      const value = 'string';
      assertNonNull(value);
    });
  });

  describe('assertString', () => {
    it('should raise an error when passed undefined', () => {
      expect(() => assertString(undefined)).to.throw(AssertionFailedError);
    });

    it('should do nothing when passed a string', () => {
      const value = 'string';
      assertString(value);
    });
  });

  describe('assertNumber', () => {
    it('should raise an error when passed undefined', () => {
      expect(() => assertNumber(undefined)).to.throw(AssertionFailedError);
    });

    it('should do nothing when passed a number', () => {
      const value = 0;
      assertNumber(value);
    });
  });

  describe('assertBoolean', () => {
    it('should raise an error when passed undefined', () => {
      expect(() => assertBoolean(undefined)).to.throw(AssertionFailedError);
    });

    it('should do nothing when passed a boolean', () => {
      const value = true;
      assertBoolean(value);
    });
  });

  describe('assertObject', () => {
    it('should raise an error when passed undefined', () => {
      expect(() => assertObject(undefined)).to.throw(AssertionFailedError);
    });

    it('should do nothing when passed a object', () => {
      const value = { a: 'b' };
      assertObject(value);
    });
  });

  describe('assertPlainObject', () => {
    it('should raise an error when passed undefined', () => {
      expect(() => assertPlainObject(undefined)).to.throw(AssertionFailedError);
    });

    it('should do nothing when passed a plain object', () => {
      const value = { a: 'b' };
      assertPlainObject(value);
    });
  });

  describe('assertDictionary', () => {
    it('should raise an error when passed undefined', () => {
      expect(() => assertDictionary(undefined)).to.throw(AssertionFailedError);
    });

    it('should do nothing when passed a dictionary object', () => {
      const value = { a: 'b' };
      assertDictionary(value);
    });
  });

  describe('assertInstance', () => {
    it('should raise an error when passed undefined', () => {
      expect(() => assertInstance(undefined, TestClass)).to.throw(AssertionFailedError);
    });

    it('should do nothing when passed a class instance', () => {
      const value = new TestClass('foo');
      assertInstance(value, TestClass);
    });
  });

  describe('assertArray', () => {
    it('should raise an error when passed undefined', () => {
      expect(() => assertArray(undefined)).to.throw(AssertionFailedError);
    });

    it('should do nothing when passed an array', () => {
      const value = ['a', 'b'];
      assertArray(value);
    });
  });

  describe('assertFunction', () => {
    it('should raise an error when passed undefined', () => {
      expect(() => assertFunction(undefined)).to.throw(AssertionFailedError);
    });

    it('should do nothing when passed a function', () => {
      const value = () => {};
      assertFunction(value);
    });
  });

  describe('assertAnyJson', () => {
    it('should raise an error when passed undefined', () => {
      expect(() => assertAnyJson(undefined)).to.throw(AssertionFailedError);
    });

    it('should do nothing when passed a string', () => {
      const value = 'string';
      assertAnyJson(value);
    });
  });

  describe('assertJsonMap', () => {
    it('should raise an error when passed undefined', () => {
      expect(() => assertJsonMap(undefined)).to.throw(AssertionFailedError);
    });

    it('should do nothing when passed a JsonMap', () => {
      const value = { a: 'b', c: 'd' };
      assertJsonMap(value);
    });
  });

  describe('assertJsonArray', () => {
    it('should raise an error when passed undefined', () => {
      expect(() => assertJsonArray(undefined)).to.throw(AssertionFailedError);
    });

    it('should do nothing when passed a JsonArray', () => {
      const value = ['a', 'b'];
      assertJsonArray(value);
    });
  });
});
