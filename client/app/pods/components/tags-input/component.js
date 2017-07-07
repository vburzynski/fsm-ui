import Ember from 'ember';

export default Ember.Component.extend({
  csv: Ember.computed('tags', function(){
    const tags = this.get('tags');
    return tags ? tags.toArray().join(',') : '';
  }).readOnly(),

  didInsertElement: function () {
    this.$('[data-role="tagsinput"]').tagsinput();
  },

  actions: {
    onChange: function () {
      var tags = this.$('[data-role="tagsinput"]').tagsinput('items');
      this.sendAction('tagsChanged', tags);
    }
  }
});
