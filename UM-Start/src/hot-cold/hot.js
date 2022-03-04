const { interval } = require('rxjs');
const { share } = require('rxjs/operators');

/**
 * Closes over the producer
 *  Starts emitting values regardless of any subscription
 * All subscribers get latest values
 * Usually multicast
 * Making hot observable in rxjs:
 * publish and share
*/

// source observable
const source = interval(1000).pipe(share());

console.log('------------- A demo of viewers watching a live hockey game -------------');
setTimeout(function() {
  // 1st subscriber after 2 seconds
  console.log('Michal Furinda' + ' joined after: ' + 2 + ' seconds');
  source.subscribe(s => console.log('Martin Fujacek is watching ', s + 1, 'seconds'));

  // 2nd Subscriber after 5 Seconds
  setTimeout(function() {
    console.log('Michal Furinda' + ' joined after: ' + 5 + ' seconds');
    source.subscribe(s => console.log('Martin Fujacek is watching ', s + 1, 'seconds'));
  }, 5000);
}, 2000);
