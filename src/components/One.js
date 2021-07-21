import { Helmet } from 'react-helmet-async';

function One() {
    return (
        <>
            <Helmet>
                <meta name="title" content="One GG Asli" data-react-helmet="true" data-rh="true" />
                <meta name="description" content="One Bray Description" data-react-helmet="true" data-rh="true" />
                <title>One</title>
            </Helmet>
            One
        </>
    )
}

export default One