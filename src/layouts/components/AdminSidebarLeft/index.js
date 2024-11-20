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
            descriptio: 'Beta',
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
            </div>
        </aside >
    )
}

export default AdminSidebarLeft