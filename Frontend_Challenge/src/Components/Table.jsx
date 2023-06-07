import { CaretDown } from "phosphor-react"


const headerOption = [
    "ID", "Customer", "Date", "Total", "Method", "Status", "Action"
]
const tableRow = [
    {
        id: "#5089",
        customer: "Joseph Wheeler",
        date: "6 April, 2023",
        total: "$2,564",
        method: "CC",
        status: "Pending",
        action: "View Details"
    },
    {
        id: "#5089",
        customer: "Joseph Wheeler",
        date: "6 April, 2023",
        total: "$2,564",
        method: "CC",
        status: "Pending",
        action: "View Details"
    }, {
        id: "#5089",
        customer: "Joseph Wheeler",
        date: "6 April, 2023",
        total: "$2,564",
        method: "CC",
        status: "Pending",
        action: "View Details"
    }, {
        id: "#5089",
        customer: "Joseph Wheeler",
        date: "6 April, 2023",
        total: "$2,564",
        method: "CC",
        status: "Pending",
        action: "View Details"
    }, {
        id: "#5089",
        customer: "Joseph Wheeler",
        date: "6 April, 2023",
        total: "$2,564",
        method: "CC",
        status: "Pending",
        action: "View Details"
    }
]
function Table() {
    return (
        <div className="col-span-12 bg-white ">
            <div className="relative overflow-x-auto overflow-hidden py-2">
                <table className="w-full">
                    <thead className="uppercase border-b px-4">
                        <tr>
                            {headerOption?.map((header, index) =>
                                <th key={index} scope="col" className=" text-left px-5 py-4 text-[13px] text-gray-48 font-medium leading-100">
                                    {header}
                                </th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tableRow?.map((row, index) =>
                                <tr key={index} className='text-sm text-dark-16 border-b font-normal'>
                                    <td className="px-6 py-4">
                                        {row.id}
                                    </td>
                                    <td className="px-6 py-4">
                                        {row.customer}
                                    </td>
                                    <td className="px-6 py-4">
                                        ${row.date}
                                    </td>
                                    <td className="px-6 py-4">
                                        {row.total}
                                    </td>
                                    <td className="px-6 py-4">
                                        {row.method}
                                    </td>
                                    <td className="px-6 py-4 text-yellow-16 font-semibold">
                                        {row.status}
                                    </td>
                                    <td className="px-6 py-4 text-blue-48">
                                        ${row.action}
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
                <nav className="flex items-center justify-between pt-4">
                    <div className="flex leading-100 font-normal text-gray-48 items-center">
                        <div className="mr-2">
                            <p>
                                Showing
                            </p>
                        </div>
                        <div className="mr-2 flex text-dark-16 font-medium border py-2.5 px-5 rounded">
                            <p className="mr-1.5">
                                10
                            </p>
                            <CaretDown />
                        </div>
                        <div>
                            <p>
                                of 50
                            </p>
                        </div>
                    </div>
                    {/* <p className="text-[15px]  flex items-center">
                        <div className="font-semibold text-gray-900 flex px-5 border">10 <CaretDown /></div> of
                        <p className="font-semibold text-gray-900">1000</p>
                    </p> */}
                    <ul className="inline-flex items-center -space-x-px">
                        <li>
                            <a href="#" className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                <span className="sr-only">Previous</span>
                                <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                        </li>
                        <li>
                            <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                        </li>
                        <li>
                            <a href="#" aria-current="page" className="z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                        </li>
                        <li>
                            <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">...</a>
                        </li>
                        <li>
                            <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">100</a>
                        </li>
                        <li>
                            <a href="#" className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                <span className="sr-only">Next</span>
                                <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                            </a>
                        </li>
                    </ul>
                </nav >
            </div >
        </div >
    )
}

export default Table