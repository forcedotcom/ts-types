/*
 * Copyright (c) 2023, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { expect } from 'chai';
import { XOR } from '../src/types';

describe('XOR', () => {
  type A = { name: string };
  type B = { id: string };
  type NameOrId = XOR<A, B>;

  it('should allow only 1 property from each type', () => {
    const valid1: NameOrId = { name: 'My_Foo' };
    const valid2: NameOrId = { id: '0xT0000cxxxeeRGtHM' };
    expect(valid1).to.deep.equal({ name: 'My_Foo' });
    expect(valid2).to.deep.equal({ id: '0xT0000cxxxeeRGtHM' });

    // Either of these would cause TypeScript errors during compilation
    // const invalid1: NameOrId = { name: 'My_Foo', id: '0xT0000cxxxeeRGtHM' };
    // const invalid2: NameOrId = { };
  });
});
