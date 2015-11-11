Package.describe({
  name: 'tapfuse:node-gcm',
  version: '0.12.0_1',
  // Brief, one-line summary of the package.
  summary: 'Wrapper for node-gcm',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

var C = 'client';
var S = 'server';
var CS = [C, S];

Npm.depends({
  "node-gcm": "0.12.0"
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.1');

  api.addFiles('lib/tapfuse-node-gcm.js', S);
  api.export('GCM', S);

});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('tapfuse:node-gcm');
  api.addFiles('tests/package-tests.js');
});
