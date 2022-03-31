import axios from 'axios'
import { NextApiRequest, NextApiResponse } from "next";


const BASE_URL = 'https://pro-openapi.debank.com/v1'


async function getBalancesAllTokens(Address: string){
	try {
		const params = new URLSearchParams();
		// user/token_list?id=0x5853ed4f26a3fcea565b3fbc698bb19cdf6deb85&chain_id=eth&is_all=false&has_balance=true'
		params.append('id', Address)
		params.append("chain_id",  "eth")
		params.append("is_all", "false")
		params.append("has_balance", "true")
		const headers = {
       "AccessKey": process.env.NEXT_PUBLIC_DEBANK_API_KEY ? process.env.NEXT_PUBLIC_DEBANK_API_KEY : ""
		}

		const response = await axios.get(`${BASE_URL}/user/token_list`, { params, headers } );
		console.log("API KEY: ", process.env.NEXT_PUBLIC_DEBANK_API_KEY)

		// const response = 	await axios({
		// 	url: BASE_URL + "/user/token_list",
		// 	method: 'get',
		// 	headers: {
		// 		'AccessKey': process.env.NEXT_PUBLIC_DEBANK_API_KEY ? process.env.NEXT_PUBLIC_DEBANK_API_KEY : ""
		// 	},
		// 	// For Basic Authorization (curl -u), set via auth:
		// 	// This will urlencode the data correctly:
		// 	data: params
		// })
		console.log(response.data)

		return response.data
	}
	catch (error) {
		console.log(error)
		throw error
	}
}

export default async function handler (request: NextApiRequest, response: NextApiResponse ) {

	const { query: { address }, method } = request;

	console.log("Request: ", request)

	if (method == "GET" && typeof address === "string"){
		const result = await getBalancesAllTokens(address)
		response.status(200).json(result)
	}
}




// var api = new DeBankOpenApi.ChainApi()
