import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string', { defaultValue: 'New Edge' }),
  source: DS.belongsTo('node'),
  target: DS.belongsTo('node')
});
