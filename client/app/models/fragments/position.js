import DS from 'ember-data';
import MF from 'ember-data-model-fragments';

export default MF.Fragment.extend({
  x: DS.attr('number', { defaultValue: 0 }),
  y: DS.attr('number', { defaultValue: 0 })
});
