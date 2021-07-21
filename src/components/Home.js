import { Helmet } from 'react-helmet'

function Home() {
    return (
        <>
            <Helmet>
                <meta name="description" content="Home Bray Description" />
                <meta property="og:title" content="Home Bray" />
                <meta property="og:description" content="This is Home Description" />
                <title>Home</title>
            </Helmet>
            Home
        </>
    )
}

export default Home