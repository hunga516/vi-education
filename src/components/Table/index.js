import React, { useState } from 'react';

import { LuArchiveRestore } from "react-icons/lu";
import { IoIosOptions } from "react-icons/io";

import Menu from "../Popper/Menu";
import Button from '../Button';

const Table = ({ headers, data, activeButton, handleRestore, courseEditedId, courseActions, handleActionForm }) => {
    const [isSelectAction, setIsSelectAtion] = useState(false)


    return (
        <div className="inline-block min-w-full py-2 align-middle">
            {isSelectAction && (
                <select name='aciton'>
                    <option value=''>--------</option>
                    <option value=''>--------</option>
                </select>
            )}

            <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-slate-50 font-sans">
                        <tr>
                            {headers.map((header, index) => (
                                <th key={index} className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                                    {header}
                                </th>
                            ))}
                            <th className="relative flex justify-center py-3.5 px-4 text-center">
                                <button onClick={() => setIsSelectAtion(!isSelectAction)}>
                                    <IoIosOptions className='text-center' />
                                </button>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {data.map((course, index) => (
                            <tr key={course._id} className={`transition ease-out duration-200 hover:bg-gray-200 hover:duration-75 even:bg-slate-50 ${courseEditedId === course._id ? 'transition ease-out duration-1000 bg-green-200' : ''}`}>
                                <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                    <h2 className="font-medium text-gray-800">{course.courseId}</h2>
                                </td>
                                <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                    <h2 className="font-medium text-gray-800">{course.role}</h2>
                                </td>
                                <td className="px-4 py-4 max-w-36 text-sm font-medium text-ellipsis overflow-hidden whitespace-nowrap">
                                    <div className="py-1 text-sm font-normal rounded-full overflow-hidden text-ellipsis">{course.title}</div>
                                </td>
                                <td className="px-4 py-4 text-sm font-medium text-ellipsis overflow-hidden whitespace-nowrap">
                                    <div className="flex gap-2 items-center py-1 text-sm font-normal rounded-full">
                                        <img src={course.author.photoURL} className="w-4 rounded-full object-cover" alt="avatar" />
                                        {course.author.displayName}
                                    </div>
                                </td>
                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                    <h4 className="text-gray-700 text-center">{course.registrationCount}</h4>
                                </td>
                                {activeButton === 'trash' ? (
                                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                                        <h4 className="text-gray-700 text-left">{course.deletedAt}</h4>
                                    </td>
                                ) : (
                                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                                        <h4 className="text-gray-700 text-left">{course.updatedAt}</h4>
                                    </td>
                                )}
                                {activeButton === 'trash' ? (
                                    <td className=''>
                                        <Button className='text-sm px-[-2] hover:bg-gray-200 hover:duration-200' onClick={() => handleRestore(course)}>
                                            <LuArchiveRestore />
                                            Khôi phục
                                        </Button>
                                    </td>
                                ) : (
                                    <Menu items={courseActions} payload={course}>
                                        <td className="flex justify-center px-4 py-4 text-sm whitespace-nowrap">
                                            <button className="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg hover:bg-gray-100">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                                </svg>
                                            </button>
                                        </td>
                                    </Menu>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div >
        </div >
    );
};

export default Table;