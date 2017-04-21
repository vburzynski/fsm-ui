import DS from 'ember-data';
import MF from 'ember-data-model-fragments';

export default MF.Fragment.extend({
  x: DS.attr('number'),
  y: DS.attr('number')
});
