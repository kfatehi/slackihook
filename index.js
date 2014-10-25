"use strict";

var needle  = require('needle');

function Slack(webhookURL) {
  this.webhookURL = webhookURL;
}

Slack.prototype.send = function(payload, cb) {
  if (!payload.text)
    return cb(new Error('No text specified'));

  if (!payload.channel)
    payload.channel = '#general';

  var opts = { json: true }

  var data = JSON.stringify(payload)

  var req = needle.post(this.webhookURL, data, opts, function(err, res) {
    if (err)
      return cb(err)
    else if (res.body !== 'ok')
      return cb(new Error("Request failed with code "+res.statusCode+". Webhook URL is invalid."))
    else
      return cb(null, res.body);
  });

  return req;
};

module.exports = Slack;
