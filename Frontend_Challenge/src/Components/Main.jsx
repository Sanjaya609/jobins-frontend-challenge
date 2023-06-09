import { ArrowUp, CaretDown, CaretUp, MagnifyingGlass } from 'phosphor-react'
import USA from '../assets/Usa.svg'
import Australia from '../assets/australia.svg'
import Bell from '../assets/bell.svg'
import Brazil from '../assets/brazil.svg'
import Business from '../assets/business.svg'
import Yen from '../assets/yen.svg'
import Infomation from './Infomation'
import Table from './Table'

function Main() {
    return (
        <main className="pl-[26px] pr-7 grow bg-gray-16 pt-2 pb-[30px]">
            <header>
                <div className="flex w-full py-3">

                    <div className="grow py-2">
                        <p className="font-bold text-2xl leading-100">Dashboard</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='mr-6 relative h-[26px] w-[26px] flex items-center justify-center'>
                            <img src={Bell} alt="notification-bell" />
                            <div className='h-[18px] w-[18px] absolute right-0 top-0 bg-red-16 rounded-full -mt-1 -mr-1.5 flex items-center justify-center'>
                                <p className='text-[13px]'>4</p>
                            </div>
                        </div>
                        <div className='h-38 w-38 relative'>
                            <div className='h-full w-full bg-blue-16 rounded-full' />
                            <div className='h-2 w-2 bg-green-16 rounded-full absolute right-0 bottom-0 border-2 ' />
                        </div>
                    </div>
                </div>
            </header>
            <div className="grid grid-cols-12 gap-4">
                <div className="xs:col-span-12 sm:col-span-6 md:col-span-6 xl:col-span-4 ">
                    <div className='flex  p-6 bg-white rounded-2xl w-full h-full' >
                        <div className='grow border-e border-gray-64 md:flex xss:hidden justify-center items-center px-4 '>
                            <img src={Business} alt="business-growth" />
                        </div>
                        <div className='flex flex-col ml-[33px]'>
                            <div className='title mb-[30px]'>
                                <p className='text-lg font-semibold leading-100 text-dark-16'>Total Sales & Costs</p>
                                <p className='text-sm leading-100 text-gray-48 mt-1'>Last 7 days</p>
                            </div>
                            <div className='sales'>
                                <p className='text-5xl text-dark-16 font-bold leading-100 mb-4'>$350K</p>
                                <div className='text-sm leading-100 font-medium text-gray-48'>
                                    <div className='text-green-32 flex items-center'><ArrowUp className='mr-1' />
                                        8.56K
                                        <span className='text-gray-48 ml-2 whitespace-nowrap'>   vs last 7 days</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" xs:col-span-12  sm:col-span-6 md:col-span-6 xl:col-span-4 ">
                    <div className='bg-white rounded-2xl w-full p-6' >
                        <div className=' flex  mb-10 '>
                            <img src={Yen} alt="business-growth" />
                            <div className='ml-[22px]'>
                                <p className='text-lg font-semibold leading-100 text-dark-16'>Total Profit</p>
                                <p className='text-sm leading-100 text-gray-48 '>Last 7 days</p>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <div className='sales'>
                                <p className='text-5xl text-dark-16 font-bold leading-100 mb-4'>50K</p>
                                <div className='text-sm leading-100 font-medium text-gray-48'>
                                    <div className='text-green-32 flex items-center'><ArrowUp className='mr-1' />
                                        12%
                                        <span className='text-gray-48 ml-2 whitespace-nowrap'>   vs last 7 days</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" xs:col-span-12 xl:col-span-4 ">
                    <div className='bg-white rounded-2xl w-full p-6' >
                        <div className="flex w-full items-center mb-5">
                            <div className='flex grow items-center mr-4'>
                                <div className='flex items-center mr-4' >
                                    <div className='mr-4 '>
                                        <img src={USA} alt="USA-flag" className='rounded-full' />
                                    </div>
                                    <div>
                                        <p className='text-[15px] font-semibold text-dark-32'>30K</p>
                                        <p className='whitespace-nowrap text-[13px] font-normal text-gray-48'>United States</p>
                                    </div>
                                </div>
                                <div className="grow bg-blue-32 rounded-full h-2.5 ">
                                    <div className="bg-blue-48 h-2.5 rounded-full" style={{ width: "50%" }}></div>
                                </div>
                            </div>
                            <div className='text-green-32 flex items-center'>
                                <CaretUp className='mr-1' />
                                <span>25.8%</span>
                            </div>
                        </div>
                        <div className="flex w-full items-center mb-5">
                            <div className='flex grow items-center mr-4'>
                                <div className='flex items-center mr-4' >
                                    <div className='mr-4 '>
                                        <img src={Brazil} alt="USA-flag" className='rounded-full' />
                                    </div>
                                    <div>
                                        <p className='text-[15px] font-semibold text-dark-32'>30K</p>
                                        <p className='whitespace-nowrap text-[13px] font-normal text-gray-48'>United States</p>
                                    </div>
                                </div>
                                <div className="grow bg-blue-32 rounded-full h-2.5 ">
                                    <div className="bg-blue-48 h-2.5 rounded-full" style={{ width: "35%" }}></div>
                                </div>
                            </div>
                            <div className='text-red-16 flex items-center'>
                                <CaretDown className='mr-1' />
                                <span>16.2%</span>
                            </div>
                        </div>
                        <div className="flex w-full items-center">
                            <div className='flex grow items-center mr-4'>
                                <div className='flex items-center mr-4' >
                                    <div className='mr-4 '>
                                        <img src={Australia} alt="USA-flag" className='rounded-full' />
                                    </div>
                                    <div>
                                        <p className='text-[15px] font-semibold text-dark-32'>30K</p>
                                        <p className='whitespace-nowrap text-[13px] font-normal text-gray-48'>United States</p>
                                    </div>
                                </div>
                                <div className="grow bg-blue-32 rounded-full h-2.5 ">
                                    <div className="bg-blue-48 h-2.5 rounded-full" style={{ width: "15%" }}></div>
                                </div>
                            </div>
                            <div className='text-red-16 flex items-center'>
                                <CaretDown className='mr-1' />
                                <span>11.9%</span>
                            </div>
                        </div>
                    </div>
                </div>
                <Infomation />
                <div className='col-span-12'>
                    <div className='flex w-full'>
                        <div className='grow'>
                            <div className='flex w-full'>
                                <button type="button" className="text-gray-48 bg-white focus:outline-none font-medium rounded-lg text-sm px-4 py-[11px] flex items-center ">
                                    Status : All
                                    <CaretDown className='ml-1.5' />
                                </button>
                                <div className='flex items-center ml-[14px] bg-white px-4 py-2 rounded-lg'>
                                    <input type="text" className="leading-100 text-sm text-gray-48 text-sm focus:outline-none  block w-full
                                " placeholder='Search...' />
                                    <MagnifyingGlass size={18} className='text-gray-48' />
                                </div>
                            </div>
                        </div>
                        <div>
                            <button type="button" className="text-gray-48 bg-white focus:outline-none font-medium rounded-lg text-sm px-4 py-[11px] flex items-center ">
                                Filter by date range
                                <CaretDown className='ml-1.5' />
                            </button>
                        </div>
                    </div>
                </div>
                <Table />
            </div>
        </main>
    )
}

export default Main