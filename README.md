# Example of NSQ in Node JS

This repository is an example of [NSQ](https://nsq.io/) in [Node JS](https://nodejs.dev/) using [nsqjs](https://github.com/dudleycarr/nsqjs), I built very simple app for convert text to uppercase, so we can `publish` some text, and that text will convert to uppercase by `subscriber`.

- Publisher -> `writer.js`

- Subscriber -> `reader.js`

## Getting Started

### 1. Setup

For setup repository you must only run :

```bash
npm run setup
```

> It's will copy `.env.example` to `.env` and then install dependencies

Or you can copy manually `.env.example` to `.env` and then run : 

```bash
npm i
```

Make sure configuration for NSQ in `.env` is correct _(according to your environment)_.

### 2. Run App

Run subscriber to listen all messages from publisher :

```bash
npm run reader
```

After reader.js was running, you can test it with send default message, with run this :

```bash
npm run writer:test
```

Or you can send custom text, using this command :

```bash
npm run writer <INPUT_TEXT>
```

Replace `<INPUT_TEXT>` with text as you like, for example :

```bash
npm run writer "Luffy is not paramecia type"
```

> You can using quote or not
