import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | edges nav bar', () => {
  setupComponentTest('edges-nav-bar', {
    integration: true,
  });

  it('renders', function () {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#edges-nav-bar}}
    //     template content
    //   {{/edges-nav-bar}}
    // `);

    this.render(hbs`{{edges-nav-bar}}`);
    expect(this.$()).to.have.length(1);
  });
});
