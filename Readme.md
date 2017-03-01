# tick

For testing purposes, and general DevTools console hacking.

Injects custom script on change into any running page.  
I often use DevTools, and create snippets or use workspace, this is a cross-browser alternative.  
The script will essentially be re-injected on every save.
Unlike Hot Module Reloading the script will stay in memory, e.g., a `setInterval` will never be removed / cleaned up.


## Run

    npm i tick
    ./node_modules/.bin/tick ./script.js

Then follow the instructions.
