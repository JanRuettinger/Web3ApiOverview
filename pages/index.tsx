import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import {
    AlchemyOverview,
    CovalentOverview,
    DeBankOverview,
    MoralisOverview,
    TheGraphOverview,
    ZapperOverview,
    ZerionOverview
} from '../components/chainData';
import IntroOverviewItem from '../components/IntroOverviewItem';
import ResultItem from '../components/ResultItem';
import ResultOverviewItem from '../components/ResultOverviewItem';
import {
    getBalancesAllTokensZapper,
    getBalancesAllTokensMoralis,
    getBalancesAllTokensZerion,
    getBalancesAllTokensDeBank,
    getBalancesAllTokensCovalent
} from '../lib/APIWrapper';

type AnalyticsItem = {
    serviceName: string;
    elapsedTime: number | undefined;
    data: [] | undefined;
    error: boolean;
};

// Add NFT calls
// Integrate posthog
// Write a few gotchas about each API
// Figure out when Zapper return events
// Desribe why results in ERC20 are different

// 2. Call: Get ERC20 balance
// 3. Call: Get ERC721 balance without meta data
// 4. Call: Get ERC721 balance with meta data
// 5. Call: Show which token is locked/staked

async function executeAPICall(
    apiCall: (Address: string) => Promise<any>,
    address: string
) {
    let startTime = performance.now();
    try {
        const data = await apiCall(address);
        let endTime = performance.now();
        const timeDiff = endTime - startTime; //in ms
        return {
            returnedData: data,
            elapsedTime: timeDiff
        };
    } catch {
        return null;
    }
}

const Home: NextPage = () => {
    const [ERC20Analytics, setERC20Analytics] = useState<AnalyticsItem[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const [address, setAddress] = useState<string>('');

    const GetAllERC20Tokens = async () => {
        setIsLoading(true);
        const dataZapper = await executeAPICall(
            getBalancesAllTokensZapper,
            address
        );

        const dataMoralis = await executeAPICall(
            getBalancesAllTokensMoralis,
            address
        );

        const dataCovalent = await executeAPICall(
            getBalancesAllTokensCovalent,
            address
        );

        const dataDeBank = await executeAPICall(
            getBalancesAllTokensDeBank,
            address
        );

        const AnalyticsData = [
            {
                serviceName: 'Covalent',
                error: dataCovalent ? false : true,
                elapsedTime: dataCovalent?.elapsedTime,
                data: dataCovalent?.returnedData
            },
            {
                serviceName: 'Moralis',
                error: dataMoralis ? false : true,
                elapsedTime: dataMoralis?.elapsedTime,
                data: dataMoralis?.returnedData
            },
            {
                serviceName: 'DeBank',
                error: dataCovalent ? false : true,
                elapsedTime: dataDeBank?.elapsedTime,
                data: dataDeBank?.returnedData
            },
            {
                serviceName: 'Zapper',
                error: dataZapper ? false : true,
                elapsedTime: dataZapper?.elapsedTime,
                data: dataZapper?.returnedData
            }
        ];

        setERC20Analytics(AnalyticsData);
        setIsLoading(false);
    };

    return (
        <div className="container mx-auto">
            <Head>
                <title>Web3 API Comparison</title>
                <meta name="description" content="" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <div className="mt-10">
                    <div className="text-center text-3xl font-bold">
                        Comparison of Blockchain APIs
                    </div>
                    <div>
                        <IntroOverviewItem
                            serviceName="Moralis"
                            data={MoralisOverview}
                            isOpenDefaultValue={true}
                        />
                        <IntroOverviewItem
                            serviceName="Zapper"
                            data={ZapperOverview}
                        />

                        <IntroOverviewItem
                            serviceName="Covalent"
                            data={CovalentOverview}
                        />
                        <IntroOverviewItem
                            serviceName="DeBank"
                            data={DeBankOverview}
                        />
                        <IntroOverviewItem
                            serviceName="Zerion"
                            data={ZerionOverview}
                        />
                        <IntroOverviewItem
                            serviceName="Alchemy"
                            data={AlchemyOverview}
                        />
                        <IntroOverviewItem
                            serviceName="The Graph"
                            data={TheGraphOverview}
                        />
                    </div>
                    <div className="mt-8 text-xl">
                        Now, try out some APIs for yourself, put in a valid
                        ethereum address (mainnet) and check the results for the
                        two commonly used end points: getERC20TokenBalance and
                        getNFTBalance. You can see the number of returned items,
                        how long the call took as well as the raw returned data.
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
                                <ul className="ml-6 list-disc">
                                    <li>
                                        0x55F5429343891f0a2b2A8da63a48E82DA8D9f2F6
                                    </li>
                                    <li>
                                        0x1a5cdcFBA600e0c669795e0B65c344D5A37a4d5A
                                    </li>
                                </ul>
                            </div>
                            <div className="mx-auto mt-4 flex w-4/6 flex-row pb-4">
                                <input
                                    className="w-4/6 rounded-md border-2 p-2"
                                    type="text"
                                    onChange={(event) =>
                                        setAddress(
                                            event.target.value.toLowerCase()
                                        )
                                    }
                                />
                                <button
                                    className={`ml-2 rounded-md p-2 text-xl text-white ${
                                        isLoading
                                            ? 'bg-slate-300'
                                            : 'bg-slate-600'
                                    }`}
                                    onClick={GetAllERC20Tokens}
                                    disabled={isLoading}
                                >
                                    Submit
                                </button>
                            </div>
                            {isLoading && (
                                <div className="my-4 text-center text-xl font-bold text-red-600">
                                    Fetching data...
                                </div>
                            )}
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
                                                serviceName={item.serviceName}
                                                error={item.error}
                                                numItems={item.data?.length}
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
                                                error={item.error}
                                                serviceName={item.serviceName}
                                                data={item.data}
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
