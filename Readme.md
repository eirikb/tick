# tick

![Example](https://i.imgur.com/rKXWueE.png)
Example of reddit api using Chrome.

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

Then copy the script snippet from terminal into DevTools console.

## License

MIT © Eirik Brandtzæg
