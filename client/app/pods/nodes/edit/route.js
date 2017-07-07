import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  model(params) {
    return RSVP.hash({
      node: this.store.findRecord('node', params.id, { include: "outgoing,incoming" }),
      edges: this.store.findAll('edge')
    });
  },

  actions: {
    saveNode(node) {
      node.save().then(() => this.transitionTo('nodes'));
    },
    willTransition(transition) {
      let node = this.controller.get('model.node');

      if (node.get('hasDirtyAttributes')) {
        let confirmation = confirm("Your changes haven't been saved yet. Would you like to discard your changes?");

        if (confirmation) {
          node.rollbackAttributes();
        } else {
          transition.abort();
        }
      }
    }
  }
});
