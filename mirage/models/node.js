import { Model, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  incoming: hasMany('edge', { inverse: 'target' }),
  outgoing: hasMany('edge', { inverse: 'source' })
});
