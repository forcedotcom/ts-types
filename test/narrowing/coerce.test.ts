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
import { coerceAnyJson, coerceJsonArray, coerceJsonMap } from '../../src/narrowing/coerce';

describe('coerce type', () => {
  describe('coerceAnyJson', () => {
    it('should return undefined when passed undefined', () => {
      expect(coerceAnyJson(undefined)).to.be.undefined;
    });

    it('should return a string when passed a string', () => {
      const value = 'string';
      expect(coerceAnyJson(value)).to.equal(value);
    });

    it('should return the default when passed undefined and a default', () => {
      const def = 'string';
      expect(coerceAnyJson(undefined, def)).to.equal(def);
    });
  });

  describe('coerceJsonMap', () => {
    it('should return undefined when passed undefined', () => {
      expect(coerceJsonMap(undefined)).to.be.undefined;
    });

    it('should return a JsonMap when passed a JsonMap', () => {
      const value = { a: 'b', c: 'd' };
      expect(coerceJsonMap(value)).to.equal(value);
    });

    it('should return the default when passed undefined and a default', () => {
      const def = { a: 'b', c: 'd' };
      expect(coerceJsonMap(undefined, def)).to.equal(def);
    });
  });

  describe('coerceJsonArray', () => {
    it('should return undefined when passed undefined', () => {
      expect(coerceJsonArray(undefined)).to.be.undefined;
    });

    it('should return a JsonArray when passed a JsonArray', () => {
      const value = ['a', 'b'];
      expect(coerceJsonArray(value)).to.equal(value);
    });

    it('should return the default when passed undefined and a default', () => {
      const def = ['a', 'b'];
      expect(coerceJsonArray(undefined, def)).to.equal(def);
    });
  });
});
