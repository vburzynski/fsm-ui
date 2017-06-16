import DS from 'ember-data';

export default DS.Model.extend({
  title:  DS.attr('string', { defaultValue: 'New Edge' }),
  source: DS.belongsTo('node', { inverse: 'outgoing', async: true }),
  target: DS.belongsTo('node', { inverse: 'incoming', async: true })
});
