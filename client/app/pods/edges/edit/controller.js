import Ember from 'ember';

const { computed } = Ember;

export default Ember.Controller.extend({
  edge:  computed.alias('model.edge'),
  nodes: computed.alias('model.nodes'),

  actions: {
    saveEdge: function(edge) {
      this.get('target').send('saveEdge', edge);
    }
  }
});
