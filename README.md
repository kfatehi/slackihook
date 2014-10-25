slackihook
==========

Send incoming webhooks to Slack. That is all.

Code modified from https://github.com/xoxco/node-slack/blob/master/slack.js @ da918dc0935bf676ebeb15f7fe87b9c0b7a1fc1a
* take a webhookURL instead of domain & token, per Slack support
* use needle instead of request for the http request module
* remove http proxy options
* use only node-style callback (remove deferred and callback checks)
* passthru payload without tampering
* general code cleanup & readibility improvements
* remove #respond -- keep it simple and just #send

# Install

`npm install slackihook`

# Usage

```javascript
var Slack = require('slackihook')

var incomingWebhookURL = "<whatever you got from slack>"

slack = new Slack(incomingWebhookURL)

slack.send({
  channel: "#general",
  username: "TestBot",
  icon_url: "/some/optional/url",
  text: "here is my text"
}, function(err, res) {
  // handle the node-style callback
})
```

The payload is passed directly through to the POST request without tampering, so all Slack incoming webhook options are available to you.
