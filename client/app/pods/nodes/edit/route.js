import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('node', params.id);
  },
  actions: {
    saveNode(node) {
      debugger
      node
        .save()
        .then(() => this.transitionTo('nodes'))
        .catch( error => {
          console.log(error);
        });
    },
    willTransition(transition) {
      let model = this.controller.get('model');

      if (model.get('hasDirtyAttributes')) {
        let confirmation = confirm("Your changes haven't been saved yet. Would you like to discard your changes?");

        if (confirmation) {
          model.rollbackAttributes();
        } else {
          transition.abort();
        }
      }
    }
  }
});
