import { Link,useLocation } from 'react-router-dom'
import logo from '../../../assets/images/drutopaylogo.png'
import Wrapper from '../wrapper/Wrapper'
// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import 'react-lazy-load-image-component/src/effects/black-and-white.css';

const Header = () => {

    const { pathname } = useLocation()

    return (
        <div className='sticky top-0 bg-white-100 z-50 md:border-b-0 border-b border-gray-100 py-2 bg-white shadow-sm md:shadow-none'>
            <Wrapper>
                <div className='py-2 flex justify-between items-center'>
                    <div className='w-[160px] md:w-[220px]'>
                        <Link to={'/'}>
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                    {/* <div className='md:hidden block'>
                        <MobileMenu/>
                    </div> */}
                    <div className=' md:flex text-gray-800 justify-center text-[18px] font-bold gap-5 md:visible hidden items-center'>
                        <div className={`${pathname === '/' ? 'text-[#018bff]' : ''}`}><Link to={'/'}>Home</Link></div>
                        <div className={`${pathname === '/about' ? 'text-[#018bff]' : ''}`}><Link to={'/about'}>About</Link></div>
                        <div className={`${pathname === '/price' ? 'text-[#018bff]' : ''}`}><Link to={'/pricing'}>Pricing</Link></div>
                        <div className={`${pathname === '/documentation' ? 'text-[#018bff]' : ''}`}><Link to={'/documentation'}>Documentation</Link></div>


                    </div>

                    <div className='flex items-center text-black-500'>
                        <div>
                            <div className='px-2 bg-[#018bff] font-bold py-[3px] text-white border-r cursor-pointer border-gray-100'>Login</div>
                        </div>
                        <div>
                            <div className='px-2 bg-[#018bff] font-bold py-[3px] text-white   cursor-pointer '>SignUp</div>

                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default Header
