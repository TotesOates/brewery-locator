import Controller from '@ember/controller';

export default Controller.extend({
  isEditing: false,
  
  actions: {
    edit() {
      this.set('isEditing', true);
    },

    save() {
      let model = this.model;
      model.save();
      this.set('isEditing', false);
    },
  }
});
