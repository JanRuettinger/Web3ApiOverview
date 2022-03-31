// curl -X 'GET' \
import axios from 'axios'

export async function getBalancesAllTokens(Address: string){
	try {
		const params = new URLSearchParams();
		params.append('address', Address)
		const response = await axios.get(`/api/debank`, { params} );
		return response.data
	}
	catch (error) {
		console.log(error)
		throw error
	}
}