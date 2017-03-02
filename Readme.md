# tick

For testing purposes, and general DevTools console hacking.

Injects custom script on change into any running page.  
I often use DevTools, and create snippets or use workspace, this is a cross-browser alternative.  
The script will essentially be re-injected on every save.
Unlike Hot Module Reloading the script will stay in memory, e.g., a `setInterval` will never be removed / cleaned up.


## Run

    npm i tick-cli
    ./node_modules/.bin/tick ./script.js

Then follow the instructions.


## Example

### Terminal

    $ npm i -g tick-cli
    $ npm i jquery
    $ touch script.js
    $ tick ./script.js

### Chrome
1. Open cnn.com
1. Open DevTools console (F12)
1. Copy script from terminal 
1. Then open, edit as follows and save:

### _script.js_
    
    import $ from 'jquery'
    
    $('h2,h3').each((i, n) => $(n).text($(n).text() + ', lol'));
