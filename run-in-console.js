// Remove amd, it will mess up with most libraries, e.g., socket io
(window.define || {}).amd = false;

import Wat from './wat';

console.log(Wat.ok())

const addScript = (url, cb) => {
  const script = document.createElement('script');
  script.src = url;
  document.body.appendChild(script);
  script.onload = cb;
};

addScript('https://cdnjs.cloudflare.com/ajax/libs/socket.io/1.7.1/socket.io.min.js', () => {
  const socket = io('http://localhost:9002');
  socket.on('change', () => addScript(`http://localhost:9001/script.js?t=${Date.now()}`));
});
