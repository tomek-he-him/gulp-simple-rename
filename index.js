// Imports
var path = require('path')

  , gutil = require('gulp-util')
  , through = require('through')
  , PluginError = gutil.PluginError

  , PLUGIN_NAME = 'gulp-simple-rename'
  ;


module.exports = function (renameFunction) { 'use strict';
  if (typeof renameFunction != 'function') {
    throw new PluginError(PLUGIN_NAME, 'The argument is not a function.');
  }

  var renameFile, endStream
    ;

  renameFile = function renameFile (file) {
    if (file.isNull()) return;

    var relativePath = path.relative(file.base, file.path)
      ;
    relativePath = renameFunction(relativePath);
    file.path = path.join(file.base, relativePath);
  };

  endStream = function endStream () { this.emit('end'); };

  return through(renameFile, endStream);
};
