import axios from 'axios'

export async function getBalancesAllTokens(Address: string){
	try {
		// const response = await axios.get(`https://api.zapper.fi/v1/apps/tokens/balances?addresses%5B%5D=${Address}&api_key=${process.env.NEXT_PUBLIC_ZAPPER_API_KEY}`);
		// const response = await axios.get('https://api.zapper.fi/v1/apps?api_key=96e0cc51-a62e-42ca-acee-910ea7d2a241')
		// const response = await axios.get('https://api.zapper.fi/v1/transactions?address=0x1a5cdcFBA600e0c669795e0B65c344D5A37a4d5A&addresses%5B%5D=0x1a5cdcFBA600e0c669795e0B65c344D5A37a4d5A&api_key=96e0cc51-a62e-42ca-acee-910ea7d2a241')
		// const response = await axios.get('https://api.zapper.fi/v1/balances?addresses%5B%5D=0x1a5cdcFBA600e0c669795e0B65c344D5A37a4d5A&api_key=96e0cc51-a62e-42ca-acee-910ea7d2a241')
		// console.log(response.data)
		const response = await axios.get(`https://api.zapper.fi/v1/protocols/tokens/balances?addresses%5B%5D=${Address}&api_key=${process.env.NEXT_PUBLIC_ZAPPER_API_KEY}`);
		const result = response.data[Address].products[0].assets
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