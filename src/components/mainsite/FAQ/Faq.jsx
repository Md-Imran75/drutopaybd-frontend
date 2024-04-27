import React from 'react'

const Faq = () => {
    return (
        <div className='my-20'>
            <div className='text-center pb-10'>
                <div className='font-bold text-4xl mb-1'>Frequently Asked Questions</div>
                <div>Discover answers to frequently asked questions.
                </div>
            </div>

            <div className="collapse collapse-arrow bg-gray-50 mb-5 ">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title font-semibold text-xl ">
                    What is DrutoPay BD
                </div>
                <div className="collapse-content">
                    <p>DrutoPay BD is a comprehensive payment automation software aimed at enhancing businesses'
                        financial operations efficiency. With features like invoicing, billing management, and seamless
                        payment processing, it also boasts built-in API integration for top mobile financial services
                        (MFS) and global payment solutions.
                    </p>
                </div>
            </div>

            <div className="collapse collapse-arrow bg-gray-50 mb-5">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold text-xl">
                    Where can I integrate DrutoPay BD?
                </div>
                <div className="collapse-content">
                    <p>DrutoPay BD seamlessly integrates with a variety of programming languages, including PHP,
                        JavaScript, Java, Python, as well as frameworks like Laravel, Node.js, and Woocommerce,
                        among others.
                    </p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-gray-50 mb-5">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold text-xl">
                    Is DrutoPay BD Free?
                </div>
                <div className="collapse-content">
                    <p>Understood, DrutoPay BD isn't free. It provides different pricing plans, with the DrutoPayBD
                        Package starting from 9 TK</p>
                </div>
            </div>
        </div>
    )
}

export default Faq
