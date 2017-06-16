import { Factory, association } from 'ember-cli-mirage';

export default Factory.extend({
  title(i) {
    return `Edge ${i}`;
  },
  source: association(),
  target: association()
});
