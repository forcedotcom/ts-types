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
import { asBoolean, asJsonArray, asJsonMap, asNumber, asString } from '../../src/narrowing/as';

describe('as type', () => {
  describe('asString', () => {
    it('should return undefined when passed undefined', () => {
      expect(asString(undefined)).to.be.undefined;
    });

    it('should return a string when passed a string', () => {
      const value = 'string';
      expect(asString(value)).to.equal(value);
    });

    it('should return the default when passed undefined and a default', () => {
      const def = 'string';
      expect(asString(undefined, def)).to.equal(def);
    });
  });

  describe('asNumber', () => {
    it('should return undefined when passed undefined', () => {
      expect(asNumber(undefined)).to.be.undefined;
    });

    it('should return a number when passed a number', () => {
      const value = 1;
      expect(asNumber(value)).to.equal(value);
    });

    it('should return the default when passed undefined and a default', () => {
      const def = 1;
      expect(asNumber(undefined, def)).to.equal(def);
    });
  });

  describe('asBoolean', () => {
    it('should return undefined when passed undefined', () => {
      expect(asBoolean(undefined)).to.be.undefined;
    });

    it('should return a boolean when passed a boolean', () => {
      const value = true;
      expect(asBoolean(value)).to.equal(value);
    });

    it('should return the default when passed undefined and a default', () => {
      const def = true;
      expect(asBoolean(undefined, def)).to.equal(def);
    });
  });

  describe('asJsonMap', () => {
    it('should return undefined when passed undefined', () => {
      expect(asJsonMap(undefined)).to.be.undefined;
    });

    it('should return a JsonMap when passed a JsonMap', () => {
      const value = { a: 'b', c: 'd' };
      expect(asJsonMap(value)).to.equal(value);
    });

    it('should return the default when passed undefined and a default', () => {
      const def = { a: 'b', c: 'd' };
      expect(asJsonMap(undefined, def)).to.equal(def);
    });
  });

  describe('asJsonArray', () => {
    it('should return undefined when passed undefined', () => {
      expect(asJsonArray(undefined)).to.be.undefined;
    });

    it('should return a JsonArray when passed a JsonArray', () => {
      const value = ['a', 'b'];
      expect(asJsonArray(value)).to.equal(value);
    });

    it('should return the default when passed undefined and a default', () => {
      const def = ['a', 'b'];
      expect(asJsonArray(undefined, def)).to.equal(def);
    });
  });
});
