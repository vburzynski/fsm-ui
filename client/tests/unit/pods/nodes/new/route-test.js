import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';

describe('Unit | Route | nodes/new', () => {
  setupTest('route:nodes/new', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  it('exists', function () {
    const route = this.subject();
    expect(route).to.be.ok;
  });
});
