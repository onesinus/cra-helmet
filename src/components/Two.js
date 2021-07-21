import { Helmet } from 'react-helmet'

function Two() {
    return (
        <>
            <Helmet>
                <meta name="description" content="Two Bray Description" />
                <meta property="og:title" content="Two Bray" />
                <meta property="og:description" content="This is Two Description" />

                <title>Two</title>
            </Helmet>
            Two
        </>
    )
}

export default Two