'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {});

  app.import('vendor/fontawesome/fontawesome-free/css/all.css');

  app.import('vendor/bootstrap/dist/css/bootstrap.min.css', {
    destDir: 'vendor',
  });

  app.import('vendor/bootstrap/dist/js/bootstrap.min.js');

  app.import('vendor/@popperjs/core/dist/umd/popper.min.js', {
    destDir: 'vendor',
  });

  app.import('vendor/onscreen/dist/on-screen.umd.min.js', {
    destDir: 'vendor',
  });

  app.import('vendor/nouislider/distribute/nouislider.min.js', {
    destDir: 'vendor',
  });

  app.import('vendor/smooth-scroll/dist/smooth-scroll.polyfills.min.js', {
    destDir: 'vendor',
  });

  app.import('vendor/chartist/dist/chartist.min.js', {
    destDir: 'vendor',
  });

  app.import(
    'vendor/chartist-plugin-tooltips/dist/chartist-plugin-tooltip.min.js',
    {
      destDir: 'vendor',
    }
  );

  app.import('vendor/vanillajs-datepicker/dist/js/datepicker.min.js', {
    destDir: 'vendor',
  });

  app.import('vendor/sweetalert2/dist/sweetalert2.all.min.js', {
    destDir: 'vendor',
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  // app.import('node_modules/@popperjs/dist/cjs/popper.js');
  // app.import('node_modules/bootstrap/dist/js/bootstrap.min.js');
  return app.toTree();
};
