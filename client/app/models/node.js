import DS from 'ember-data';
import { fragment, array } from 'ember-data-model-fragments/attributes';

export default DS.Model.extend({
  type:     DS.attr('string', { defaultValue: 'nodes' }),
  title:    DS.attr('string', { defaultValue: 'New Node' }),
  // position: fragment('fragments/position'),
  events:   array('string'),
  outgoing: DS.hasMany('edge', { inverse: 'source', async: true }),
  incoming: DS.hasMany('edge', { inverse: 'target', async: true })
});
