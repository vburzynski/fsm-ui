import Ember from 'ember';
import DS from 'ember-data';

export default DS.Transform.extend({
  serialize(value) {
    if (value) {
      return [value.get('x'), value.get('y')];
    }
    return [0, 0];
  },
  deserialize(value) {
    if (value) {
      return Ember.Object.create({ x: value[0], y: value[1] });
    }
    return Ember.Object.create({ x: 0, y: 0 });
  },
});
