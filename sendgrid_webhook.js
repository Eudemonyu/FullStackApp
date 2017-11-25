var localtunnel = require('localtunnel');
localtunnel(5000, { subdomain: 'awsedrf' }, function(err, tunnel) {
  console.log('LT running');
});
