import { Helmet, HelmetProvider } from 'react-helmet-async';

function Two() {
    return (
        <HelmetProvider>
            <>
                <Helmet>
                    <meta property="og:site_name" content="San Roque 2014 Pollos" data-rh="true" />
                    <meta property="og:title" content="Two Bray" data-rh="true" />
                    <meta property="og:description" content="This is Two Description" data-rh="true" />
                    <meta property="og:image" itemprop="image" content="http://pollosweb.wesped.es/programa_pollos/play.png" data-rh="true" />
                    <meta property="og:type" content="website" data-rh="true" />
                    <meta property="og:updated_time" content="1440432930" data-rh="true" />
                </Helmet>
                Two
            </>
        </HelmetProvider>
    )
}

export default Two