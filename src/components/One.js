import { Helmet } from 'react-helmet-async';

function One() {
    return (
        <>
            <Helmet>
                <meta name="description" content="One Bray Description" data-rh="true" />
                <title>One</title>
            </Helmet>
            One
        </>
    )
}

export default One