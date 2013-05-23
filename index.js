// @TODO argument to specify which script to use. defaults to start script

var path = require('path');
var fs = require('fs');
var exec = require('child_process').exec;
var npm = require('npm');

function makeprg (currPath) {
  var dir = currPath;
  if (fs.statSync(dir).isFile())
    dir = path.dirname(dir);

  while (true) {
    console.log(dir);
    var packagePath = path.join(dir, 'package.json');
    if (fs.existsSync(packagePath)) {
      var conf = require(packagePath);
      npm.load(conf, function (err, package) {
        npm.commands.start(function () {
          //console.log(arguments);                  
        });
      });
      break;
    }
    var old_dir = dir;
    dir = path.resolve(dir, '..');
    // cant go up anymore!
    if (dir === old_dir) {
      // lets just launch node on file
      exec('node ' + currPath);
      break;
    }
  }
}

module.exports = makeprg;
