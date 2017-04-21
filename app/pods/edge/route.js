import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    this.get('store').findRecord('edge', params.id)
  }
  // ,
  // afterModel(model) {
  //   debugger
  // }
});
