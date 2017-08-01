# tick

![Example](https://i.imgur.com/rKXWueE.png)

For testing purposes, and general DevTools console hacking.  
If you use a lot of console, snippets or workspace this could be a nice alternative.  
Great for testing APIs (like Postman, just via scripting).

  * Supports ES6 modules (e.g., `import { first } from 'lodash'`).
  * Supports "env" from Babel (e.g., `async/await`) out of box.
  * Cross-browser support.
  * Works on HTTPS-sites without certificate hassle.
  * Script is injected on-save (note, it is *not* HMR, scripts are never cleared, `setInterval` will exist forever).
  * Scripts are just files, so git works great.

## Run

    npm i tick-cli
    ./node_modules/.bin/tick ./script.js

Then copy the script snippet from terminal into browser console.

## Example fetch

[`window.fetch`](http://caniuse.com/#search=fetch) has good support, but for 100% coverage a polyfill must be used.

### Terminal

    $ npm i tick-cli whatwg-fetch lodash
    
### Browser
1. Open https://developer.github.com/v3/
1. Open DevTools console (F12).
1. Copy script from terminal and paste into DevTools console.
1. Put following code into _script.js_ and save the file:

### _script.js_

    import 'whatwg-fetch'
    import { filter } from 'lodash'

    (async () => {
      const user = 'eirikb'
      const events = await fetch(`https://api.github.com/users/${user}/events`)
          .then(res => res.json())
      const publicEvents = filter(events, { public: true})
      console.log(publicEvents);
    })()


## Example jQuery

### Terminal

    $ npm i tick-cli jquery
    $ touch script.js
    $ ./node_modules/.bin/tick ./script.js

### Browser
1. Open cnn.com.
1. Open DevTools console (F12).
1. Copy script from terminal and paste into DevTools console.
1. Put following code into _script.js_ and save the file:

### _script.js_
    
    import $ from 'jquery'
    
    $('h2,h3').each((i, n) => $(n).text($(n).text() + ', lol'));
