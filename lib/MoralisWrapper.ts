import Moralis from "moralis";

// /* Moralis init code */
const serverUrl = process.env.NEXT_PUBLIC_MORALIS_SERVER_URL
const appId = process.env.NEXT_PUBLIC_MORALIS_API_ID

Moralis.start({ serverUrl, appId });

export async function getBalancesAllTokens(Address: string){
	try {
		const options = {
			chain: 'eth',
			address: Address,
		};
	// @ts-ignore
		const balances = await Moralis.Web3API.account.getTokenBalances(options);
		return balances
	}
	catch (error) {
		console.log(error)
		throw error
	}
}