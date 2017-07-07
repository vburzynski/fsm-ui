import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function () {
    const el = this.$('[data-role="tagsinput"]');
    el.tagsinput();
  },
});
