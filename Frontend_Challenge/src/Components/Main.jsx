import Bell from '../assets/bell.svg'
function Main() {
    return (
        <main className="pl-[26px] pr-7 grow h-screen bg-gray-16 pt-2 pb-[30px]">
            <div>
                <div className="flex w-100 mb-1 py-3">
                    <div className="grow py-2">
                        <p className="">Dashboard</p>
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
        </main>
    )
}

export default Main