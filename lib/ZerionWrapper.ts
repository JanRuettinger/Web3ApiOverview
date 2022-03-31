import { io } from 'socket.io-client';

const BASE_URL = 'wss://api-v4.zerion.io/';

    // const addressSocket = {
    //     namespace: 'address',
    //     socket: io(`${BASE_URL}address`, {
    //         transports: ['websocket'],
    //         timeout: 60000,
    //         query: {
    //             api_token: process.env.NEXT_PUBLIC_ZERION_API_KEY
    //         }
    //     })
    // };

    // const requestBody = {
    //         scope: ['portfolio'],
    //         payload: {
    //             address: Address,
    //             currency: 'usd',
    //             portfolio_fields: 'all'
    //         },
    // }

export async function getBalancesAllTokens(Address: string) {

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

    const requestBody = {
        scope: ['portfolio'],
        payload: {
            address: '0x7e5ce10826ee167de897d262fcc9976f609ecd2b',
            currency: 'usd',
            portfolio_fields: 'all'
        },
    }

    console.log("addressSocket: ", addressSocket)
    console.log("requestBody: ", requestBody)


    return new Promise(resolve => {
        const { socket, namespace } = addressSocket;
        function handleReceive(data: any) {
            unsubscribe();
            resolve(data);
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