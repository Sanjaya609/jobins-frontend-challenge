import Bell from '../assets/bell.svg'


function Header() {
    return (
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
    )
}

export default Header