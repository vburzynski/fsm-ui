import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({

  title(i) {
    return `Node ${i}`;
  },

  position: {
    x: faker.random.number(),
    y: faker.random.number()
  },

  events: ['event1', 'event2']

});
