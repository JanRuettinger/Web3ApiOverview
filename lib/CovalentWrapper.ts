import axios from 'axios'

export async function getBalancesAllTokens(Address: string){

	const fetchNFT = false
	const fetchNFTMetaData = true

	try {
		const params = new URLSearchParams();
		params.append('quote-currency', 'USD')
		params.append("format", "JSON")
		params.append("nft", fetchNFT ? "true" : "false")
		params.append("no-nft-fetch", fetchNFTMetaData ? "true" : "false")
		if(process.env.NEXT_PUBLIC_COVALENT_API_KEY){
			params.append("key", process.env.NEXT_PUBLIC_COVALENT_API_KEY)
		}
		else {
			throw Error("Covalent API KEY is missing")
		}
		const response = await axios.get(`https://api.covalenthq.com/v1/1/address/${Address}/balances_v2/`, { params });
		return response.data.data.items
	}
	catch (error) {
		console.log(error)
		throw error
	}
}