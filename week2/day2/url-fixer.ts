'use strict';
// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crutial component, find out what it is and insert it too!


let url: string = 'https//www.reddit.com/r/nevertellmethebots';


/* console.log(url); */

let res1:string = url.replace('bots','odds');

let res2:string = res1.slice(0,5);

let original:string = res1.slice(6);

let res3:string = res2.concat(':');
console.log(res3.concat(original));



/* .splice(5, 0,':').join('')) */


