import { AppProps } from 'next/app'

const App = ({ Component, pageProps}: AppProps) => {
    return (
        <Component {...pageProps} />
    )
}