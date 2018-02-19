# tick

Quick and easy REPL for DevTools Console, with live reload, module loading and babel transpilation.

    npx tick-cli ./script.js

## Example
![Example](https://i.imgur.com/3ELTou3.gif)

For testing purposes, and general DevTools console hacking.  
If you use a lot of console, snippets or workspace this could be a nice alternative.  
Great for testing APIs (like Postman, just via scripting).

  * Supports ES6 modules (e.g., `import { first } from 'lodash'`).
  * Supports "env" from Babel (e.g., `async/await`) out of box.
  * Cross-browser support.
  * Works on HTTPS-sites without certificate hassle.
  * Script is injected on-save (note, it is *not* HMR, scripts are never cleared, `setInterval` will exist forever).
  * Scripts are just files, so git works great.

## License

MIT © Eirik Brandtzæg
