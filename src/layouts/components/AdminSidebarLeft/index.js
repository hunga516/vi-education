import { useContext } from "react";
import { useLocation } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

import { LoadingContext } from "../../../context";
import { RiDraftLine } from "react-icons/ri";
import { RiHome5Line } from "react-icons/ri";
import { RiUser3Line } from "react-icons/ri";
import { RiBookOpenLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function AdminSidebarLeft({ className }) {
    const LoadingContextValue = useContext(LoadingContext);
    const location = useLocation();

    const NAV_ITEMS = [
        {
            icon: RiHome5Line,
            title: 'Trang chủ',
            to: '/admin'
        },
        {
            icon: RiUser3Line,
            title: 'Người dùng',
            to: '/admin/users'
        },
        {
            icon: RiBookOpenLine,
            title: 'Khóa học',
            to: '/admin/courses'
        },
        {
            icon: RiDraftLine,
            title: 'Bài học',
            to: '/admin/lessons'
        },
    ]

    return (
        <aside
            className={`${className} flex flex-col w-[250px] drop-shadow-md box-border`}
            style={{
                height: 'calc(100vh - 61px)',
                // backgroundImage: `url(${images.background})`
            }}
        >
            <div className="flex flex-col justify-between flex-1 pt-5 px-5 pb-4 border-r-[1px] border-gray-400/30">
                <nav className="-mx-3 space-y-3 ">
                    {LoadingContextValue ? (
                        <>
                            <Skeleton width={200} height={24} />
                            <Skeleton width={200} height={24} />
                            <Skeleton width={200} height={24} />
                            <Skeleton width={200} height={24} />
                            <Skeleton width={200} height={24} />
                            <Skeleton width={200} height={24} />
                            <Skeleton width={200} height={24} />
                        </>
                    ) : (
                        <>
                            {NAV_ITEMS.map((item, index) => (
                                <Link
                                    key={index}
                                    to={item.to}
                                    className={`${location.pathname === item.to
                                        ? 'bg-gray-200 before:absolute before:right-[-9px] before:h-8 before:w-[2px] before:bg-bluePrimary'
                                        : ''
                                        } flex items-center px-3 py-2 text-gray-600 transition-color rounded-lg relative `}
                                >
                                    <item.icon size="18px" className="text-gray-600" />
                                    <span className="mx-2 text-sm font-medium">{item.title}</span>
                                </Link>
                            ))}
                        </>
                    )}

                </nav>

                <div>
                    <div className="flex items-center justify-between gap-2">
                        {LoadingContextValue ? (
                            <>
                                <Skeleton width={190} height={24} />
                                <Skeleton width={25} height={24} />
                            </>
                        ) : (
                            <>
                                <h2 className="text-base font-semibold text-gray-800">Khoá học gần đây</h2>
                                <button className="p-0.5 hover:bg-gray-100 duration-200 transition-colors text-gray-500 border rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                </button>
                            </>
                        )}

                    </div>

                    <nav className="mt-4 -mx-3 space-y-3 ">
                        {LoadingContextValue ? (
                            <>
                                <Skeleton width={239} height={24} />
                                <Skeleton width={239} height={24} />
                                <Skeleton width={239} height={24} />
                                <Skeleton width={239} height={24} />
                                <Skeleton width={239} height={24} />
                            </>
                        ) : (
                            <>
                                <button className="flex items-center justify-between w-full px-3 py-2 text-xs font-medium text-gray-600 transition-colors duration-300 transform rounded-lg hover:bg-gray-100  hover:text-gray-700">
                                    <div className="flex items-center gap-x-2 ">
                                        <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                                        <span>Học lập trình Javascript</span>
                                    </div>

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 rtl:rotate-180">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>

                                <button className="flex items-center justify-between w-full px-3 py-2 text-xs font-medium text-gray-700 transition-colors duration-300 transform drop-shadow bg-white rounded-lg">
                                    <div className="flex items-center gap-x-2 ">
                                        <span className="w-2 h-2 rounded-full bg-slate-500"></span>
                                        <span>Backend với NodeJS & Express</span>
                                    </div>

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 rtl:rotate-180">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>

                                <button className="flex items-center justify-between w-full px-3 py-2 text-xs font-medium text-gray-600 transition-colors duration-300 transform rounded-lg hover:bg-gray-100  hover:text-gray-700">
                                    <div className="flex items-center gap-x-2 ">
                                        <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                                        <span>Design Figma UI</span>
                                    </div>

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 rtl:rotate-180">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>
                            </>
                        )}
                    </nav>
                </div>
            </div>
        </aside >
    )
}

export default AdminSidebarLeft