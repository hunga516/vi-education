import { useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import axios from "axios";

import { FaRegTrashAlt } from "react-icons/fa";
import { TiEdit } from "react-icons/ti";
import { MdDeleteOutline } from "react-icons/md";
import { CiFolderOn } from "react-icons/ci";

import Button from "../../components/Button";
import Skeleton from "react-loading-skeleton";
import { AuthContext } from "../../context";
import LessonTable from "../../components/Table/LessonTable";
import CreateLessonModal from "../../components/Modal/Lesson/CreateLessonModal";
import EditLessonModal from "../../components/Modal/Lesson/EditLessonModal";
import FileLessonModal from "../../components/Modal/Lesson/FileLessonModal";

function AdminLessonPage() {
    const [lessons, setLessons] = useState()
    const [isShowCreateLesson, setIsShowCreateLesson] = useState(false)
    const [isShowEditLesson, setIsShowEditLesson] = useState(false)
    const [isShowFileLesson, setIsShowFileLesson] = useState(false)
    const [selectedLesson, setSelectedLesson] = useState(null) //for render lessons
    const [activeButton, setActiveButton] = useState('all')
    const [searchQuery, setSearchQuery] = useState('')
    const [lessonEditedId, setLessonEditedId] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(10)
    const { userId } = useContext(AuthContext)


    useEffect(() => {
        setCurrentPage(1);
    }, [activeButton])

    useEffect(() => {
        const socket = io(`${process.env.REACT_APP_API_URL}`, {
            reconnectionAttempts: 5, // Số lần thử kết nối lại
            timeout: 10000, // Thời gian timeout
            transports: ['polling'], // Sử dụng WebSocket nếu có thể để giảm thiểu lỗi kết nối
        });

        const getAllLessons = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/lessons?page=${currentPage}`)
                setLessons(response.data.lessons)
                setTotalPages(Math.ceil(response.data.totalLessons / 10))
            } catch (error) {
                console.log(error);
            }
        }

        const getRecentLessons = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/lessons?sort=updatedAt&order=desc&page=${currentPage}`)
                setLessons(response.data.lessons)
                setTotalPages(Math.ceil(response.data.totalLessons / 10))
            } catch (error) {
                console.log(error);
            }
        }

        const getTrashLessons = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/lessons/trash?page=${currentPage}`)
                setLessons(response.data.lessons)
                setTotalPages(Math.ceil(response.data.totalLessonsDeleted / 10))
            } catch (error) {
                console.log(error);
            }
        }

        //For active button (all,recent,trash)
        switch (activeButton) {
            case 'all':
                getAllLessons()
                break;
            case 'recent':
                getRecentLessons()
                break;
            case 'trash':
                getTrashLessons()
                break;
            default:
                break;
        }

        //Listen socketi io for realtime
        socket.on('lesson:create', (newLesson) => {
            if (Array.isArray(newLesson)) {
                setLessons((prevLessons) => [...newLesson, ...prevLessons]);
            } else {
                setLessons((prevLessons) => [newLesson, ...prevLessons]);
            }
        });


        socket.on('lesson:update', (updatedLesson) => {
            setLessons((prevLessons) => {
                const updatedLessons = prevLessons.map(lesson =>
                    lesson._id === updatedLesson._id ? updatedLesson : lesson
                );
                setLessonEditedId(updatedLesson._id)
                return updatedLessons
            });
        });

        socket.on('lesson:soft-delete', (lessonDeleteds) => {
            setLessons(prevLessons =>
                prevLessons.filter(lesson => {
                    if (Array.isArray(lessonDeleteds)) {
                        return !lessonDeleteds.some(lessonDeleted =>
                            lesson._id === lessonDeleted._id
                        )
                    } else {
                        return lesson._id !== lessonDeleteds._id
                    }
                }
                )
            )
        })

        socket.on('lesson:restore', (lessonRestoreds) => {
            setLessons(prevLessons =>
                prevLessons.filter(lesson => {
                    if (Array.isArray(lessonRestoreds)) {
                        return !lessonRestoreds.some(lessonRestored =>
                            lesson._id === lessonRestored._id
                        );
                    } else {
                        return lesson._id !== lessonRestoreds._id;
                    }
                })
            )
        })

        return () => {
            socket.off('lesson:create');
            socket.off('lesson:update');
            socket.off('lesson:soft-delete');
            socket.off('lesson:restore');
            socket.disconnect()
        };
    }, [currentPage, activeButton]) // Theo dõi cả currentPage và activeButton

    const toggleIsShowCreateLesson = () => {
        setIsShowCreateLesson(!isShowCreateLesson)
    }

    const toggleIsShowEditLesson = (lesson) => {
        setSelectedLesson(lesson)
        setIsShowEditLesson(!isShowEditLesson)
    }

    const toggleIsShowFileLesson = () => {
        setIsShowFileLesson(!isShowFileLesson)
    }

    const handleSoftDelete = async (lesson) => {
        try {
            await axios.delete(`${process.env.REACT_APP_API_URL}/lessons/${lesson._id}?updatedBy=${userId}`);
        } catch (error) {
            console.log(error);
        }
    }


    const handleRestore = async (lesson) => {
        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/lessons/restore/${lesson._id}?updatedBy=${userId}`)
        } catch (error) {
            console.log(error);
        }
    }

    const handleSearch = async (e) => {
        try {
            setSearchQuery(e.target.value)
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/lessons?title=${e.target.value}`)
            setLessons(response.data.lessons)
        } catch (error) {
            console.log(error);
        }
    }

    const LESSON_ACTIONS = [
        {
            icon: TiEdit,
            title: "Chỉnh sửa",
            onClick: function (lesson) {
                toggleIsShowEditLesson(lesson)
            }
        },
        {
            icon: MdDeleteOutline,
            title: "Xoá",
            onClick: function (lesson) {
                handleSoftDelete(lesson)
            }
        }
    ]

    const handleActionForm = async (e, data) => {
        e.preventDefault();
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/lessons/handle-form-action`, data)
    }

    return (
        <>
            <div className="home-page-wrapper bg-white ring-1 ring-slate-300/30 rounded-md shadow-2xl px-5 py-4">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div>
                        <div className="flex items-center gap-x-3">
                            <h2 className="text-lg font-medium text-gray-800">Bài học</h2>

                            <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full">{lessons?.length} bài học</span>
                        </div>

                        <p className="mt-1 text-sm text-gray-500">Quản lý các bài học</p>
                    </div>

                    <div className="flex items-center mt-4 gap-x-3">
                        <Button type="upload"
                            onClick={toggleIsShowFileLesson}
                        >
                            <CiFolderOn strokeWidth="1px" className="text-base text-slate-500" />
                            <span className="text-slate-500">Tệp</span>
                        </Button>

                        <button
                            onClick={toggleIsShowCreateLesson}
                            className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                            <span>Đăng bài học</span>
                        </button>
                    </div>
                </div>

                <div className="mt-6 md:flex md:items-center md:justify-between drop-shadow-md">
                    <div className="inline-flex overflow-hidden bg-white border divide-x rounded-lg rtl:flex-row-reverse">
                        <button
                            className={`px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm ${activeButton === 'all' ? 'bg-gray-100' : 'bg-white'}`}
                            onClick={() => setActiveButton('all')}
                        >
                            Tất cả
                        </button>

                        <button
                            className={`px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm ${activeButton === 'recent' ? 'bg-gray-100' : 'bg-white'}`}
                            onClick={() => setActiveButton('recent')}
                        >
                            Gần đây
                        </button>

                        <button
                            className={`flex items-center gap-2 px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm ${activeButton === 'trash' ? 'bg-gray-100' : 'bg-white'}`}
                            onClick={() => setActiveButton('trash')}
                        >
                            <FaRegTrashAlt />
                            Thùng rác
                        </button>
                    </div>

                    <div className="relative flex items-center mt-4 md:mt-0">
                        <span className="absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mx-3 text-gray-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </span>

                        <input onChange={(e) => handleSearch(e)} type="text" placeholder="Tìm bài học" className="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                </div>

                <div className="table max-w-full flex flex-col w-full mt-6 drop-shadow-md">
                    {activeButton === 'all' || activeButton === 'recent' ? (
                        lessons ? (
                            <LessonTable
                                headers={["STT", "Tiêu đề", "Khoá học", "Người đăng", "Lượt học", "Cập nhật"]}
                                data={lessons}
                                activeButton={activeButton}
                                handleRestore={handleRestore}
                                itemEditedId={lessonEditedId}
                                lessonActions={LESSON_ACTIONS}
                                handleActionForm={handleActionForm}
                            />
                        ) : (
                            <div className="flex flex-col gap-1 justify-center mt-10">
                                <Skeleton height={100} width={796} />
                                <Skeleton height={100} width={796} />
                                <Skeleton height={100} width={796} />
                                <Skeleton height={100} width={796} />
                                <Skeleton height={100} width={796} />
                            </div>

                        )
                    ) : (
                        <LessonTable
                            headers={["STT", "Tiêu đề", "Khoá học", "Người đăng", "Lượt học", "Ngày xoá"]}
                            data={lessons}
                            activeButton={activeButton}
                            handleRestore={handleRestore}
                            itemEditedId={lessonEditedId}
                            lessonActions={LESSON_ACTIONS}
                        />
                    )}
                </div >
                <div class="mt-6 sm:flex sm:items-center sm:justify-between ">
                    <div class="text-sm text-gray-500">
                        Trang <span class="font-medium text-gray-700">{currentPage} / {totalPages}</span>
                    </div>
                    <div class="flex items-center mt-4 gap-x-4 sm:mt-0">
                        <button onClick={() => setCurrentPage(currentPage - 1)} href="#" class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100-800">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 rtl:-scale-x-100">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                            </svg>
                            <span>
                                Trước
                            </span>
                        </button>
                        <button onClick={() => setCurrentPage(currentPage + 1)} href="#" class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100-800">
                            <span>
                                Kế tiếp
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 rtl:-scale-x-100">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                        </button>
                    </div>
                </div >
            </div>
            {isShowCreateLesson && (
                <CreateLessonModal toggleIsShowCreateLesson={toggleIsShowCreateLesson} />
            )
            }
            {
                isShowEditLesson && (
                    <EditLessonModal lesson={selectedLesson} toggleIsShowEditLesson={toggleIsShowEditLesson} />
                )
            }
            {
                isShowFileLesson && (
                    <FileLessonModal toggleIsShowFileLesson={toggleIsShowFileLesson} />
                )
            }
        </>
    )
}

export default AdminLessonPage