
import Header from '../components/mainsite/global/Header'
import Footer from '../components/mainsite/footer/Footer'
import {Helmet} from 'react-helmet'

const About = () => {
    return (
        <div>
            <Helmet>
                <title>About us - DrutoPayBD</title>
                <meta name="description" content="DrutoPayBD provides various payment automation options tailored for small business owners in Bangladesh." />
                <meta name="keywords" content="Payment method" />
            </Helmet>

            <Header />
            <Footer />
        </div>
    )
}

export default About
