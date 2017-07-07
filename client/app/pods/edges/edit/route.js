import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  model(params) {
    return RSVP.hash({
      edge: this.store.findRecord('edge', params.id),
      nodes: this.store.findAll('node'),
    });
  },
  actions: {
    saveEdge(edge) {
      edge.save().then(() => this.transitionTo('edges'));
    },
    willTransition(transition) {
      let edge = this.controller.get('model.edge');

      if (edge.get('hasDirtyAttributes')) {
        let confirmation = confirm("Your changes haven't been saved yet. Would you like to discard your changes?");

        if (confirmation) {
          edge.rollbackAttributes();
        } else {
          transition.abort();
        }
      }
    }
  }
});
