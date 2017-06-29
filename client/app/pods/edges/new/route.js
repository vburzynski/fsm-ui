import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({

  model() {
    return RSVP.hash({
      edge: this.store.createRecord('edge'),
      nodes: this.store.findAll('node'),
    });
  },

  actions: {
    saveEdge(edge) {
      edge.save().then(() => this.transitionTo('edges'));
    },

    willTransition() {
      this.controller.get('model').rollbackAttributes();
    },
  },
});
