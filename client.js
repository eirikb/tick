const host = 'localhost:9001';
const ws = new WebSocket(`ws://${host}`);

ws.onmessage = () => {
  const script = document.createElement('script');
  script.src = `http://${host}/main.js?t=${Date.now()}`;
  document.body.appendChild(script);
};

ws.onmessage();
