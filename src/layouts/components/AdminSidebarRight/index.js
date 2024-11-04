import { useContext, useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

import { AuthContext, LoadingContext } from "../../../context";
import axios from "axios";
import { io } from "socket.io-client";
import { useLocation, useParams } from "react-router-dom";

function AdminSidebarRight({ className }) {
    const [history, setHistory] = useState([])
    const [usersOnlineState, setUsersOnlineState] = useState()
    const { userId } = useContext(AuthContext)
    const socket = io(`${process.env.REACT_APP_API_URL}`, {
        reconnectionAttempts: 5, // Số lần thử kết nối lại
        timeout: 10000, // Thời gian timeout
        transports: ['polling'], // Sử dụng WebSocket nếu có thể để giảm thiểu lỗi kết nối
    });

    const location = useLocation()
    const params = location.pathname.split("/").pop()

    useEffect(() => {
        const getAllHistory = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/${params}/history?limit=3`)
                setHistory(response.data)
            } catch (error) {
                console.log(error);
            }
        }

        const getAllUsersOnline = async (userIds) => {
            try {
                const response = await axios.post(`${process.env.REACT_APP_API_URL}/users`, { userIds })
                setUsersOnlineState(response.data)
            } catch (error) {
                console.log(error);
            }
        }

        // const handleBeforeUnload = async () => {
        //     await setUserOffline();
        // };
        // window.addEventListener('beforeunload', handleBeforeUnload);


        let room;
        const currentPath = location.pathname
        room = currentPath
        socket.emit('user:join-room', { room, userId })

        socket.on('user:update-online', usersOnlineIds => {
            console.log(usersOnlineIds);
            getAllUsersOnline(usersOnlineIds)
        })

        socket.on('historycourse:update', newHistoryCourse => {
            setHistory(prevHistory => [newHistoryCourse, ...prevHistory.slice(0, 2)]);
        })


        getAllHistory()
        return () => {
            // window.removeEventListener('beforeunload', handleBeforeUnload);
            socket.off('user:join-room')
            socket.off('user:update-online')
            socket.off('historycourse:update')
            socket.emit('user:left-room', { room, userId })
            socket.disconnect();
        };
    }, [userId, location.pathname])

    return (
        <aside
            className={`${className} flex flex-col w-[250px] box-border`}
            style={{
                height: 'calc(100vh - 61px)',
            }}
        >
            <div className="flex flex-col justify-between flex-1 pt-5 pb-4 pr-3 border-r-[1px] border-gray-400/30">
                <div className="activity-history flex flex-col gap-1 w-full h-96 drop-shadow-md">
                    {history ? (
                        history.map((item, index) => (
                            <div key={index} className="bg-white py-4 px-4 rounded-md animate-slideInFormRight">
                                <div className="flex justify-between items-center">
                                    <div className="flex gap-2 items-center">
                                        <img src={item.updatedBy?.photoURL} className="w-6 h-6 rounded-full" />
                                        <p className="text-sm text-slate-700 font-semibold">{item.updatedBy?.displayName}</p>
                                    </div>
                                    <p className="text-xs text-slate-500 tracking-wide text-nowrap">{item.createdAt}</p>
                                </div>
                                <div className="mt-2 text-sm text-slate-700 leading-5 h-14">
                                    {item.updatedContent}
                                </div>
                                <div className="flex items-center justify-between mt-2">
                                    <p className="text-xs text-slate-500 tracking-wide">Xem thay đổi</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="flex-col gap-2 ">
                            <Skeleton height={128} width={237} />
                            <Skeleton height={128} width={237} />
                            <Skeleton height={128} width={237} />
                        </div>
                    )}
                </div>

                <div className="w-full h-72">
                    <p className="text-base mt-8 text-slate-700">Trong trang này</p>
                    <div className="flex flex-col justify-between gap-2 mt-2">
                        {usersOnlineState ? (
                            usersOnlineState.map((user, index) => (
                                <div className="flex justify-between items-center py-2 px-4 rounded-xl bg-slate-100">
                                    <div className="flex items-center gap-2">
                                        <img src={user.photoURL} className="w-8 h-8 rounded-full" />
                                        <p className="text-slate-600 font-medium text-sm leading-6">{user.displayName}</p>
                                    </div>
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                </div>
                            ))
                        ) : (
                            <>
                                <Skeleton height={45} width={237} />
                                <Skeleton height={45} width={237} />
                                <Skeleton height={45} width={237} />
                                <Skeleton height={45} width={237} />
                            </>
                        )}
                    </div>
                </div>
            </div>
        </aside >
    )
}

export default AdminSidebarRight