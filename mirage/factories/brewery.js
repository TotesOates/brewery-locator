import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  name() {
    return `${faker.company.companyName()} Brewery`;
  },

  location(){
    return `${faker.address.streetAddress()} ${faker.address.city()} ${faker.address.state()} ${faker.address.zipCode()}.`;
  },

  description(){
    return faker.lorem.paragraph();
  },

  afterCreate(brewery, server) {
    server.createList('beer', 3, { brewery });
  }
});
