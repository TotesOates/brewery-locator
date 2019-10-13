import DS from 'ember-data';
const { Model, belongsTo } = DS;

export default Model.extend({
  name: DS.attr('string'),
  type: DS.attr('string'),
  alcoholPercentage: DS.attr('number'),

  brewery: belongsTo(),
});
