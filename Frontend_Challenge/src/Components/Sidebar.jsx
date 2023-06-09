import Logo from '../assets/logo.svg'
import LogoIcon from '../assets/indent-decrease.svg'
import Dashboard from '../assets/smart-home.svg'
import Cart from '../assets/shopping-cart.svg'
import Brand from '../assets/star.svg'
import AddCircle from '../assets/circle-plus.svg'
import Box from '../assets/box.svg'
import { useState } from 'react'
import { List } from 'phosphor-react'


const sidebarOptions = [
    {
        title: "MAIN MENU",
        children: [
            {
                icon: Dashboard,
                label: "Dashboard"
            },
            {
                icon: Cart,
                label: "Order Management"
            },
            {
                icon: Brand,
                label: "Brand"
            },
        ]
    },
    {
        title: "PRODUCTS",
        children: [
            {
                icon: AddCircle,
                label: "Add Products"
            },
            {
                icon: Box,
                label: "Product List"
            },
        ]

    },

]
function Sidebar() {
    const [selectedOption, setSelectedOption] = useState("Dashboard")
    return (
        <>
            <aside aria-label="Sidebar" className='lg:w-1/5 2xl:w-1/6'>
                <div className="h-full overflow-y-auto">
                    <div className='mr-2 lg:hidden px-[18px] my-5 xss:flex xss:justify-center' >
                        <List size={20} />
                    </div>
                    <div className="title px-[18px] py-5 md:mb-0 xss:mb-4 flex w-full justify-between items-center xs:hidden lg:flex" >
                        <div className='flex' >
                            <img src={Logo} alt="company-logo" className='mr-2.5' />
                            <p className='font-bold text-3xl leading-6 '>JoBins</p>
                        </div>
                        <img src={LogoIcon} alt='indent-decrease' />
                    </div>
                    {
                        sidebarOptions?.map((option) =>
                            <div key={option.title} className='xss:mt-4 md:mt-0'>
                                <div className="title px-[30px] py-[15px] flex w-full justify-between items-center xs:hidden lg:flex"  >
                                    <p className='text-[11px] text-gray-48 leading-14 font-normal'>{option?.title}</p>
                                </div>
                                <ul className="space-y-2 px-3.5">
                                    {
                                        option?.children?.map((child) =>
                                            <li key={child.label} onClick={() => setSelectedOption(child.label)}>
                                                <a href="#" className={`flex items-center md:px-4 md:py-[9px] xss:mb-4 mb:mb-0  rounded-lg  ${selectedOption === child.label ? "text-dark-16 bg-gray-32" : "text-gray-48"}
                                                hover:text-dark-16 hover:bg-gray-32`}>
                                                    <img src={child.icon} alt='smart-home-dashboard' className='mr-2 ' style={{ fill: "red" }} />
                                                    <p className='font-semibold xs:hidden lg:flex'>{child?.label}</p>
                                                </a>
                                            </li>
                                        )
                                    }
                                </ul>
                            </div>
                        )
                    }
                </div>
            </aside>

        </>
    )
}

export default Sidebar