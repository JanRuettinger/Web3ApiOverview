import axios from 'axios'

export async function getBalancesAllTokens(Address: string){
	try {
		const response = await axios.get(`https://api.zapper.fi/v1/protocols/tokens/balances?addresses%5B%5D=${Address}&api_key=${process.env.NEXT_PUBLIC_ZAPPER_API_KEY}`);
		const result = response.data[Address.toLowerCase()].products[0].assets
		// console.log(response.data[Address.toLowerCase()].products[0].assets)

		// console.log("Zapper events started")
		// var source = new EventSource(url);
		// console.log(source)
		// source.onmessage = function(event) {
		// 		console.log(event)
		// };
		if(result){
			return result
		} else {
			return []
		}
	}
	catch (error) {
		console.log(error)
		throw error
	}
}