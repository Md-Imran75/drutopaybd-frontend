import logo from '../../assets/images/drutopaylogo.png'
import { IoClose } from "react-icons/io5";
import { MdOutlineSupportAgent } from "react-icons/md";
import { MdOutlineDetails } from "react-icons/md";

const PaymentHome = () => {
    return (
        <div className='flex justify-center  md:mt-20   items-center'>

            <div className='shadow-md border md:w-[400px] w-full'>
                {/* first section start */}
                <div className='px-4 py-10 w-full bg-sky-500  sm:w-[400px] flex flex-col items-center justify-center'>

                    <div className='flex ml-[10] bg-white px-5 py-1  rounded-[15px] justify-between w-full  items-center'>
                        <div className='w-[180px]'>
                            <img src={logo} alt="Drutopay Logo" />
                        </div>
                        <div className='mt-1'>
                            <button>
                                <span className='text-[25px]'>
                                    <IoClose />
                                </span>
                            </button>
                        </div>
                    </div>


                    <div className=' bg-sky-200 mt-4 px-5 py-4 w-full flex flex-row items-center'>
                        <div className='w-2/12 border-[3px] border-white rounded-full '>
                            <img className='h-[50px] w-[50px]' src={logo} alt="" />
                        </div>
                        <div className='w-8/12 flex justify-center flex-col items-center'>
                            <div className='text-center font-bold mt-[-7px] ml-[60px]'>War Zone</div>
                            <div className='flex  ml-[60px] gap-3 mt-2'>
                                <div className='bg-white flex items-center px-2 font-bold py-1'>
                                    <span><MdOutlineSupportAgent /></span>
                                    <button className='px-2'>Support</button>
                                </div>
                                <div className='bg-white flex items-center px-2 font-bold py-1'>
                                    <span><MdOutlineDetails /></span>
                                    <button className='px-2'>Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* first section end */}

            </div>
        </div>
    )
}

export default PaymentHome
