import * as Zapper from './ZapperWrapper'
import * as Covalent from './CovalentWrapper'
import * as Moralis from './MoralisWrapper'
import * as Zerion from './ZerionWrapper'
import * as DeBank from './DeBankWrapper'



export async function getBalancesAllTokensZapper(Adress: string){
	try {
		const data = await Zapper.getBalancesAllTokens(Adress)
		return data
	}
	catch (error) {
		console.log(error)
		throw error
	}
}


export async function getBalancesAllTokensCovalent(Adress: string){
	try {
		const data = await Covalent.getBalancesAllTokens(Adress)
		return data
	}
	catch (error) {
		console.log(error)
		throw error
	}
}

export async function getBalancesAllTokensMoralis(Adress: string){
	try {
		const data = await Moralis.getBalancesAllTokens(Adress)
		return data
	}
	catch (error) {
		console.log(error)
		throw error
	}
}

export async function getBalancesAllTokensZerion(Adress: string){
	try {
		const data = await Zerion.getBalancesAllTokens(Adress)
		// @ts-ignore
		return data.payload.portfolio
	}
	catch (error) {
		console.log(error)
		throw error
	}
}


export async function getBalancesAllTokensDeBank(Adress: string){
	try {
		const data = await DeBank.getBalancesAllTokens(Adress)
		return data
	}
	catch (error) {
		console.log(error)
		throw error
	}
}





// API Call
