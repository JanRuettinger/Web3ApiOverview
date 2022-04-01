import { OverviewitemType } from "./IntroOverviewItem"

export const MoralisOverview: OverviewitemType = {
	Link: "https://docs.moralis.io/moralis-dapp/web3-sdk",
	Onboarding: "You can see from the first time you interact with Moralis that their core product is the API. Moralis offers great documentation and an easy account setup process. The only thing which I found annoying is the fact that their node/wallet API and their data API are part of the same SDK which leads to warnings that are not relevant to you. Also be aware that the latest version of React uses webpack 5 which is not compatible yet with the Moralis SDK, more info here: https://forum.moralis.io/t/solved-breaking-change-webpack-5-used-to-include-polyfills-for-node-js-core-modules-by-default/6875/12",
	SupportedChains: "Ethereum (Mainnet, Ropsten, Ripkey, Goerli), Binance Smart Chain (Mainnet and Testnet), Polygon (Mainnet and Testnet), Avalanche (Mainnet and Testnet), Fantom (Mainnet), Solana & potentially some more which are not listed under supported chains in the documentation.",
	SupportedEndPoints: "ERC20 Balance, NFT Balance & Transaction History",
	LongTermPerspective: "The API is the core product of Moralis which is why the support and the infrastructure around their API is much better compared to others. ",
	PersonalOpinion: "I recommend the Moralis API for multi purpose projects (more than DeFi) that want to get off the groudn quickly."
}

export const ZapperOverview = {
	Link: "https://docs.zapper.fi",
	Onboarding: "The first steps of the onboarding are smooth. The API has one public key which everybody can use for free. The API follows the OpenAPI standard that's why you can automatically generate an interactive SwaggerUI documentation. \
	Here is the link: https://api.zapper.fi/api/static/index.html#. Following the OpenAPI standard also allows you to generate libs for every language automatically. Another advantage of following the OpenAPI standard is that you can easily. A User who tried that ran into some inconsistencies which he describes here: https://bit.ly/3uKbZpX. The SwaggerAPI makes it easy to interactively explore different API end points, however, after the inital try out phase a written documentation would be a big time saver.",
	SupportedChains: ["ethereum", "polygon", "optimism", "gnosis", "binance-smart-chain", "fantom", "avalanche", "arbitrium", "celo", "harmony", "moon river", "bitcoin"].map(item => item.toLowerCase()).join(", "),
	SupportedEndPoints: "Zapper API has a very comprehensive set of DeFi end points. You can get all kinds of information about a user's token balance in his wallet as well as in other protoccols. On top, the API can trigger bridge, swap and transfer transactions for a user.",
	LongTermPerspective: "The API is not the core product of Zapper. Therefore, it will always be a byproduct which only receives support on the side. Also, be aware that you share your product analytics data with Zapper. They know exactly what your users are doing.",
	PersonalOpinion: "I like the API and can recommend it for DeFi related applications."
}

export const CovalentOverview = {
	Link: "https://www.covalenthq.com",
	Onboarding: "The Covalent API is one of the two APIs in the list which uses a decentralised model. Personally, I am not sure if an API provider of data which is already public needs to be decentralised. The advantage clearly is that a decentralised provider can't ban you from the platform. However, that shoulnd't be an issue for the vast majority of projects. The API is free to use and provides three classes of end points A (end user related), B (protocol related) and C (maintained by community). When I played around with the API, it was rather unreliable and the responses differ quite a bit from other APIs (see below).",
	SupportedChains: "Ethereum, Polygon, Avalance, Binance Smart Chain, Fantom, Moonbeam, Moonriver, RSK, Arbitrum, Palm, Klaytn, Heco, Polyjuice, IoTeX, Ronin, Evmos, Harmony, Shiden ",
	SupportedEndPoints: "ERC20 Balance, NFT Balance",
	LongTermPerspective: "The Covalent API has a lot of potential for the future but still needs to work on reliablity. Sometimes API calls are randomly dropped. As mentioned before, the responses are often quite different from other APIs.",
	PersonalOpinion: "The Covalent API is easy to get started with and supports a lot of niche chains. Right now, it's not my first choice though."
}

export const DeBankOverview = {
	Link: "https://open.debank.com",
	Onboarding: "DeBank E.g. get user balance on one chain: 50*0.0002=0.01 ⇒ do that call 10 times ⇒ 10 cent per user per day just for that call",
	SupportedChains: "Ethereum, Polygon, Fantom",
	SupportedEndPoints: "ERC20 Balance, NFT Balance",
	LongTermPerspective: "API is their main product",
	PersonalOpinion: "I love it"
}

export const ZerionOverview = {
	Link: "https://docs.zerion.io",
	Onboarding: "",
	SupportedChains: "Coming soon",
	SupportedEndPoints: "Coming soon",
	LongTermPerspective: "Coming soon",
	PersonalOpinion: "Coming soon"
}


export const AlchemyOverview = {
	Link: "https://docs.alchemy.com/alchemy/",
	Onboarding: "",
	SupportedChains: "Coming soon",
	SupportedEndPoints: "Coming soon",
	LongTermPerspective: "Coming soon",
	PersonalOpinion: "Coming soon"
}

export const TheGraphOverview = {
	Link: "https://thegraph.com/docs/en/",
	Onboarding: "",
	SupportedChains: "Coming soon",
	SupportedEndPoints: "Coming soon",
	LongTermPerspective: "Coming soon",
	PersonalOpinion: "Coming soon"
}


