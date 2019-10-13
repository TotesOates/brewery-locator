import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('breweries');

  this.route('brewery', {
    path: 'breweries/:brewery_id'
  }, function() {
    this.route('details');
  });
  this.route('beers');
});

export default Router;
