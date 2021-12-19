var request = require('request');

//Required
const ZONE_ID = '';
const USER_EMAIL = '';
const AUTH_KEY = '';

//DNS Data
const TYPE = ''; //valid values: A, AAAA, CNAME, HTTPS, TXT, SRV, LOC, MX, NS, CERT, DNSKEY, DS, NAPTR, SMIMEA, SSHFP, SVCB, TLSA, URI
const NAME = ''; //max length: 255
const CONTENT = '';
const TTL = ''; //Must be between 60 and 86400, or 1 for 'automatic'
const PROXIED = 'true';  //true or false

//Code
var options = {
    'method': 'POST',
    'url': `https://api.cloudflare.com/client/v4/zones/${ZONE_ID}/dns_records`,
    'headers': {
      'X-Auth-Email': USER_EMAIL,
      'X-Auth-Key': AUTH_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "type": TYPE,
      "name": NAME,
      "content": CONTENT,
      "ttl": TTL,
      "proxied": PROXIED
    })
  
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
  });
 