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
import { valueOrDefault } from '../../src/narrowing/internal';

describe('base', () => {
  describe('valueOrDefault', () => {
    it('should return undefined when passed an undefined value and an undefined default', () => {
      expect(valueOrDefault(undefined, undefined)).to.be.undefined;
    });

    it('should return null when passed a null value and an undefined default', () => {
      expect(valueOrDefault(null, undefined)).to.be.null;
    });

    it('should return null when passed an undefined value and a null default', () => {
      expect(valueOrDefault(undefined, null)).to.be.null;
    });

    it('should return null when passed a null value and a null default', () => {
      expect(valueOrDefault(null, null)).to.be.null;
    });

    it('should return the value when passed a defined value and an undefined default', () => {
      expect(valueOrDefault('a', undefined)).to.equal('a');
    });

    it('should return the value when passed a defined value and a null default', () => {
      expect(valueOrDefault('a', null)).to.equal('a');
    });

    it('should return the value when passed a defined value and a defined default', () => {
      expect(valueOrDefault('a', 'b')).to.equal('a');
    });

    it('should return the default when passed an undefined value and a defined default', () => {
      expect(valueOrDefault(undefined, 'b')).to.equal('b');
    });

    it('should return the default when passed a null value and a defined default', () => {
      expect(valueOrDefault(null, 'b')).to.equal('b');
    });
  });
});
