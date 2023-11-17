import "../styles/globals.css";
import { useRouter } from 'next/router';


function MyApp({ Component, pageProps }) {
    const router = useRouter();

    return (
        <div>
            <Component {...pageProps} />
        </div>
    )
}

export default MyApp;