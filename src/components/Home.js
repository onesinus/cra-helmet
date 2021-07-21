import { Helmet, HelmetProvider } from 'react-helmet-async';

function Home() {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>Home</title>
                    <meta property="og:title" content="Home Bray" />
                    <meta property="og:description" content="This is Home Description" />
                </Helmet>
                Home
            </HelmetProvider>
        </>
    )
}

export default Home