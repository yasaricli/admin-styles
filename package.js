Package.describe({
  name: 'yasaricli:admin-styles',
  version: '0.0.1',
  summary: 'Meteor admin template css styles.',
  git: 'https://github.com/yasaricli/admin-styles',
  documentation: 'README.md',
  debugOnly: true
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  // style files
  api.addFiles([
    'styles/default.css',
    'styles/navy.css',
    'styles/blue.css'
  ]);
});
