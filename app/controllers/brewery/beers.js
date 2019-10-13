import Controller from '@ember/controller';
import { action } from '@ember/object';
import { empty } from '@ember/object/computed';

export default Controller.extend({
  isAddingBeer: false,
  newBeerName: "",
  newBeerPercentage: null,
  isAddButtonDisabled: empty('newBeerName'),
  
  addBeer: action(function() {
  this.set('isAddingBeer', true);
  }),
  
  cancelAddBeer: action(function() {
  this.set('isAddingBeer', false);
  }),
  
  saveBeer: action(function(event) {
    event.preventDefault();
    let newBeer = this.store.createRecord('beer', {
      name: this.newBeerName,
      alcoholPercentage: this.newBeerPercentage,
      brewery: this.model
    });
    newBeer.save();
    this.set('isAddingBeer', false);
  }),

  updateRating: action(function(beer, rating) {
    beer.set('rating', beer.rating === rating ? 0 : rating);
    beer.save();
    }),
});