(window.define || {}).amd = false
  add = url => { s = document.createElement('script'); s.src = url; document.body.appendChild(s); return new Promise(r => s.onload = r) }
  add('https://cdnjs.cloudflare.com/ajax/libs/socket.io/1.7.1/socket.io.min.js').then(() => {
  socket = io('http://localhost:5776')
  socket.on('change', () => add(`http://localhost:8080/script.js?t=${Date.now()}`))
})
