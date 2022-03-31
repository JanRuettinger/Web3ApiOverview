let io = require('socket.io-client')

const BASE_URL = 'wss://api-v4.zerion.io/';

function verify(request, response) {
  // each value in request payload must be found in response meta
  return Object.keys(request.payload).every(key => {
    const requestValue = request.payload[key];
    const responseMetaValue = response.meta[key];
    if (typeof requestValue === 'object') {
      return JSON.stringify(requestValue) === JSON.stringify(responseMetaValue);
    }
    return responseMetaValue === requestValue;
  });
}

const addressSocket = {
  namespace: 'address',
  socket: io(`${BASE_URL}address`, {
    transports: ['websocket'],
    timeout: 60000,
    query: {
      api_token:
        'Demo.ukEVQp6L5vfgxcz4sBke7XvS873GMYHy',
    },
  }),
};

function get(socketNamespace, requestBody) {
	console.log("in get")
  return new Promise(resolve => {
    const { socket, namespace } = socketNamespace;
    function handleReceive(data) {
			console.log("in handle receive")
      if (verify(requestBody, data)) {
        unsubscribe();
        resolve(data);
      }
    }
    const model = requestBody.scope[0];
    function unsubscribe() {
      socket.off(`received ${namespace} ${model}`, handleReceive);
      socket.emit('unsubscribe', requestBody);
    }
    socket.emit('get', requestBody);
    socket.on(`received ${namespace} ${model}`, handleReceive);
  });
}

get(addressSocket, {
  scope: ['portfolio'],
  payload: {
      address: '0x7e5ce10826ee167de897d262fcc9976f609ecd2b',
      currency: 'usd',
      portfolio_fields: 'all'
  },
}).then(response => {
  console.log(response.payload.portfolio);
});