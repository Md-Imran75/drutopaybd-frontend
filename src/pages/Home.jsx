import Faq from '../components/mainsite/FAQ/Faq'
import HeroSection from '../components/mainsite/HeroSection/HeroSection'
import Footer from '../components/mainsite/footer/Footer'
import Header from '../components/mainsite/global/Header'
import Pricing from '../components/mainsite/pricing/Pricing'
import SecondHeroSection from '../components/mainsite/secondHero/SecondHeroSection'
import Wrapper from '../components/mainsite/wrapper/Wrapper'
import { Suspense } from 'react';
import {Helmet} from 'react-helmet'

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home - DrutoPayBD</title>
                <meta name="description" content="DrutoPayBD provides various payment automation options tailored for small business owners in Bangladesh." />
                <meta name="keywords" content="Payment method" />
            </Helmet>


            <Header />
            <HeroSection />
            <Suspense fallback={'Loading'}>
                <Wrapper>
                    <SecondHeroSection />
                    <Pricing />
                    <Faq />
                </Wrapper>
                <Footer />
            </Suspense>
        </div>
    )
}

export default Home
