/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

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
