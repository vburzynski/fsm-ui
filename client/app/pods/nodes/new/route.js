import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('node');
  },
  actions: {
    saveNode(node) {
      node.save().then(() => this.transitionTo('nodes'));
    },
    willTransition() {
      this.controller.get('model').rollbackAttributes();
    }
  }
});
