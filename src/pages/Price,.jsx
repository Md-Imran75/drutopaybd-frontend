import React from 'react'
import Wrapper from '../components/mainsite/wrapper/Wrapper';
import Pricing from '../components/mainsite/pricing/Pricing';
import { Helmet } from 'react-helmet'
import Header from '../components/mainsite/global/Header';
import Footer from '../components/mainsite/footer/Footer';


const Price = () => {
    return (
        <div>

            <Helmet>
                <title>Pricing - DrutoPayBD</title>
                <meta name="description" content="DrutoPayBD provides various payment automation options tailored for small business owners in Bangladesh." />
                <meta name="keywords" content="Payment method" />
            </Helmet>


            <Header />
          
            <Wrapper>
                <div className='my-10'>

                    <Pricing />
                </div>
            </Wrapper>
            <Footer />
        </div>
    )
}

export default Price;
