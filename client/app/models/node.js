import Ember from 'ember';
import DS from 'ember-data';
import { array } from 'ember-data-model-fragments/attributes';

export default DS.Model.extend({
  type:     DS.attr('string', { defaultValue: 'nodes' }),
  title:    DS.attr('string', { defaultValue: 'New Node' }),
  position: DS.attr('coordinate-point', { defaultValue: Ember.Object.create({ x: 0, y: 0 })}),
  events:   array('string'),
  outgoing: DS.hasMany('edge', { inverse: 'source', async: true }),
  incoming: DS.hasMany('edge', { inverse: 'target', async: true })
});
