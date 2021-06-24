const WebSocket = require('ws');

// starts server instance on localhost:8080
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  ws.on('message', (data) => {
    
    wss.clients.forEach((client) => {
      if(client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    });
  })
});