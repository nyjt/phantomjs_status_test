var system = require('system');
if (system.args.length === 1) {
  console.log('Try to pass an URL as argument when invoking this script!');
  phantom.exit();
}

var url = system.args[1];
var page = require('webpage').create();
var redirect_url = url;
page.onResourceReceived = function(response) {
  var message = ''
  if (response.redirectURL) {
    redirect_url = response.redirectURL;
  }
  if ([url, url + '/', redirect_url].indexOf(response.url) >= 0 && response.stage == 'start') {
    if (response.status >= 200 && response.status < 300) {
      message += 'SUCCESS  (';
    } else if (response.status >= 300 && response.status < 400) {
      message += 'REDIRECT (';
    } else {
      message += 'ERROR    (';
    }
      
    message += String(response.status) + ')    ' + response.url;

    console.log(message);
  }
};

page.open(url, function() {
  phantom.exit();
});
