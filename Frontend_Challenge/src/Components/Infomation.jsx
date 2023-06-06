
function Infomation() {
    return (
        <div className="col-span-12 mt-4">
            <div className="bg-white rounded-2xl w-full grid grid-cols-12 pt-6 px-10">
                <div className="col-span-4 flex items-center h-full border-r border-gray-64 pt-[33px] pb-[38px]">
                    <div className="w-[72px] h-[72px] bg-purple-16 rounded-full border-[7px] border-purple-32 mr-4" />
                    <div>
                        <p className="text-lg text-dark-16 font-semibold leading-22">Robert Fox</p>
                        <p className="text-[15px] text-gray-48 font-normal leading-22">robert@gmail.com</p>
                    </div>
                </div>
                <div className="col-span-4 px-6 flex h-full border-r border-gray-64 flex-col pb-[35px]">
                    <div>
                        <p className="font-medium text-[13px] text-gray-48">PERSONAL INFORMATION</p>
                    </div>
                    <div className="flex mt-4 text-dark-16 " >
                        <div className="mr-4 font-normal">
                            <p className="mb-3">Contact Number</p>
                            <p className="mb-3"> Date of Birth</p>
                            <p>Member Since</p>
                        </div>
                        <div className="font-semibold">
                            <p className="mb-3">(201) 555-0124</p>
                            <p className="mb-3">1 Jan, 1985</p>
                            <p>3 March, 2023</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-4 px-6 flex h-full flex-col pb-[35px]">
                    <div>
                        <p className="font-medium text-[13px] text-gray-48">SHIPPING ADDRESS</p>
                    </div>
                    <div className="mt-4">
                        <p className="font-normal text-[13px] text-dark-16 leading-4">3517 W. Gray St. Utica, Pennsylvania 57867</p>
                    </div>
                    <div className="mt-[26px]  grid grid-cols-12 ">
                        <div className="col-span-4 mr-6">
                            <p className="text-dark-16 font-bold text-2xl">150</p>
                            <p className="text-[13px] text-gray-48 font-medium leading-18">Total Order</p>
                        </div>
                        <div className="col-span-4 mr-6">
                            <p className="text-dark-16 font-bold text-2xl">140</p>
                            <p className="text-[13px] text-gray-48 font-medium leading-18">Completed</p>
                        </div>
                        <div className="col-span-4">
                            <p className="text-dark-16 font-bold text-2xl">10</p>
                            <p className="text-[13px] text-gray-48 font-medium leading-18">Canceled</p>
                        </div>
                    </div>
                </div>
                <div className=" col-span-12 mt-1">
                    <div className="text-sm font-medium text-center text-gray-500 px-8">
                        <ul className="flex flex-wrap -mb-px">
                            <li className="mr-2">
                                <a href="#" className="inline-block py-4 px-6 text-blue-600 border-b-2 border-blue-600 ">All Orders</a>
                            </li>
                            <li className="mr-2">
                                <a href="#" className="inline-block p-4 text-gray-48 " aria-current="page">Completed</a>
                            </li>
                            <li className="mr-2">
                                <a href="#" className="inline-block p-4 text-gray-48">Canceled</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Infomation