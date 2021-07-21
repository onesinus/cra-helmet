import { Helmet } from 'react-helmet'

function Home() {
    return (
        <>
            <Helmet>
                <title>Home</title>
                <meta property="og:title" content="Home Bray" />
                <meta property="og:description" content="This is Home Description" />
            </Helmet>
            Home
        </>
    )
}

export default Home