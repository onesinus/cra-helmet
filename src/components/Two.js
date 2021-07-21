import { Helmet, HelmetProvider } from 'react-helmet-async';

function Two() {
    return (
        <HelmetProvider>
            <>
                <Helmet>
                    <meta property="og:site_name" content="San Roque 2014 Pollos" />
                    <meta property="og:title" content="Two Bray" />
                    <meta property="og:description" content="This is Two Description" />
                    <meta property="og:image" itemprop="image" content="http://pollosweb.wesped.es/programa_pollos/play.png" />
                    <meta property="og:type" content="website" />
                    <meta property="og:updated_time" content="1440432930" />
                </Helmet>
                Two
            </>
        </HelmetProvider>
    )
}

export default Two