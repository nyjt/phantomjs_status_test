var path = require('path')
var childProcess = require('child_process')
var phantomjs = require('phantomjs')
var binPath = phantomjs.path

function test(url) {
  var childArgs = [path.join(__dirname, 'status.js'), url]

  childProcess.execFile(binPath, childArgs, function(err, stdout, stderr) {
    process.stdout.write(stdout);
  });
} 

// EXAMPLE tests: 
test('http://google.com/');
test('http://twitter.com/');
test('http://facebook.com/');
test('https://github.com/');
