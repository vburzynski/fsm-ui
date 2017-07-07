import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | tags input', function() {
  setupComponentTest('tags-input', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#tags-input}}
    //     template content
    //   {{/tags-input}}
    // `);

    this.render(hbs`{{tags-input}}`);
    expect(this.$()).to.have.length(1);
  });
});
