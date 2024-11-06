
import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

import { IoMdTrendingUp } from "react-icons/io";
import { LoadingContext } from "../../../context";
import { MdOndemandVideo } from "react-icons/md";
import { MdOutlineForum } from "react-icons/md";
import { PiUsers } from "react-icons/pi";
import { RiHome5Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import images from "../../../assets/images";
import MessageModal from "../../../components/Modal/Message/MessageModal";

function SidebarRight({ className }) {
    const LoadingContextValue = useContext(LoadingContext);
    const location = useLocation();
    const [isMessageModal, setIsMessageModal] = useState(false)
    const [room_id, setRoom_id] = useState()

    const toggleIsMessageModal = () => {
        setRoom_id('6727c323453fe9b189293a20')
        setIsMessageModal(!isMessageModal)
    }

    return (
        <aside
            className={`${className} flex flex-col w-[250px] drop-shadow-md box-border`}
            style={{
                height: 'calc(100vh - 61px)',
                // backgroundImage: `url(${images.background})`
            }}
        >
            <div className="w-full h-[100vh]">
                <div className="px-2 py-2 mt-4 bg-white rounded-md drop-shadow-md">
                    <div className="flex justify-between items-center">
                        <p className="text-slate-800 text-sm font-semibold tracking-wide">Đang hoạt động</p>
                        <p className="text-slate-500 text-xs">30 thành viên</p>
                    </div>

                    <div className="flex flex-col gap-1 mt-2 h-[350px] overflow-y-auto">
                        <div
                            onClick={toggleIsMessageModal}
                            className="flex items-center justify-between bg-slate-200/60 rounded-lg px-2 py-2">
                            <div className="flex gap-2 items-center cursor-pointer">
                                <div className="relative">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwVBCGAZHx-jTIwF4P76fQPWmYpQyctBIOjA&s" alt="" className="w-8 h-8 rounded-full" />
                                    <div className="absolute w-2 h-2 right-0 bg-green-500 rounded-full bottom-0 ring-2 ring-white"></div>
                                </div>
                                <p className="text-slate-800 text-sm leading-4 text-nowrap text-ellipsis overflow-hidden w-32">Những đứa trẻ thích Đà Lạt</p>
                            </div>
                            <button className="">
                                +
                            </button>
                        </div>
                        <div className="flex items-center justify-between bg-slate-200/60 rounded-lg px-2 py-2">
                            <div className="flex gap-2 items-center cursor-pointer">
                                <div className="relative">
                                    <img src={images.sony} alt="" className="w-8 h-8 rounded-full" />
                                    <div className="absolute w-2 h-2 right-0 bg-green-500 rounded-full bottom-0 ring-2 ring-white"></div>
                                </div >
                                <p className="text-slate-800 text-sm leading-4">Le Ngoc Loc</p>
                            </div >
                        </div >
                        <div className="flex items-center justify-between bg-slate-200/60 rounded-lg px-2 py-2">
                            <div className="flex gap-2 items-center cursor-pointer">
                                <div className="relative">
                                    <img src={images.sony} alt="" className="w-8 h-8 rounded-full" />
                                    <div className="absolute w-2 h-2 right-0 bg-green-500 rounded-full bottom-0 ring-2 ring-white"></div>
                                </div>
                                <p className="text-slate-800 text-sm leading-4">Le Ngoc Loc</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between bg-slate-200/60 rounded-lg px-2 py-2">
                            <div className="flex gap-2 items-center cursor-pointer">
                                <div className="relative">
                                    <img src={images.sony} alt="" className="w-8 h-8 rounded-full" />
                                    <div className="absolute w-2 h-2 right-0 bg-green-500 rounded-full bottom-0 ring-2 ring-white"></div>
                                </div>
                                <p className="text-slate-800 text-sm leading-4">Le Ngoc Loc</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between bg-slate-200/60 rounded-lg px-2 py-2">
                            <div className="flex gap-2 items-center cursor-pointer">
                                <div className="relative">
                                    <img src={images.sony} alt="" className="w-8 h-8 rounded-full" />
                                    <div className="absolute w-2 h-2 right-0 bg-green-500 rounded-full bottom-0 ring-2 ring-white"></div>
                                </div>
                                <p className="text-slate-800 text-sm leading-4">Le Ngoc Loc</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between bg-slate-200/60 rounded-lg px-2 py-2">
                            <div className="flex gap-2 items-center cursor-pointer">
                                <div className="relative">
                                    <img src={images.sony} alt="" className="w-8 h-8 rounded-full" />
                                    <div className="absolute w-2 h-2 right-0 bg-green-500 rounded-full bottom-0 ring-2 ring-white"></div>
                                </div>
                                <p className="text-slate-800 text-sm leading-4">Le Ngoc Loc</p>
                            </div >
                        </div >
                        <div className="flex items-center justify-between bg-slate-200/60 rounded-lg px-2 py-2">
                            <div className="flex gap-2 items-center cursor-pointer">
                                <div className="relative">
                                    <img src={images.sony} alt="" className="w-8 h-8 rounded-full" />
                                    <div className="absolute w-2 h-2 right-0 bg-green-500 rounded-full bottom-0 ring-2 ring-white"></div>
                                </div>
                                <p className="text-slate-800 text-sm leading-4">Le Ngoc Loc</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between bg-slate-200/60 rounded-lg px-2 py-2">
                            <div className="flex gap-2 items-center cursor-pointer">
                                <div className="relative">
                                    <img src={images.sony} alt="" className="w-8 h-8 rounded-full" />
                                    <div className="absolute w-2 h-2 right-0 bg-green-500 rounded-full bottom-0 ring-2 ring-white"></div>
                                </div>
                                <p className="text-slate-800 text-sm leading-4">Le Ngoc Loc</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between bg-slate-200/60 rounded-lg px-2 py-2">
                            <div className="flex gap-2 items-center cursor-pointer">
                                <div className="relative">
                                    <img src={images.sony} alt="" className="w-8 h-8 rounded-full" />
                                    <div className="absolute w-2 h-2 right-0 bg-green-500 rounded-full bottom-0 ring-2 ring-white"></div>
                                </div>
                                <p className="text-slate-800 text-sm leading-4">Le Ngoc Loc</p>
                            </div>
                        </div>
                    </div >
                </div >

                <div className="p-2 mt-2 h-full bg-white rounded-md drop-shadow-md">
                    <div className="flex justify-between items-center">
                        <p className="text-slate-800 text-sm font-semibold tracking-wide">Nhóm chát cộng đồng</p>
                        <p className="text-slate-500 text-xs">4 nhóm</p>
                    </div>


                    <div className="flex flex-col gap-1 mt-2 h-[300px] overflow-y-auto">
                        <div
                            onClick={toggleIsMessageModal}
                            className="flex items-center justify-between bg-slate-200/60 rounded-lg px-2 py-2">
                            <div className="flex gap-2 items-center cursor-pointer">
                                <div className="relative">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwVBCGAZHx-jTIwF4P76fQPWmYpQyctBIOjA&s" alt="" className="w-8 h-8 rounded-full" />
                                    <div className="absolute w-2 h-2 right-0 bg-green-500 rounded-full bottom-0 ring-2 ring-white"></div>
                                </div>
                                <p className="text-slate-800 text-sm leading-4 text-nowrap text-ellipsis overflow-hidden w-32">Những đứa trẻ thích Đà Lạt</p>
                            </div>
                            <button className="">
                                +
                            </button>
                        </div>
                        <div className="flex items-center justify-between bg-slate-200/60 rounded-lg px-2 py-2">
                            <div className="flex gap-2 items-center cursor-pointer">
                                <div className="relative">
                                    <img src={images.sony} alt="" className="w-8 h-8 rounded-full" />
                                    <div className="absolute w-2 h-2 right-0 bg-green-500 rounded-full bottom-0 ring-2 ring-white"></div>
                                </div>
                                <p className="text-slate-800 text-sm leading-4">Le Ngoc Loc</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between bg-slate-200/60 rounded-lg px-2 py-2">
                            <div className="flex gap-2 items-center cursor-pointer">
                                <div className="relative">
                                    <img src={images.sony} alt="" className="w-8 h-8 rounded-full" />
                                    <div className="absolute w-2 h-2 right-0 bg-green-500 rounded-full bottom-0 ring-2 ring-white"></div>
                                </div>
                                <p className="text-slate-800 text-sm leading-4">Le Ngoc Loc</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between bg-slate-200/60 rounded-lg px-2 py-2">
                            <div className="flex gap-2 items-center cursor-pointer">
                                <div className="relative">
                                    <img src={images.sony} alt="" className="w-8 h-8 rounded-full" />
                                    <div className="absolute w-2 h-2 right-0 bg-green-500 rounded-full bottom-0 ring-2 ring-white"></div>
                                </div>
                                <p className="text-slate-800 text-sm leading-4">Le Ngoc Loc</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between bg-slate-200/60 rounded-lg px-2 py-2">
                            <div className="flex gap-2 items-center cursor-pointer">
                                <div className="relative">
                                    <img src={images.sony} alt="" className="w-8 h-8 rounded-full" />
                                    <div className="absolute w-2 h-2 right-0 bg-green-500 rounded-full bottom-0 ring-2 ring-white"></div>
                                </div>
                                <p className="text-slate-800 text-sm leading-4">Le Ngoc Loc</p>
                            </div >
                        </div >
                        <div className="flex items-center justify-between bg-slate-200/60 rounded-lg px-2 py-2">
                            <div className="flex gap-2 items-center cursor-pointer">
                                <div className="relative">
                                    <img src={images.sony} alt="" className="w-8 h-8 rounded-full" />
                                    <div className="absolute w-2 h-2 right-0 bg-green-500 rounded-full bottom-0 ring-2 ring-white"></div>
                                </div>
                                <p className="text-slate-800 text-sm leading-4">Le Ngoc Loc</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between bg-slate-200/60 rounded-lg px-2 py-2">
                            <div className="flex gap-2 items-center cursor-pointer">
                                <div className="relative">
                                    <img src={images.sony} alt="" className="w-8 h-8 rounded-full" />
                                    <div className="absolute w-2 h-2 right-0 bg-green-500 rounded-full bottom-0 ring-2 ring-white"></div>
                                </div>
                                <p className="text-slate-800 text-sm leading-4">Le Ngoc Loc</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between bg-slate-200/60 rounded-lg px-2 py-2">
                            <div className="flex gap-2 items-center cursor-pointer">
                                <div className="relative">
                                    <img src={images.sony} alt="" className="w-8 h-8 rounded-full" />
                                    <div className="absolute w-2 h-2 right-0 bg-green-500 rounded-full bottom-0 ring-2 ring-white"></div>
                                </div>
                                <p className="text-slate-800 text-sm leading-4">Le Ngoc Loc</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between bg-slate-200/60 rounded-lg px-2 py-2">
                            <div className="flex gap-2 items-center cursor-pointer">
                                <div className="relative">
                                    <img src={images.sony} alt="" className="w-8 h-8 rounded-full" />
                                    <div className="absolute w-2 h-2 right-0 bg-green-500 rounded-full bottom-0 ring-2 ring-white"></div>
                                </div>
                                <p className="text-slate-800 text-sm leading-4">Le Ngoc Loc</p>
                            </div>
                        </div>
                    </div >
                </div >
            </div >
            {isMessageModal && (
                <MessageModal room_id={room_id} toggleIsMessageModal={toggleIsMessageModal} />
            )}
        </aside >
    )
}

export default SidebarRight;