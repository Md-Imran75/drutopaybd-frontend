import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedButton from '../buttons/AnimatedButton';

function Pricing() {
    const [showMonthly, setShowMonthly] = useState(true);

    const handleMonthlyClick = () => {
        setShowMonthly(true);
    };

    const handleAnnuallyClick = () => {
        setShowMonthly(false);
    };

    const monthly = [
        {
            type: 'Basic',
            price: '100',
            website: '1'
        },
        {
            type: 'Pro',
            price: '100',
            website: '2'
        },
        {
            type: 'Pro max',
            price: '100',
            website: '3'
        },
    ]


    const annually = [
        {
            type: 'Basic',
            price: '1000',
            website: '1'
        },
        {
            type: 'Pro',
            price: '2000',
            website: '2'
        },
        {
            type: 'Pro max',
            price: '3000',
            website: '3'
        },
    ]

    return (
        <main className='border border-gray-100'>
            <div className="second-section bg-white">
                <section className=" body-font overflow-hidden">
                    <div className="container px-5 py-10 mx-auto">
                        <div className="flex flex-col text-center w-full mb-20">
                            <h1 className="sm:text-4xl text-3xl font-bold mb-2 text-gray-900">Pricing</h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Honest and affordable pricing model to help you get started easily.</p>
                            <div className="flex mx-auto border-2 border-[#018bff] rounded overflow-hidden mt-6">
                                <button id="monthly-button" className={`py-1 px-4 focus:outline-none ${showMonthly ? 'bg-[#018bff] text-white' : ''}`} onClick={handleMonthlyClick}>Monthly</button>
                                <button id="annually-button" className={`py-1 px-4 focus:outline-none ${!showMonthly ? 'bg-[#018bff] text-white' : ''}`} onClick={handleAnnuallyClick}>Annually</button>
                            </div>
                        </div>
                        <div id="monthly-packages" className={`grid md:grid-cols-3 grid-cols-1 gap-5 p-2 md:p-0 md:px-[150px] items-center flex-wrap -m-4 ${showMonthly ? '' : 'hidden'}`}>
                            {/* Monthly packages */}

                            {
                                monthly?.map((m, i) => (
                                    <>
                                        <div key={i} className='border  border-gray-50 p-5 shadow-sm'>
                                            <div className='font-bold flex justify-between items-center text-[#018bff]'>
                                                <div className='uppercase'>
                                                    {m.type}
                                                </div>
                                                {
                                                    m.type == 'Pro' ? <>
                                                        <div className='border border-[#018bff] hover:bg-[#ffbb43] hover:text-white hover:border-none text-black text-xs up font-normal px-2 py-1'>
                                                            Popular
                                                        </div>
                                                    </> : ''
                                                }
                                            </div>
                                            <div className='mb-10 mt-2'>BDT <span className='text-4xl font-bold'>{m.price}</span> /month </div>

                                            <div>
                                                <p class="flex items-center  mb-2">
                                                    <span
                                                        class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-[#018bff] text-white rounded-full flex-shrink-0">
                                                        <svg fill="none" stroke="currentColor" stroke-linecap="round"
                                                            stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3"
                                                            viewBox="0 0 24 24">
                                                            <path d="M20 6L9 17l-5-5"></path>
                                                        </svg>
                                                    </span>{m.website} Website
                                                </p>
                                                <p class="flex items-center  mb-2">
                                                    <span
                                                        class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-[#018bff] text-white rounded-full flex-shrink-0">
                                                        <svg fill="none" stroke="currentColor" stroke-linecap="round"
                                                            stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3"
                                                            viewBox="0 0 24 24">
                                                            <path d="M20 6L9 17l-5-5"></path>
                                                        </svg>
                                                    </span>Unlimited Transactions
                                                </p>
                                                <p class="flex items-center  mb-2">
                                                    <span
                                                        class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-[#018bff] text-white rounded-full flex-shrink-0">
                                                        <svg fill="none" stroke="currentColor" stroke-linecap="round"
                                                            stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3"
                                                            viewBox="0 0 24 24">
                                                            <path d="M20 6L9 17l-5-5"></path>
                                                        </svg>
                                                    </span>Free Updates
                                                </p>
                                                <p class="flex items-center  mb-6">
                                                    <span
                                                        class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-[#018bff] text-white rounded-full flex-shrink-0">
                                                        <svg fill="none" stroke="currentColor" stroke-linecap="round"
                                                            stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3"
                                                            viewBox="0 0 24 24">
                                                            <path d="M20 6L9 17l-5-5"></path>
                                                        </svg>
                                                    </span>Free Support
                                                </p>
                                            </div>

                                            <div>
                                                <Link to={'/'}>
                                                    <AnimatedButton />
                                                </Link>
                                            </div>
                                        </div>
                                    </>
                                ))
                            }


                        </div>
                        <div id="annually-packages" className={`grid md:grid-cols-3 grid-cols-1 gap-5 p-2 md:p-0 md:px-[150px] items-center flex-wrap -m-4 ${showMonthly ? 'hidden' : ''}`}>
                            {/* Annually packages */}
                            {
                                annually?.map((a, i) => (
                                    <>
                                        <div key={i} className='border  border-gray-50 p-5 shadow-sm'>
                                            <div className='font-bold flex justify-between items-center text-[#018bff]'>
                                                <div className='uppercase'>
                                                    {a.type}
                                                </div>
                                                {
                                                    a.type == 'Pro' ? <>
                                                        <div className='border border-[#018bff] hover:bg-[#ffbb43] hover:text-white hover:border-none text-black text-xs up font-normal px-2 py-1'>
                                                            Popular
                                                        </div>
                                                    </> : ''
                                                }
                                            </div>
                                            <div className='mb-10 mt-2'>BDT <span className='text-4xl font-bold'>{a.price}</span> /year </div>

                                            <div>
                                                <p class="flex items-center  mb-2">
                                                    <span
                                                        class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-[#018bff] text-white rounded-full flex-shrink-0">
                                                        <svg fill="none" stroke="currentColor" stroke-linecap="round"
                                                            stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3"
                                                            viewBox="0 0 24 24">
                                                            <path d="M20 6L9 17l-5-5"></path>
                                                        </svg>
                                                    </span>{a.website} Website
                                                </p>
                                                <p class="flex items-center  mb-2">
                                                    <span
                                                        class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-[#018bff] text-white rounded-full flex-shrink-0">
                                                        <svg fill="none" stroke="currentColor" stroke-linecap="round"
                                                            stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3"
                                                            viewBox="0 0 24 24">
                                                            <path d="M20 6L9 17l-5-5"></path>
                                                        </svg>
                                                    </span>Unlimited Transactions
                                                </p>
                                                <p class="flex items-center  mb-2">
                                                    <span
                                                        class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-[#018bff] text-white rounded-full flex-shrink-0">
                                                        <svg fill="none" stroke="currentColor" stroke-linecap="round"
                                                            stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3"
                                                            viewBox="0 0 24 24">
                                                            <path d="M20 6L9 17l-5-5"></path>
                                                        </svg>
                                                    </span>Free Updates
                                                </p>
                                                <p class="flex items-center  mb-6">
                                                    <span
                                                        class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-[#018bff] text-white rounded-full flex-shrink-0">
                                                        <svg fill="none" stroke="currentColor" stroke-linecap="round"
                                                            stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3"
                                                            viewBox="0 0 24 24">
                                                            <path d="M20 6L9 17l-5-5"></path>
                                                        </svg>
                                                    </span>Free Support
                                                </p>
                                            </div>

                                            <div>
                                                <Link to={'/'}>
                                                    <AnimatedButton />
                                                </Link>
                                            </div>
                                        </div>
                                    </>
                                ))
                            }

                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default Pricing;
