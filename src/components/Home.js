import { Helmet } from 'react-helmet-async';

function Home() {
    return (
        <>
            <Helmet>
                <title>your keyword rich title of the website and/or webpage</title>
                <meta name="description" content="description of your website/webpage, make sure you use keywords!" />

                <meta property="og:title" content="short title of your website/webpage" />
                <meta property="og:url" content="https://master.dgmlkjvqxsdr9.amplifyapp.com" />

                <meta property="og:description" content="description of your website/webpage" />
                <meta property="og:image" content="//cdn.example.com/uploads/images/webpage_300x200.png" />
                <meta property="og:type" content="article" />

                <meta property="og:locale" content="en_GB" />
                <meta property="og:locale:alternate" content="fr_FR" />
                <meta property="og:locale:alternate" content="es_ES" />

            </Helmet>
            Home
        </>
    )
}

export default Home