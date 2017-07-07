import Ember from 'ember';
const { computed } = Ember;

export default Ember.Controller.extend({
  edge:  computed.alias('model.edge'),
  nodes: computed.alias('model.nodes'),
});
