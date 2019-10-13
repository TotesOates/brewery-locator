import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  title(){
    return faker.lorem.sentence();
  },

  location(){
    return faker.lorem.paragraph();
  },

  afterCreate(brewery, server) {
    server.createList('beer', 3, { brewery });
  }
});
