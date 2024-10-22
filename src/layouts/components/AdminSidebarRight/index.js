import { useContext, useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

import { AuthContext, LoadingContext } from "../../../context";
import axios from "axios";
import { io } from "socket.io-client";

function AdminSidebarRight({ className }) {
    const [history, setHistory] = useState([])
    const [usersOnline, setUsersOnline] = useState([])
    const { userId } = useContext(AuthContext)
    const socket = io('http://localhost:3001');


    useEffect(() => {
        const getAllHistoryCourses = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/courses/history?limit=3`)
                setHistory(response.data)
            } catch (error) {
                console.log(error);
            }
        }

        const getAllUsersOnline = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/users/online`)
                setUsersOnline(response.data)
            } catch (error) {
                console.log(error);
            }
        }

        const setUserOnline = async () => {
            try {
                await axios.post(`${process.env.REACT_APP_API_URL}/users/online`, { userId })
            } catch (error) {
                console.log(error);
            }
        }

        const setUserOffline = async () => {
            try {
                await axios.post(`${process.env.REACT_APP_API_URL}/users/offline`, { userId })
            } catch (error) {
                console.log(error);
            }
        }

        // socket.on('user:online', newUserOnline => {
        //     setUserOnline(prevUser => [...prevUser, newUserOnline])
        // })

        // socket.on('user:online', newUserOnline => {
        //     setUserOnline((prevUsers) => {
        //         prevUsers.filter((usersOnline) => {
        //             usersOnline 
        //         })
        //     })
        // })

        setUserOnline()
        getAllUsersOnline()
        getAllHistoryCourses()

        return () => {
            setUserOffline()
            socket.disconnect()
        }
    }, [])

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
                            <div key={index} className="bg-white py-4 px-4 rounded-md">
                                <div className="flex justify-between items-center">
                                    <div className="flex gap-2 items-center">
                                        <img src={item.updatedBy?.photoURL} className="w-6 h-6 rounded-full" />
                                        <p className="text-sm text-slate-700 font-semibold">{item.updatedBy?.displayName}</p>
                                    </div>
                                    <p className="text-xs text-slate-500 tracking-wide">{item.createdAt}</p>
                                </div>
                                <div className="mt-2 text-sm text-slate-700 leading-5">
                                    {item.updatedContent}
                                </div>
                                <div className="flex items-center justify-between mt-2">
                                    <p className="text-xs text-slate-500 tracking-wide">Xem thay đổi</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <Skeleton width={100} height={30} />
                    )}
                </div>

                <div className="w-full h-72">
                    <p className="text-base text-slate-700">Trong trang này</p>
                    <div className="flex flex-col justify-between gap-2 mt-2">
                        {usersOnline ? (
                            usersOnline.map((user, index) => (
                                <div className="flex justify-between items-center py-2 px-4 rounded-xl bg-slate-100">
                                    <div className="flex items-center gap-2">
                                        <img src={user.photoURL} className="w-8 h-8 rounded-full" />
                                        <p className="text-slate-600 font-medium text-sm leading-6">{user.displayName}</p>
                                    </div>
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                </div>
                            ))
                        ) : (
                            <Skeleton height={50} width={200} />
                        )}
                    </div>
                </div>
            </div>
        </aside >
    )
}

export default AdminSidebarRight