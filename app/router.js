import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('nodes');
  this.route('node', { path: '/node/:id' });
  this.route('edges');
  this.route('edge', { path: '/edge/:id' });
});

export default Router;
