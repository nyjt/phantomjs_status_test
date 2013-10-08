phantomjs_status_test
=====================

Phantomjs HTTP test application for status testing. The core testing tool is a PhantomJS script (status.js).
The nodejs_wrapper.js is a node.js wrapper of this status.js script. This wrapper help you test more sites at same time.
You can call this script from cron and put the output into a file. Make this file available via http or run another script to send email if you find ERROR word on it.

### Check one site status

```bash
git clone https://github.com/nyjt/phantomjs_status_test
cd phantomjs_status_test
phantomjs status.js http://google.com/
```

After it you rewrite the site URLs on nodejs_wrapper.js file. You can check more URL status at the same time:
```bash
node nodejs_wrapper.js
```


