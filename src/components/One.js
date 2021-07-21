import { Helmet } from 'react-helmet'

function One() {
    return (
        <>
            <Helmet>
                <meta name="description" content="One Bray Description" data-react-helmet="true" />
                <title>One</title>
            </Helmet>
            One
        </>
    )
}

export default One