import DS from 'ember-data';
const { Model, hasMany } = DS;

export default Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  location: DS.attr('string'),
  
  beer: hasMany(),
});
