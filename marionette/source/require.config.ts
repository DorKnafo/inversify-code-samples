declare var require;

require.config({
  baseUrl: './',
  waitSeconds: 45,
  shim: {
    backbone: { deps: ['$', '_'], exports: 'backbone' },
    localstorage: { deps: ['backbone'], exports: 'localstorage' },
    marionette: { deps: ['backbone'], exports: 'marionette' }
  },
  paths: {
    $ : "./node_modules/jquery/dist/jquery.min",
    _ : "./node_modules/underscore/underscore",
    backbone: "./node_modules/backbone/backbone-min",
    localstorage: "./node_modules/backbone.localstorage/backbone.localStorage",
    marionette : "./node_modules/backbone.marionette/lib/backbone.marionette"
  },
  // set cache off (disable in production)
  urlArgs: 'bust=' + (new Date()).getTime()
});
