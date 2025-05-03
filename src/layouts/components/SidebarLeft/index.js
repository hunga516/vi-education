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
import { BsCameraVideoFill } from "react-icons/bs";

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
                <div className="flex flex-col gap-2 mt-2">
                    <p className="text-slate-600 text-xs font-semibold leading-3">Chức năng mới</p>
                    <Link
                        to={"/meeting"}
                        className={`
                            ? 'bg-white ring-1 ring-black/10 before:absolute before:right-[-9px] before:h-8 before:w-[2px] before:bg-bluePrimary'
                            : ''} flex items-center px-3 py-2 text-gray-600 bg-gradient-to-tr from-purple-500 to-sky-800 text-white transition-colors rounded-lg relative `}
                    >
                        <BsCameraVideoFill size="18px" className="text-white" />
                        <span className="mx-2 text-sm font-medium">vi meeting</span>
                    </Link>
                </div>
            </div>
        </aside >
    )
}

export default SidebarLeft