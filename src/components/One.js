import { Helmet, HelmetProvider } from 'react-helmet-async';

function One() {
    return (
        <HelmetProvider>
            <>
                <Helmet>
                    <meta name="description" content="One Bray Description" data-rh="true" />
                    <title>One</title>
                </Helmet>
                One
            </>
        </HelmetProvider>
    )
}

export default One