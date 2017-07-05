import DS from 'ember-data';

export default DS.Model.extend({
  type:   DS.attr('string', { defaultValue: 'edges' }),
  title:  DS.attr('string', { defaultValue: 'New Edge' }),
  source: DS.belongsTo('node', { inverse: 'outgoing', async: true }),
  target: DS.belongsTo('node', { inverse: 'incoming', async: true })
});
