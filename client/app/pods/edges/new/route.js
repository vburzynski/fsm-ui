import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('edge');
  },

  actions: {
    saveEdge(edge) {
      edge.save().then(() => this.transitionTo('edges'));
    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }
});
