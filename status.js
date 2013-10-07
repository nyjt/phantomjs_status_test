var system = require('system');
if (system.args.length === 1) {
  console.log('Try to pass some args when invoking this script!');
  phantom.exit();
}

var url = system.args[1];

var page = require('webpage').create();

page.onResourceReceived = function(response) {
  var message = '';
  if (response.url == url || response.url == url + '/' && response.stage == 'start') {
    if (response.status >= 200 && response.status < 400) {
      message += 'SUCCESS('      
    } else {
      message += 'ERROR(';
    }
      
    message += String(response.status) + ')    ' + response.url;
    console.log(message);
  }
};

page.open(url, function() {
  phantom.exit();
});
