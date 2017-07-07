import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  model() {
    return RSVP.hash({
      node: this.store.createRecord('node'),
      edges: this.store.findAll('edge'),
    });
  },
  actions: {
    willTransition() {
      this.controller.get('model.node').rollbackAttributes();
    },
  }
});
