import Logo from '../assets/logo.svg'
import LogoIcon from '../assets/indent-decrease.svg'
import Dashboard from '../assets/smart-home.svg'
import Cart from '../assets/shopping-cart.svg'
import Brand from '../assets/star.svg'
import AddCircle from '../assets/circle-plus.svg'
import Box from '../assets/box.svg'
import { useState } from 'react'


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
            <aside aria-label="Sidebar">
                <div className="h-full overflow-y-auto">
                    <div className="title px-[18px] py-5 flex w-full justify-between items-center" >
                        <div className='flex'><img src={Logo} alt="company-logo" className='mr-2.5' />
                            <p className='font-bold text-3xl leading-6 '>JoBins</p>
                        </div>
                        <img src={LogoIcon} alt='indent-decrease' />
                    </div>
                    {
                        sidebarOptions?.map((option) =>
                            <div key={option.title}>
                                <div className="title px-[30px] py-[15px] flex w-full justify-between items-center" >
                                    <p className='text-[11px] text-gray-48 leading-14 font-normal'>{option?.title}</p>
                                </div>
                                <ul className="space-y-2 px-3.5">
                                    {
                                        option?.children?.map((child) =>
                                            <li key={child.label} onClick={() => setSelectedOption(child.label)}>
                                                <a href="#" className={`flex items-center px-4 py-[9px]  rounded-lg  ${selectedOption === child.label ? "text-dark-16 bg-gray-32" : "text-gray-48"}
                                                hover:text-dark-16 hover:bg-gray-32`}>
                                                    <img src={child.icon} alt='smart-home-dashboard' className='mr-2' style={{ fill: "red" }} />
                                                    <p className='font-semibold'>{child?.label}</p>
                                                </a>
                                            </li>
                                        )
                                    }
                                </ul>
                            </div>
                        )
                    }
                    {/* <div className="title px-[30px] py-[15px] flex w-full justify-between items-center" >
                        <p className='text-[11px] text-gray-48 leading-14 font-normal'>MAIN MENU</p>
                    </div>
                    <ul className="space-y-2 px-3.5">
                        <li>
                            <a href="#" className="flex items-center px-4 py-[9px] text-dark-16 rounded-lg bg-gray-32">
                                <img src={Dashboard} alt='smart-home-dashboard' className='mr-2' />
                                <p className='font-semibold'>Dashboard</p>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center px-4 py-[9px] text-gray-48 rounded-lg hover:bg-gray-32">
                                <img src={Cart} alt='smart-home-dashboard' className='mr-2' />
                                <p className='font-normal'>Order Management</p>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center px-4 py-[9px] text-gray-48 rounded-lg hover:bg-gray-32">
                                <img src={Brand} alt='smart-home-dashboard' className='mr-2' />
                                <p className='font-normal'>Brand</p>
                            </a>
                        </li>
                    </ul>
                    <div className="title px-[30px] pt-[30px] pb-[15px] flex w-full justify-between items-center" >
                        <p className='text-[11px] text-gray-48 leading-14 font-normal'>PRODUCTS</p>
                    </div>
                    <ul className="space-y-2 px-3.5">
                        <li>
                            <a href="#" className="flex items-center px-4 py-[9px] text-gray-48 rounded-lg hover:bg-gray-32">
                                <img src={AddCircle} alt='smart-home-dashboard' className='mr-2' />
                                <p className='font-normal'>Add Products</p>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center px-4 py-[9px] text-gray-48 rounded-lg hover:bg-gray-32">
                                <img src={Box} alt='smart-home-dashboard' className='mr-2' />
                                <p className='font-normal'>Product List</p>
                            </a>
                        </li>
                    </ul> */}
                </div>
            </aside>

        </>
    )
}

export default Sidebar