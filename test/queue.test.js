const test = require('ava');
const times = require('lodash/times');
const Queue = require('../queue');

test.cb('Array size: 20, prefetch: 5', t => {
  const emails = [];
  const queue = new Queue({emails, prefetch: 5});

  times(20, () => {
    emails.push({from: 'Identifi <noreply@Identifi.com>', to: 'arjay@highoutput.com', content: 'sample email'});
  });

  queue.on('dispatch', data => {
    t.is(data.dispatched.length, 5);
  });

  queue.on('done', t.end);
  queue.dispatch();
});

test.cb('Array size: 3, prefetch: 5', t => {
  const emails = [];
  const queue = new Queue({emails, prefetch: 5});

  times(3, () => {
    emails.push({from: 'Identifi <noreply@Identifi.com>', to: 'arjay@highoutput.com', content: 'sample email'});
  });

  queue.on('dispatch', data => {
    t.is(data.dispatched.length, 3);
  });

  queue.on('done', t.end);
  queue.dispatch();
});

test.cb('Array size: 1, prefetch: 5', t => {
  const queue = new Queue({
    emails: [{from: 'Identifi <noreply@Identifi.com>', to: 'arjay@highoutput.com', content: 'sample email'}],
    prefetch: 5
  });

  queue.on('dispatch', data => {
    t.is(data.dispatched.length, 1);
  });

  queue.on('done', t.end);
  queue.dispatch();
});

test.cb('Array size: 1, prefetch: 1', t => {
  const queue = new Queue({
    emails: [{from: 'Identifi <noreply@Identifi.com>', to: 'arjay@highoutput.com', content: 'sample email'}],
    prefetch: 5
  });

  queue.on('dispatch', data => {
    t.is(data.dispatched.length, 1);
  });

  queue.on('done', t.end);
  queue.dispatch();
});

test.cb('Array size: 0, prefetch: 5', t => {
  const queue = new Queue({emails: [], prefetch: 5});

  queue.on('dispatch', () => {
    t.fail();
  });

  queue.on('done', t.end);
  queue.dispatch();
});
