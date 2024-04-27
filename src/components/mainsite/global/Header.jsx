import { Link, useLocation } from 'react-router-dom'
import logo from '../../../assets/images/drutopaylogo.png'
import Wrapper from '../wrapper/Wrapper'
import MobileMenu from './MobileMenu'
// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import 'react-lazy-load-image-component/src/effects/black-and-white.css';

const Header = () => {

    const { pathname } = useLocation()

    return (
        <div className='sticky  top-0 bg-white-100 z-50 md:border-b-0 border-b border-gray-100 py-2 bg-white shadow-sm md:shadow-none'>
            <Wrapper>
                <div className='py-2 flex justify-between items-center'>
                    <div className='w-[160px] md:w-[220px]'>
                        <Link to={'/'}>
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                    <div className='md:hidden '>
                        <MobileMenu/>
                    </div>
                    <div className=' md:flex text-gray-800 text-[15px] justify-center  font-bold gap-5 md:visible hidden items-center'>
                        <div className={`${pathname === '/' ? 'text-white bg-gradient-to-r py-1 px-2 rounded-md from-[#018bff]  to-[#0068bd]' : ''}`}><Link to={'/'}>Home</Link></div>
                        <div className={`${pathname === '/about' ? 'text-white bg-gradient-to-r py-1 px-2 rounded-md from-[#018bff]  to-[#0068bd]' : ''}`}><Link to={'/about'}>About</Link></div>
                        <div className={`${pathname === '/pricing' ? 'text-white bg-gradient-to-r py-1 px-2 rounded-md from-[#018bff]  to-[#0068bd]' : ''}`}><Link to={'/pricing'}>Pricing</Link></div>
                        <div className={`${pathname === '/documentation' ? 'text-white bg-gradient-to-r py-1 px-2 rounded-md from-[#018bff]  to-[#0068bd]' : ''}`}><Link to={'/documentation'}>Documentation</Link></div>


                    </div>

                    <div className='flex items-center text-black-500'>
                    
                        <div>
                            <div className='px-2 bg-gradient-to-r from-[#018bff]  to-[#0068bd] font-bold py-1 rounded-md text-white cursor-pointer border-gray-100'>Login</div>
                        </div>

                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default Header
