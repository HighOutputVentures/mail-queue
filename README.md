# Mail Queue

[![CircleCI](https://circleci.com/gh/HighOutputVentures/mail-queue.svg?style=svg)](https://circleci.com/gh/HighOutputVentures/mail-queue) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

A mailer tool that sends __bulk emails using mailgun__ in a controlled manner using the __prefetch__ and __delay__ configurations, prefetch is the number of emails send concurrently in a single time while the delay is the interval in seconds between prefetches.

## Usage

```javascript
import mailer from 'mailer-queue';

mailer(
  [
    { from: ..., to: ..., subject: ..., text: ... },
    { from: ..., to: ..., subject: ..., text: ... },
    { from: ..., to: ..., subject: ..., text: ... },
    { from: ..., to: ..., subject: ..., text: ... },
    ...
  ],
  5, /* prefetch */
  100, /* delay */
  function(err) { if (err) throw err; }
);
```
