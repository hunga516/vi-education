import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import axios from "axios";

import { FaRegTrashAlt } from "react-icons/fa";
import { TiEdit } from "react-icons/ti";
import { MdDeleteOutline } from "react-icons/md";

import EditCourseModal from "../../components/Modal/Course/EditCourseModal";
import CreateLessonModal from "../../components/Modal/Lesson/CreateLessonModal";
import LessonTable from "../../components/Table/LessonTable";

function AdminLessonPage() {
    const [lessons, setLessons] = useState([])
    const [isShowCreateLesson, setIsShowCreateLesson] = useState(false)
    const [isShowEditLesson, setIsShowEditLesson] = useState(false)
    const [selectedLesson, setSelectedLesson] = useState(null)
    const [activeButton, setActiveButton] = useState('all')
    const [searchQuery, setSearchQuery] = useState('')
    const [chapterEditedId, setChapterEditedId] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(10)

    const socket = io('http://localhost:3001');

    useEffect(() => {
        setCurrentPage(1);
    }, [activeButton])


    useEffect(() => {
        const getAllLessons = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/courses/lessons?page=${currentPage}`)
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

        socket.on('lesson_added', (newLesson) => {
            setLessons((prevLessons) => [...prevLessons, newLesson]);
        });

        socket.on('lesson_edited', (updatedLesson) => {
            setLessons((prevLessons) => {
                const updatedLessons = prevLessons.map(lesson =>
                    lesson._id === updatedLesson._id ? updatedLesson : lesson
                );
                setChapterEditedId(updatedLesson._id)
                return updatedLessons
            });
        });

        socket.on('lesson_soft_deleted', (lessonDeleteds) => {
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
            console.log('xoa ne');
        })

        socket.on('lesson_restored', (lessonRestoreds) => {
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
            socket.off('lesson_added');
            socket.off('lesson_edited');
            socket.off('lesson_soft_deleted');
            socket.off('lesson_restored');
        };
    }, [currentPage, activeButton])

    const toggleIsShowCreateLesson = () => {
        setIsShowCreateLesson(!isShowCreateLesson)
    }

    const toggleIsShowEditLesson = (lesson) => {
        setSelectedLesson(lesson)
        setIsShowEditLesson(!isShowEditLesson)
    }

    const handleSoftDelete = async (lesson) => {
        try {
            await axios.delete(`${process.env.REACT_APP_API_URL}/lessons/${lesson._id}`)
        } catch (error) {
            console.log(error);
        }
    }

    const handleRestore = async (lesson) => {
        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/lessons/restore/${lesson._id}`)
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
            <div className="home-page-wrapper bg-white rounded-md shadow-2xl px-5 py-4">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div>
                        <div className="flex items-center gap-x-3">
                            <h2 className="text-lg font-medium text-gray-800">Bài học</h2>

                            <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full">17 bài học</span>
                        </div>

                        <p className="mt-1 text-sm text-gray-500">Quản lý các bài học của khoá học</p>
                    </div>

                    <div className="flex items-center mt-4 gap-x-3">
                        <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto hover:bg-gray-100">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_3098_154395)">
                                    <path d="M13.3333 13.3332L9.99997 9.9999M9.99997 9.9999L6.66663 13.3332M9.99997 9.9999V17.4999M16.9916 15.3249C17.8044 14.8818 18.4465 14.1806 18.8165 13.3321C19.1866 12.4835 19.2635 11.5359 19.0351 10.6388C18.8068 9.7417 18.2862 8.94616 17.5555 8.37778C16.8248 7.80939 15.9257 7.50052 15 7.4999H13.95C13.6977 6.52427 13.2276 5.61852 12.5749 4.85073C11.9222 4.08295 11.104 3.47311 10.1817 3.06708C9.25943 2.66104 8.25709 2.46937 7.25006 2.50647C6.24304 2.54358 5.25752 2.80849 4.36761 3.28129C3.47771 3.7541 2.70656 4.42249 2.11215 5.23622C1.51774 6.04996 1.11554 6.98785 0.935783 7.9794C0.756025 8.97095 0.803388 9.99035 1.07431 10.961C1.34523 11.9316 1.83267 12.8281 2.49997 13.5832" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_3098_154395">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                            <span>Tải lên</span>
                        </button>

                        <button
                            onClick={toggleIsShowCreateLesson}
                            className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                            <span>Thêm khoá học</span>
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

                        <input onChange={(e) => handleSearch(e)} type="text" placeholder="Tìm khoá học" className="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                </div>

                <div className="table max-w-full flex flex-col w-full mt-6 drop-shadow-md">
                    {activeButton === 'all' || activeButton === 'recent' ? (
                        <LessonTable
                            headers={["STT", "Khoá học", "Bài học", "Người đăng", "Lượt học", "Cập nhật"]}
                            data={lessons}
                            activeButton={activeButton}
                            handleRestore={handleRestore}
                            itemEditedId={chapterEditedId}
                            actions={LESSON_ACTIONS}
                            handleActionForm={handleActionForm}
                        />
                    ) : (
                        <LessonTable
                            headers={["STT", "Lĩnh vực", "Tiêu đề", "Người đăng", "Lượt đăng ký", "Ngày xoá"]}
                            data={lessons}
                            activeButton={activeButton}
                            handleRestore={handleRestore}
                            itemEditedId={chapterEditedId}
                            actions={LESSON_ACTIONS}
                        />
                    )}
                </div>
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
                    <EditCourseModal course={selectedLesson} toggleIsShowEditCourse={toggleIsShowEditLesson} />
                )
            }
        </>
    )
}

export default AdminLessonPage