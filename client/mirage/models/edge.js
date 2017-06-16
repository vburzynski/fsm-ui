import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  source: belongsTo('node'),
  target: belongsTo('node')
});
