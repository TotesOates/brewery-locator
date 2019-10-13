import DS from 'ember-data';
const { Model, hasMany } = DS;

export default Model.extend({
  title: DS.attr('string'),
  location: DS.attr('string'),

  beer: hasMany(),
});
