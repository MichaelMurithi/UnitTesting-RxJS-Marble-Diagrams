const { interval } = require('rxjs');
/**

 * The producer creates and activates the observable
 * Starts emiting values upon subscription
 * All subscribers get their copy of values
 * Usually unicast (one subscriber per producer)
 * Subscribers do not share producers among themselves
 * Eg created through: Of, from, interval and timer operators
    Real-life: Watching a pre-recorded hockey game;

*/
// source observable
const source = interval(1000);

console.log('------------- A demo of viewers downloading a past hockey game -------------');

setTimeout(function() {
  // 1st Viewer after 2 seconds
  console.log('Martin Fujacek' + ' downloaded at: ' + 2 + ' seconds');
  source.subscribe(s => console.log('Martin Fujacek is watching ', s + 1, 'seconds'));

  // 2nd Viewer after 5 Seconds
  setTimeout(function() {
    console.log('Michal Furinda' + ' downloaded at: ' + 5 + ' seconds');
    source.subscribe(s => console.log('Michal Furinda is watching ', s + 1, 'seconds'));
  }, 5000);
}, 2000);
