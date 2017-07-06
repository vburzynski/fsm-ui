import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupModelTest } from 'ember-mocha';

describe('Unit | Model | edge', () => {
  setupModelTest('edge', {
    // Specify the other units that are required for this test.
    needs: ['model:node'],
  });

  // Replace this with your real tests.
  it('exists', function () {
    const model = this.subject();
    // var store = this.store();
    expect(model).to.be.ok;
  });
});
