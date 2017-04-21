import DS from 'ember-data';
import { fragment, array } from 'ember-data-model-fragments/attributes';

export default DS.Model.extend({
  title: DS.attr('string', { defaultValue: 'New Node' }),
  position: fragment('fragments/position'),
  events: array('string')
});
