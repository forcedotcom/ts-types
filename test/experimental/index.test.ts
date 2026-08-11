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

// tslint:disable:no-unused-expression

import { expect } from 'chai';
import { as, is, ObjectShape } from '../../src/experimental';

class TestClass {
  public foo = 'bar';
}

type Test = {
  s: string;
  b?: boolean;
  c?: TestClass;
}

describe('experimental', () => {
  const testShape: ObjectShape = {
    s: 'string',
    b: {
      type: 'boolean',
      optional: true,
    },
    c: {
      type: TestClass,
      optional: true,
    },
  };

  describe('is', () => {
    it('should return false if an object conforms to a given shape', () => {
      const o: object = { s: false };
      expect(is<Test>(o, testShape)).to.be.false;
    });

    it('should return true if an object conforms to a given shape', () => {
      const o: object = { s: 'string', b: false, c: new TestClass() };
      expect(is<Test>(o, testShape)).to.be.true;
    });
  });

  describe('as', () => {
    it('should return a typed object if it does not conform to a given shape', () => {
      const o: object = { s: false };
      expect(as<Test>(o, testShape)).to.be.undefined;
    });

    it('should return a typed object if it conforms to a given shape', () => {
      const o: object = { s: 'string', b: false, c: new TestClass() };
      expect(as<Test>(o, testShape)).to.equal(o);
    });
  });
});
