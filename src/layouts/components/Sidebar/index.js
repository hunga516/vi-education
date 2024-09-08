import { useContext } from "react";
import Skeleton from "react-loading-skeleton";

import { IoMdTrendingUp } from "react-icons/io";
import { LoadingContext } from "../../../context";
import { MdOndemandVideo } from "react-icons/md";
import { MdOutlineForum } from "react-icons/md";
import { PiUsers } from "react-icons/pi";
import { RiHome5Line } from "react-icons/ri";
import { Link } from "react-router-dom";

function Sidebar() {
    const LoadingContextValue = useContext(LoadingContext)

    const NAV_ITEMS = [
        {
            icon: RiHome5Line,
            title: 'Trang chủ',
            to: '/home'
        },
        {
            icon: MdOndemandVideo,
            title: 'Reels',
            to: '/reels'
        },
        {
            icon: MdOutlineForum,
            title: 'Diễn đàn',
            to: '/forums'
        },
        {
            icon: PiUsers,
            title: 'Bạn bè',
            to: '/friends'
        },
        {
            icon: IoMdTrendingUp,
            title: 'Thịnh hành',
            to: '/trending'
        }
    ]

    return (
        // <div className="sidebar-wrapper fixed mt-[60px] w-[232px]">
        //     <ul className="nav flex flex-col text-[19px] leading-[45px] py-[10px] font-sans font-semibold tracking-wide border-b-[1px] border-[#1618231F]">
        //         {NAV_ITEMS.map((item, index) => (
        //             <li key={index} className="flex items-center gap-[16px]">
        //                 {LoadingContextValue ? (
        //                     <>
        //                         <Skeleton width={24} height={24} /> <Skeleton width={200} height={24} />
        //                     </>
        //                 ) : (
        //                     <>
        //                         <item.icon size="24px" /> {item.title}
        //                     </>
        //                 )}
        //             </li>
        //         ))}
        //     </ul>
        //     {!LoadingContextValue && (
        //         <>
        //             <div className="require-login py-[20px] border-b-[1px] border-[#1618231F]">
        //                 <div className="text-[#8a8b90] font-light text-[16px] tracking-wide mb-[10px]">Đăng nhập để follow các tác giả, thích video và xem bình luận.</div>
        //                 <Button className="w-full" size="large" type={"outline-primary"}>
        //                     Đăng nhập
        //                 </Button>
        //             </div>
        //             <div className="container relative mt-[20px]">
        //                 <img src="https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/webapp/main/webapp-desktop/8152caf0c8e8bc67ae0d.png" className="h-[52px] w-full"></img>
        //                 <h4 className="absolute w-[141px] left-[56px] top-1/2 transfrom -translate-y-1/2 text-[#fff5c9] text-[13px] font-semibold leading-[16px] text-left tracking-[0.035em]">Tạo hiệu ứng Tiktok, nhận phần thưởng.</h4>
        //             </div>
        //         </>
        //     )}
        // </div>
        <aside class="fixed flex flex-col w-[256px] px-5 pb-4 bg-white border-r rtl:border-r-0 rtl:border box-border" style={{ height: 'calc(100vh - 60px)' }}>
            <div class="flex flex-col justify-between flex-1 mt-[20px]">
                <nav class="-mx-3 space-y-3 ">
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
                                <Link to={item.to} class="flex items-center px-3 py-2 text-gray-600 transition-color rounded-lg dark:text-gray-300 hover:bg-gray-100  hover:text-gray-700" href="#">
                                    <item.icon size="18px" className="text-gray-600" />

                                    <span class="mx-2 text-sm font-medium">{item.title}</span>
                                </Link>
                            ))}
                        </>
                    )}

                </nav>

                <div>
                    <div class="flex items-center justify-between gap-2">
                        {LoadingContextValue ? (
                            <>
                                <Skeleton width={190} height={24} />
                                <Skeleton width={25} height={24} />
                            </>
                        ) : (
                            <>
                                <h2 class="text-base font-semibold text-gray-800">Khoá học gần đây</h2>
                                <button class="p-0.5 hover:bg-gray-100 duration-200 transition-colors text-gray-500 border rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                </button>
                            </>
                        )}

                    </div>

                    <nav class="mt-4 -mx-3 space-y-3 ">
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
                                <button class="flex items-center justify-between w-full px-3 py-2 text-xs font-medium text-gray-600 transition-colors duration-300 transform rounded-lg hover:bg-gray-100  hover:text-gray-700">
                                    <div class="flex items-center gap-x-2 ">
                                        <span class="w-2 h-2 bg-pink-500 rounded-full"></span>
                                        <span>Học lập trình Javascript</span>
                                    </div>

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 rtl:rotate-180">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>

                                <button class="flex items-center justify-between w-full px-3 py-2 text-xs font-medium text-gray-700 transition-colors duration-300 transform bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200">
                                    <div class="flex items-center gap-x-2 ">
                                        <span class="w-2 h-2 rounded-full bg-slate-500"></span>
                                        <span>Backend với NodeJS & Express</span>
                                    </div>

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 rtl:rotate-180">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>

                                <button class="flex items-center justify-between w-full px-3 py-2 text-xs font-medium text-gray-600 transition-colors duration-300 transform rounded-lg hover:bg-gray-100  hover:text-gray-700">
                                    <div class="flex items-center gap-x-2 ">
                                        <span class="w-2 h-2 bg-indigo-500 rounded-full"></span>
                                        <span>Design Figma UI</span>
                                    </div>

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 rtl:rotate-180">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>
                            </>
                        )}
                    </nav>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar