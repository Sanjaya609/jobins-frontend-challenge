import { CaretDown, CaretLeft, CaretRight } from "phosphor-react"
import { useState } from "react"
import { paginationDescStyle } from "../ClassNames/classNames"


const headerOption = [
    "ID", "Customer", "Date", "Total", "Method", "Status", "Action"
]

const pages = [1, 2, 3, 4, 5]
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
    const [selectedPage, setSelectedPage] = useState(1)

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
                <footer className="flex items-center justify-between px-6 py-[26px]">
                    <div className="flex leading-100 font-normal text-gray-48 items-center">
                        <div className="mr-2">
                            <p className={paginationDescStyle}>
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
                            <p className={paginationDescStyle}>
                                of 50
                            </p>
                        </div>
                    </div>
                    <ul className="inline-flex items-center">
                        <li className="mr-0.5 p-1.5 bg-gray-80 rounded-lg" >
                            <p href="#" className="block  text-gray-48  ">
                                <span className="sr-only">Previous</span>
                                <CaretLeft size={16} />
                            </p>
                        </li>
                        {
                            pages?.map((page, index) =>
                                <li key={index}
                                    className={`mr-0.5 py-1.5 px-3  rounded-lg ${selectedPage === page ? "bg-blue-48 text-white" : "bg-gray-80 text-gray-48"}`}
                                    onClick={() => setSelectedPage(page)}>
                                    <p href="#" className="   text-[13px] ">{page}</p>
                                </li>

                            )
                        }
                        <li className="p-1.5 bg-gray-80 rounded-lg">
                            <p href="#" className="block  text-gray-48 ">
                                <span className="sr-only">Next</span>
                                <CaretRight size={16} />
                            </p>
                        </li>
                    </ul>
                </footer >
            </div >
        </div >
    )
}

export default Table