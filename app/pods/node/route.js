import Ember from 'ember';

export default Ember.Route.extend({
  a() {
    let a = true;
    a += 2;
    return a;
  },
});
