import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { MoralisProvider } from 'react-moralis';

// const NoSSR = ({ children }) => (
//     <>
//         <div className="h-full w-full overflow-hidden" suppressHydrationWarning>
//             {typeof window === 'undefined' ? null : children}
//         </div>
//     </>
// );

function MyApp({ Component, pageProps }: AppProps) {
    return (
        // <MoralisProvider
        //     appId={process.env.NEXT_PUBLIC_MORALIS_API_ID}
        //     serverUrl={process.env.NEXT_PUBLIC_MORALIS_SERVER_URL}
        // >
        <Component {...pageProps} />
        // </MoralisProvider>
    );
}

export default MyApp;
