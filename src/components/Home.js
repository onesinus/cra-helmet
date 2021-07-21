import { Helmet } from 'react-helmet-async';

function Home() {
    return (
        <>
            <Helmet>
                <title>Home</title>
                <meta name="title" content="One GG Asli" />
                <meta name="description" content="One Bray Description" />

                <meta property="og:title" content="Home Bray" />
                <meta property="og:description" content="This is Home Description" />
            </Helmet>
            Home
        </>
    )
}

export default Home