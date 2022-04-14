const nsq = require('nsqjs');

require('dotenv').config();

const reader = new nsq.Reader('uppercase_text', 'channel_1', {
  lookupdHTTPAddresses: process.env.NSQ_LOOKUPD_HTTP_ADDRESS,
});

reader.connect();

reader.on('message', msg => {
  const message = msg.body.toString();
  const messageInUppercase = message.toUpperCase();

  console.log('Received: %s, Converted: %s', message, messageInUppercase);
  msg.finish();
});
