import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import ResultItem from '../components/ResultItem';
import ResultOverviewItem from '../components/ResultOverviewItem';
import {
    getBalancesAllTokensZapper,
    getBalancesAllTokensCovalent,
    getBalancesAllTokensMoralis,
    getBalancesAllTokensZerion,
    getBalancesAllTokensDeBank
} from '../lib/APIWrapper';

type AnalyticsItem = {
    serviceName: string;
    numItems: number;
    elapsedTime: number;
    dataFetched: boolean;
    data: [];
};

// Function to abstract call to API away
// Loading Spinner and disable button when APIs are being called
// Add two example addresses
// Add NFT calls
// Integrate posthog
// Write a few gotchas about each API
// Figure out when Zapper return events

// 1. Call: Get ETH Balance

// 2. Call: Get ERC20 balance

// 3. Call: Get ERC721 balance without meta data

// 4. Call: Get ERC721 balance with meta data

// 5. Call: Show which token is locked/staked

const Home: NextPage = () => {
    const [ERC20Analytics, setERC20Analytics] = useState<AnalyticsItem[]>([]);

    const [adress, setAdress] = useState<string>('');

    const GetAllERC20Tokens = async () => {
        let startTime = performance.now();
        const dataZapper = await getBalancesAllTokensZapper('');
        let endTime = performance.now();
        const timeDiffZapper = endTime - startTime; //in ms

        startTime = performance.now();
        const dataMoralis = await getBalancesAllTokensMoralis(adress);
        endTime = performance.now();
        const timeDiffMoralis = endTime - startTime; //in ms

        // startTime = performance.now();
        // const dataZerion = await getBalancesAllTokensZerion(adress);
        // endTime = performance.now();
        // const timeDiffZerion = endTime - startTime; //in ms

        startTime = performance.now();
        const dataCovalent = await getBalancesAllTokensCovalent(
            adress,
            false,
            true
        );
        endTime = performance.now();
        const timeDiffCovalent = endTime - startTime; //in ms

        startTime = performance.now();
        const dataDeBank = await getBalancesAllTokensDeBank(adress);
        endTime = performance.now();
        const timeDiffDeBank = endTime - startTime; //in ms

        const AnalyticsData = [
            {
                serviceName: 'Covalent',
                numItems: dataCovalent.length,
                elapsedTime: timeDiffCovalent,
                dataFetched: true,
                data: dataCovalent
            },
            {
                serviceName: 'Moralis',
                numItems: dataMoralis.length,
                elapsedTime: timeDiffMoralis,
                dataFetched: true,
                data: dataMoralis
            },
            // {
            //     serviceName: 'Zerion',
            //     numItems: dataZerion.length,
            //     elapsedTime: timeDiffZerion,
            //     dataFetched: true,
            //     data: dataZerion
            // },
            {
                serviceName: 'DeBank',
                numItems: dataDeBank.length,
                elapsedTime: timeDiffDeBank,
                dataFetched: true,
                data: dataDeBank
            },
            {
                serviceName: 'Zapper',
                numItems: dataZapper.length,
                elapsedTime: timeDiffZapper,
                dataFetched: true,
                data: dataZapper
            }
        ];
        setERC20Analytics(AnalyticsData);
        // console.log(AnalyticsData);
        // console.log('#####');
        // console.log(dataDeBank);
    };

    return (
        <div className="container mx-auto">
            <Head>
                <title>API Test</title>
                <meta name="description" content="" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <div className="mt-10">
                    <div className="text-center text-3xl font-bold">
                        Comparison of Blockchain APIs
                    </div>

                    <div className="mt-8">
                        <div className="mx-auto w-4/6 rounded-md border-2 bg-teal-200 pt-4">
                            <div className="ml-4 text-2xl font-semibold">
                                Get all ERC 20 tokens of a user
                            </div>
                            <div className="ml-4 mt-2">
                                <div className="text-xl">
                                    Example addresses:
                                </div>
                                <ul className="ml-4 list-disc">
                                    <li>
                                        0x55F5429343891f0a2b2A8da63a48E82DA8D9f2F6
                                    </li>
                                    <li>
                                        0x55F5429343891f0a2b2A8da63a48E82DA8D9f2F6
                                    </li>
                                </ul>
                            </div>
                            <div className="mx-auto mt-4 flex w-4/6 flex-row pb-4">
                                <input
                                    className="w-4/6 rounded-md border-2 p-2"
                                    type="text"
                                    onChange={(event) =>
                                        setAdress(event.target.value)
                                    }
                                />
                                <button
                                    className="ml-2 rounded-md bg-slate-600 p-2 text-xl text-white"
                                    onClick={GetAllERC20Tokens}
                                >
                                    Submit
                                </button>
                            </div>
                            <div className="bg-blue-200 p-4">
                                <div className="text-xl font-semibold">
                                    Results Overview
                                </div>
                                <div className="mt-4">
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="text-center font-bold">
                                            Name of the API
                                        </div>
                                        <div className="text-center font-bold">
                                            Number of return items
                                        </div>
                                        <div className="text-center font-bold">
                                            Elapsed time (in ms)
                                        </div>
                                    </div>
                                    {ERC20Analytics.map((item, key) => {
                                        return (
                                            <ResultOverviewItem
                                                key={key}
                                                dataFetched={item.dataFetched}
                                                serviceName={item.serviceName}
                                                numItems={item.numItems}
                                                elapsedTime={item.elapsedTime}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="bg-orange-200 p-4">
                                <div className="text-xl font-semibold">
                                    Result Data
                                </div>
                                <div className="mt-4">
                                    {ERC20Analytics.map((item, key) => {
                                        return (
                                            <ResultItem
                                                key={key}
                                                dataFetched={item.dataFetched}
                                                serviceName={item.serviceName}
                                                data={item.data}
                                                numItems={item.numItems}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer></footer>
        </div>
    );
};

export default Home;
function item(item: any): import('react').ReactNode {
    throw new Error('Function not implemented.');
}
