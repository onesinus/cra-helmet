import { Helmet } from 'react-helmet'

function One() {
    return (
        <>
            <Helmet>
                <meta name="description" content="One Bray Description" />            
                <meta property="og:title" content="One Bray" />
                <meta property="og:description" content="This is One Description" />
                <title>One</title>
            </Helmet>
            One
        </>
    )
}

export default One