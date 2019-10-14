import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  queryParams: ['search'],
  search: null,

  searchItems: computed('search', 'model', function() {
    let search = this.search;
    let beers = this.model.map(item => item.name);
    if (search) return beers.filter(beer => beer.toLowerCase() == search);
  })
});
