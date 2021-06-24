
  const connection = new WebSocket('ws://localhost:8080');
  const button = document.querySelector('#button');

  connection.onopen = (event) => {
    console.log(event)
    console.log('Websocket open');
  };

  connection.onclose = (event) => {
    console.log(event)
    console.log('Websocket is closed')
  };

  connection.onerror = (event) => {
    console.log(event)
    console.log('Websocket error occured!')
  };

  connection.onmessage = (event) => {
    console.log(event)
    const chat = document.querySelector('#chat');
    chat.innerHTML += event.data;
  };
 
  button.addEventListener('click', () => {
    const name = document.querySelector('#name');
    const message = document.querySelector('#message');
    const data = `<p>${name.value}: ${message.value}</p>`;
    
    connection.send(data);
    
    name.value = '';
    message.value = '';
  });