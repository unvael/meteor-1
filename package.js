
Package.describe({
  summary: "filepicker.io js sdk packaged for meteor.js."
});

Package.on_use(function (api) {
  api.use(['coffeescript', 'underscore'], 'client');
  api.add_files('filepicker-loader.coffee', 'client');
  api.export('loadFilepicker');
});
