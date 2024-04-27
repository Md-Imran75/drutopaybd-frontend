import Wrapper from '../wrapper/Wrapper'
import { GrIntegration } from "react-icons/gr";
import { MdOutlineAccountBox } from "react-icons/md";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { LiaMoneyBillAlt } from "react-icons/lia";
import { IoMdTime } from "react-icons/io";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { FiCreditCard, FiMail, FiUser, FiUsers } from "react-icons/fi";


const SecondHeroSection = () => {

    const data = [
        {
            title: 'Simple Integration System',
            des: `Easily integrate with our system for streamlined operations. Connect applications and data
            sources effortlessly, automate processes, and enjoy smooth workflows.
            `,
            src: GrIntegration
        },
        {
            title: 'Automate Personal Account',
            des: `Receive payments directly into your personal account using DrutoPay BD's payment automation
            software, eliminating the need for manual payment acceptance.            
            `,
            src: MdOutlineAccountBox

        },
        {
            title: 'Invoice Generator',
            des: `Start getting paid swiftly and effortlessly by sending personalized payment links via email with
            DrutoPayBD – no website or storefront needed. Don't wait any longer!            
            `,
            src: LiaFileInvoiceSolid

        },
        {
            title: 'Manage Billing',
            des: `Effortlessly handle billing with DrutoPay BD's automated system. Track payments, generate
            invoices, and streamline your business's billing process with ease.            
            `,
            src: LiaMoneyBillAlt

        },
        {
            title: 'Save Time',
            des: `Save time and simplify payment management with DrutoPay BD's software.
            `,
            src: IoMdTime

        },
        {
            title: 'Choose Pricing Plan',
            des: `We offer an honest and affordable pricing model to ensure you can easily get started.
            `,
            src: IoPaperPlaneOutline

        },
    ]

    return (
        <div className='my-20'>
            <Wrapper>
                <div>
                    <div className='text-center pb-10'>
                        <div className='font-bold text-4xl mb-1'>Amazing Features by <span className='text-[#018bff]'>DrutoPay BD</span></div>
                        <div>DrutoPayBD provides various payment automation options tailored for small business owners in
                            Bangladesh.</div>
                    </div>


                    <div className='my-10 grid lg:grid-cols-3 md:grid-cols-2 gap-5 grid-cols-1'>
                        {
                            data.map((d, i) => (
                                <>
                                    <Card
                                        key={i}
                                        title={d.title}
                                        subtitle={d.des}
                                        href="#"
                                        Icon={d.src}
                                    />
                                 
                                </>
                            ))
                        }
                    </div>



                </div>
            </Wrapper>
        </div>
    )
}


const Card = ({ title, subtitle, Icon, href }) => {
    return (
      <a
        href={href}
        className="w-full p-4 rounded border-[1px] border-gray-100 relative overflow-hidden group bg-white"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />
  
        <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-violet-400 group-hover:rotate-12 transition-transform duration-300" />
        <Icon className="mb-2 text-2xl text-[#018bff] group-hover:text-white transition-colors relative z-10 duration-300" />
        <h3 className="font-medium text-lg text-slate-950 group-hover:text-white relative z-10 duration-300">
          {title}
        </h3>
        <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
          {subtitle}
        </p>
      </a>
    );
  };

export default SecondHeroSection
