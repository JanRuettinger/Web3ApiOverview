import * as Zapper from './ZapperWrapper'
import * as Covalent from './CovalentWrapper'
import * as Moralis from './MoralisWrapper'
import * as Zerion from './ZerionWrapper'
import * as DeBank from './DeBankWrapper'



export async function getBalancesAllTokensZapper(Address: string){
	try {
		const data = await Zapper.getBalancesAllTokens(Address)
		return data
	}
	catch (error) {
		console.log(error)
		throw error
	}
}


export async function getBalancesAllTokensCovalent(Address: string, fetchNFT: boolean, fetchNFTMetaData: boolean){
	try {
		const data = await Covalent.getBalancesAllTokens(Address, fetchNFT, fetchNFTMetaData)
		return data
	}
	catch (error) {
		console.log(error)
		throw error
	}
}

export async function getBalancesAllTokensMoralis(Address: string){
	try {
		const data = await Moralis.getBalancesAllTokens(Address)
		return data
	}
	catch (error) {
		console.log(error)
		throw error
	}
}

export async function getBalancesAllTokensZerion(Address: string){
	try {
		const data = await Zerion.getBalancesAllTokens(Address)
		// @ts-ignore
		return data.payload.portfolio
	}
	catch (error) {
		console.log(error)
		throw error
	}
}


export async function getBalancesAllTokensDeBank(Address: string){
	try {
		const data = await DeBank.getBalancesAllTokens(Address)
		return data
	}
	catch (error) {
		console.log(error)
		throw error
	}
}





// API Call
