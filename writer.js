const nsq = require('nsqjs');

require('dotenv').config();

const w = new nsq.Writer(process.env.NSQD_HOST, process.env.NSQD_PORT);

w.connect()

w.on('ready', () => {
  let args = process.argv.slice(2);
  if (!args.length) {
    console.error('Please send argument you want to convert to uppercase');
    process.exit(1);
  }

  args = args.join(' ');

  w.publish('uppercase_text', args, err => {
    if (err) {
      console.error(err);
      return;
    }

    console.log('Message sent successfully');
    w.close();
  });
});

w.on('closed', () => console.log('Writer closed'));
