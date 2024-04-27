import React from "react";
import { BsMenuUp } from "react-icons/bs";
import { Link, useLocation } from 'react-router-dom'

function MobileMenu() {

    const { pathname } = useLocation()

    const [openMenu, setOpenMenu] = React.useState(false);

    return (
        <div className="mt-[13px] relative  ">
            <div onClick={() => setOpenMenu(!openMenu)} className="text-[30px] text-gradient-to-r from-[#018bff]  to-[#0068bd] text-[#367ab1]  -mt-3">
                <BsMenuUp />
            </div>
            {
                openMenu && <>
                    <div className="absolute bg-slate-50 w-[300px] right-[-87px] p-5   shadow-md top-[50px]  ">
                        <div className='flex flex-col justify-center gap-5 md:hidden visible items-center'>
                            <div onClick={() => setOpenMenu(false)} className={`${pathname === '/' ? 'text-white w-full bg-gradient-to-r py-1 px-2 rounded-md from-[#018bff]  to-[#0068bd]' : ''} cursor-pointer anton rounded-sm   w-full py-[8px] px-[10px] `}>
                                <Link to={'/'} >
                                    <div className="w-full">Home</div>
                                </Link>
                            </div>

                            <div onClick={() => setOpenMenu(false)} className={`${pathname === '/about' ? 'text-white w-full bg-gradient-to-r py-1 px-2 rounded-md from-[#018bff]  to-[#0068bd]' : ''} cursor-pointer anton rounded-sm   w-full py-[8px] px-[10px] `}>
                                <Link to={'/about'} >
                                    <div className="w-full">About</div>

                                </Link>
                            </div>



                            <div onClick={() => setOpenMenu(false)} className={`${pathname === '/pricing' ? 'text-white w-full bg-gradient-to-r py-1 px-2 rounded-md from-[#018bff]  to-[#0068bd]' : ''} cursor-pointer anton rounded-sm   w-full py-[8px] px-[10px] `}>
                                <Link to={'/pricing'} >
                                    <div className="w-full">Pricing</div>

                                </Link>
                            </div>
                            <div onClick={() => setOpenMenu(false)} className={`${pathname === '/documentation' ? 'text-white w-full bg-gradient-to-r py-1 px-2 rounded-md from-[#018bff]  to-[#0068bd]' : ''} cursor-pointer anton rounded-sm   w-full py-[8px] px-[10px] `} >
                                <Link to={'/documentation'} >
                                    <div className="w-full">Documentatio</div>

                                </Link>
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    );
}


export default MobileMenu;