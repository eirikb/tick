// Remove amd, it will mess up with most libraries, e.g., socket io
(window.define || {}).amd = false;

const addScript = (url, cb) => {
  const script = document.createElement('script');
  script.src = url;
  document.body.appendChild(script);
  script.onload = cb;
};

addScript('https://cdnjs.cloudflare.com/ajax/libs/socket.io/1.7.1/socket.io.min.js', () => {
  const socket = io('http://localhost:5776');
  socket.on('change', () => addScript(`http://localhost:8080/script.js?t=${Date.now()}`));
});
