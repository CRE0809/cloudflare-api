var request = require('request');

//Required
const ZONE_ID = '';
const USER_EMAIL = '';
const AUTH_KEY = '';
const IDENTIFIER = '';

//Code
var options = {
  'method': 'DELETE',
  'url': `https://api.cloudflare.com/client/v4/zones/${ZONE_ID}/dns_records/${IDENTIFIER}`,
  'headers': {
    'X-Auth-Email': USER_EMAIL,
    'X-Auth-Key': AUTH_KEY,
    'Content-Type': 'application/json',
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
