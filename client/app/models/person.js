import DS from 'ember-data';

export default DS.Model.extend({
  type: DS.attr('string', { defaultValue: 'persons' }),
  username: DS.attr('string'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string')
});
