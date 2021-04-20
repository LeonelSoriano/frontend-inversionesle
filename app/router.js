import EmberRouter from '@ember/routing/router';
import config from 'frontend-inversionesle/config/environment';
import { inject as service } from '@ember/service';

export default class Router extends EmberRouter {
  @service auth;
  @service router;

  location = config.locationType;
  rootURL = config.rootURL;

  constructor() {
    super(...arguments);

    this.on('routeWillChange', (transition) => {
      if (transition.to === null) {
        return;
      }

      if (config.APP.noAuthPath.includes(transition.to.name)) {
        return;
      }
      if (this.auth.isAuth() === false) {
        transition.abort();
        this.transitionTo('sign-in');
        return;
      }
    });

    /*this.on('routeDidChange', (transition) => {
      // console.log(transition.transitionTo);
    }); */
  }
}

Router.map(function () {
  this.route('sign-in');
  this.route('sign-up');
  this.route('not-found', { path: '/*path' });
  this.route('dashboard');
});
