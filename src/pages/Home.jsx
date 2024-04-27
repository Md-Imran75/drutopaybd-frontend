import Faq from '../components/mainsite/FAQ/Faq'
import HeroSection from '../components/mainsite/HeroSection/HeroSection'
import Footer from '../components/mainsite/footer/Footer'
import Header from '../components/mainsite/global/Header'
import Pricing from '../components/mainsite/pricing/Pricing'
import SecondHeroSection from '../components/mainsite/secondHero/SecondHeroSection'
import Wrapper from '../components/mainsite/wrapper/Wrapper'
const Home = () => {
    return (
        <div>
            <Header />
            <HeroSection />

            <Wrapper>
                <SecondHeroSection/>
                <Pricing/>
                <Faq/>
            </Wrapper>
            <Footer/>
        </div>
    )
}

export default Home
