# Inject scripts

Injects custom script on change into any running page.

## Run

    git clone https://github.com/eirikb/script-inject
    cd script-inject
    npm i
    npm start

Then copy and run this code in console (any browser, note http):


    (window.define||{}).amd=false;var addScript=function addScript(url,cb){var script=document.createElement('script');script.src=url;document.body.appendChild(script);script.onload=cb};addScript('https://cdnjs.cloudflare.com/ajax/libs/socket.io/1.7.1/socket.io.min.js',function(){var socket=io('http://localhost:5776');socket.on('change',function(){return addScript('http://localhost:8080/script.js?t='+Date.now())})});

