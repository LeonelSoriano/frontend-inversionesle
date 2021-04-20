'use strict';

module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'frontend-inversionesle',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
        EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false,
      },
    },

    APP: {
      noAuthPath: ["home", "sign-in", "sign-up"]
      // Here you can pass flags/options to your application instance
      // when it is created
    },
  };

  if (environment === 'development') {
    ENV.APP.endPointBackend = 'http://localhost:8000';
    ENV.APP.URL_USER_IMG = '/api/img/user-img';
    ENV.APP.authSigup = '/api/auth/signup';
    ENV.APP.AUTH_LOGIN = '/api/auth/login';
    ENV.APP.IMAGEN_NOT_FOUND = './assets/img/until/not-found-image.jpg';
    ENV.APP.URL_LOAD_USER_IMG = '/api/img/upload-img-user?ex=png';

    ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_TRANSITIONS = true;
    ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
