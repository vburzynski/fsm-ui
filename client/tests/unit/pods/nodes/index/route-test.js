import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';

describe('Unit | Route | nodes/index', () => {
  setupTest('route:nodes/index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  it('exists', function () {
    const route = this.subject();
    expect(route).to.be.ok;
  });
});
