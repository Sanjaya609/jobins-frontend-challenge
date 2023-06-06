import Bell from '../assets/bell.svg'
import Business from '../assets/business.svg'
import Yen from '../assets/yen.svg'
import USA from '../assets/Usa.svg'
import { CaretUp, ArrowUp, CaretDown } from 'phosphor-react'
import Brazil from '../assets/brazil.svg'
import Australia from '../assets/australia.svg'
import Infomation from './Infomation'

function Main() {
    return (
        <main className="pl-[26px] pr-7 grow h-screen bg-gray-16 pt-2 pb-[30px]">
            <div>
                <div className="flex w-100 py-3">
                    <div className="grow py-2">
                        <p className="font-bold text-2xl leading-22">Dashboard</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='mr-6 relative'>
                            <img src={Bell} alt="notification-bell" />
                            <div className='h-[18px] w-[18px] absolute right-0 top-0 flex items-center justify-center'>
                                <p className='text-[13px]'>4</p>
                            </div>
                        </div>
                        <div className='h-38 w-38 relative'>
                            <div className='h-full w-full bg-blue-16 rounded-full' />
                            <div className='h-2 w-2 bg-green-16 rounded-full absolute right-0 bottom-0 border-2 ' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-4 ">
                    <div className='flex pb-7 pt-5 pr-[52px] pl-[43px] bg-white rounded-2xl w-full'>
                        <div className=' border-e border-gray-64 pr-[39px] pt-[45px] pb-[33px] '>
                            <img src={Business} alt="business-growth" />
                        </div>
                        <div className='flex flex-col ml-[33px]'>
                            <div className='title mb-[30px]'>
                                <p className='text-lg font-semibold leading-26 text-dark-16'>Total Sales & Costs</p>
                                <p className='text-sm leading-5 text-gray-48 mt-1'>Last 7 days</p>
                            </div>
                            <div className='sales'>
                                <p className='text-5xl text-dark-16 font-bold leading-8 mb-4'>$350K</p>
                                <div className='text-sm leading-5 font-medium text-gray-48'><span className='text-green-32 '><ArrowUp />8.56K</span> vs last 7 days</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-3">
                    <div className='bg-white rounded-2xl w-full pt-[18px] pl-6 pb-6' >
                        <div className=' flex  mb-10 '>
                            <img src={Yen} alt="business-growth" />
                            <div className='ml-[22px]'>
                                <p className='text-lg font-semibold leading-26 text-dark-16'>Total Profit</p>
                                <p className='text-sm leading-5 text-gray-48 '>Last 7 days</p>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <div className='sales'>
                                <p className='text-5xl text-dark-16 font-bold leading-8 mb-4'>50K</p>
                                <div className='text-sm leading-5 font-medium text-gray-48'><span className='text-green-32 '> <ArrowUp />12%</span> vs last 7 days</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-5">
                    <div className='bg-white rounded-2xl w-full pt-6 pl-6 pb-6 px-[26px]' >
                        <div className="flex w-full items-center mb-[18px]">
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
                        <div className="flex w-full items-center mb-[18px]">
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
            </div>
        </main>
    )
}

export default Main