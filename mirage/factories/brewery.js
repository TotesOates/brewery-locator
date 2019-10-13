import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  name() {
    return `${faker.company.companyName()} brewery`;
  },

  location(){
    return faker.address.streetAddress();
  },

  description(){
    return faker.lorem.paragraph();
  },

  afterCreate(brewery, server) {
    server.createList('beer', 3, { brewery });
  }
});
