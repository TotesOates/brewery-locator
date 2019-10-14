import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  queryParams: ['search'],
  search: null,

  searchItems: computed('search', 'model', function() {
    let search = this.search;
    let beers = this.model.map(item => item.name);
    console.log(beers)
    if (search) return beers.filter(beer => beer.toLowerCase() == search.toLowerCase());
  })
});
