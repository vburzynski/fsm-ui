import Ember from 'ember';

const { computed } = Ember;

export default Ember.Controller.extend({
  node:  computed.alias('model.node'),
  edges: computed.alias('model.edges'),
  actions: {
    saveNode(node) {
      debugger;
      node.save().then(() => this.transitionTo('nodes'));
    }
  }
});
