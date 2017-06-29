import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('nodes', function() {
    this.route('new');
    this.route('show', { path: '/:id' });
  });
  this.route('edges', function() {
    this.route('new');
    this.route('show', { path: '/:id' });
  });
  this.route('people');
});

export default Router;
