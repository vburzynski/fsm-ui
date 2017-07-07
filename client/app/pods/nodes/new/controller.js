import Ember from 'ember';

const { computed } = Ember;

export default Ember.Controller.extend({
  node:  computed.alias('model.node'),
  edges: computed.alias('model.edges'),

  actions: {
    saveNode: function(node) {
      this.get('target').send('saveNode', node);
    }
  }
});
