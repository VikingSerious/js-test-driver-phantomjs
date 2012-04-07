var page = require('webpage').create();
var url = 'http://localhost:9876/capture';

page.open(url, function (status) {
  console.log('Finished loading ' + url + ' with status: ' + status);
});
