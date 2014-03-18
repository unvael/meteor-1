
Package.describe({
  summary: "filepicker.io js sdk packaged for meteor.js."
});

Package.on_use(function (api) {
  api.use('coffeescript', 'client');
  api.use('underscore', 'client');
  api.add_files('filepicker-loader.coffee', 'client');
  api.export('loadFilepicker');
  api.export('filepicker');  // todo: not sure this is needed, too lazy to read
  // the minified code to see if `filepicker` is bound to the window object.
});
