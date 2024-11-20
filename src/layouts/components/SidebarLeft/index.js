import { useContext } from "react";
import { useLocation } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

import { IoMdTrendingUp } from "react-icons/io";
import { LoadingContext } from "../../../context";
import { MdOndemandVideo } from "react-icons/md";
import { MdOutlineForum } from "react-icons/md";
import { PiUsers } from "react-icons/pi";
import { RiHome5Line } from "react-icons/ri";
import { RiDashboardFill } from "react-icons/ri";

import { CgFeed } from "react-icons/cg";
import { Link } from "react-router-dom";
import images from "../../../assets/images";

function SidebarLeft({ className }) {
    const LoadingContextValue = useContext(LoadingContext);
    const location = useLocation();

    const NAV_ITEMS = [
        {
            icon: RiHome5Line,
            title: 'Trang chủ',
            to: '/'
        },
        {
            icon: CgFeed,
            title: 'Bảng tin',
            to: '/feed'
        },
        {
            icon: MdOndemandVideo,
            title: 'Reels',
            to: '/reels'
        },
        {
            icon: MdOutlineForum,
            title: 'Diễn đàn',
            description: "Beta",
            // to: '/forums'
        },
        {
            icon: PiUsers,
            title: 'Bạn bè',
            description: "Beta",
            // to: '/friends'
        },
        {
            icon: IoMdTrendingUp,
            title: 'Thịnh hành',
            description: "Beta",
            // to: '/trending'
        },
        {
            icon: RiDashboardFill,
            title: 'Trang giảng viên',
            to: '/admin/lessons'
        }
    ]

    return (
        <aside
            className={`${className} flex flex-col w-40 md:w-64 drop-shadow-md box-border`}
            style={{
                height: 'calc(100vh - 61px)',
                // backgroundImage: `url(${images.background})`
            }}
        >
            <div className="md:flex md:flex-col md:justify-between flex-1 pt-5 px-5 pb-4">
                <nav className="-mx-3 space-y-3 ">
                    {LoadingContextValue ? (
                        <div className="flex flex-col gap-1 mx-auto">
                            <Skeleton width={230} height={36} />
                            <Skeleton width={230} height={36} />
                            <Skeleton width={230} height={36} />
                            <Skeleton width={230} height={36} />
                            <Skeleton width={230} height={36} />
                            <Skeleton width={230} height={36} />
                            <Skeleton width={230} height={36} />
                        </div>
                    ) : (
                        <>
                            {NAV_ITEMS.map((item, index) => (
                                <Link
                                    key={index}
                                    to={item.to}
                                    className={`${location.pathname === item.to
                                        ? 'bg-white ring-1 ring-black/10 before:absolute before:right-[-9px] before:h-8 before:w-[2px] before:bg-bluePrimary'
                                        : ''} flex items-center px-3 py-2 text-gray-600 transition-colors rounded-lg relative`}
                                >
                                    <item.icon size="18px" className="text-gray-600" />
                                    <span className="mx-2 text-sm font-medium">{item.title}</span>
                                    {item.description && (
                                        <p className="text-[10px] text-red-400 bg-red-200 ring-1 ring-red-400 px-1 rounded-lg">{item?.description}</p>
                                    )}
                                </Link>
                            ))}
                        </>
                    )}

                </nav>
                {/* <div className="mt-12 rounded-md drop-shadow-md w-full">
                    <img src={images.sony} alt="" className="w-full h-32 rounded-lg object-cover" />
                    <p className="text-xs mt-2 p-2 rounded-md text-white bg-gradient-to-tr from-blue-600 to-pink-600">Đăng ký sớm để nhận nhiều ưu đãi</p>
                </div> */}

                <div className="hidden md:block">
                    <div className="flex items-center justify-between gap-2">
                        <>
                            <h2 className="text-base font-semibold text-gray-800">Khoá học gần đây</h2>
                            <button className="p-0.5 hover:bg-gray-100 duration-200 transition-colors text-gray-500 border rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                            </button>
                        </>
                    </div>

                    <nav className="mt-4 -mx-3 space-y-3 ">
                        {LoadingContextValue ? (
                            <div className="flex flex-col gap-1 mx-auto">
                                <Skeleton width={230} height={36} />
                                <Skeleton width={230} height={36} />
                                <Skeleton width={230} height={36} />
                                <Skeleton width={230} height={36} />
                                <Skeleton width={230} height={36} />
                            </div>
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

export default SidebarLeft