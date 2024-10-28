import { useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import axios from "axios";

import { FaRegTrashAlt } from "react-icons/fa";
import { TiEdit } from "react-icons/ti";
import { MdDeleteOutline } from "react-icons/md";
import { CiFolderOn } from "react-icons/ci";

import CreateCourseModal from "../../components/Modal/Course/CreateCourseModal";
import EditCourseModal from "../../components/Modal/Course/EditCourseModal";
import CourseTable from "../../components/Table/CourseTable";
import FileCourseModal from "../../components/Modal/Course/FileCourseModal";
import Button from "../../components/Button";
import Skeleton from "react-loading-skeleton";
import { AuthContext } from "../../context";

function AdminCoursePage() {
    const [courses, setCourses] = useState()
    const [isShowCreateCourse, setIsShowCreateCourse] = useState(false)
    const [isShowEditCourse, setIsShowEditCourse] = useState(false)
    const [isShowFileCourse, setIsShowFileCourse] = useState(false)
    const [selectedCourse, setSelectedCourse] = useState(null) //for render courses
    const [activeButton, setActiveButton] = useState('all')
    const [searchQuery, setSearchQuery] = useState('')
    const [courseEditedId, setCourseEditedId] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(10)
    const { userId } = useContext(AuthContext)


    useEffect(() => {
        // Đặt lại currentPage về 1 khi activeButton thay đổi
        setCurrentPage(1);
    }, [activeButton]) // Chỉ theo dõi activeButton

    useEffect(() => {
        const socket = io('http://localhost:3001');

        const getAllCourses = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/courses?page=${currentPage}`)
                setCourses(response.data.courses)
                setTotalPages(Math.ceil(response.data.totalCourses / 10))
            } catch (error) {
                console.log(error);
            }
        }

        const getRecentCourses = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/courses?sort=updatedAt&order=desc&page=${currentPage}`)
                setCourses(response.data.courses)
                setTotalPages(Math.ceil(response.data.totalCourses / 10))
            } catch (error) {
                console.log(error);
            }
        }

        const getTrashCourses = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/courses/trash?page=${currentPage}`)
                setCourses(response.data.courses)
                setTotalPages(Math.ceil(response.data.totalCoursesDeleted / 10))
            } catch (error) {
                console.log(error);
            }
        }

        //For active button (all,recent,trash)
        switch (activeButton) {
            case 'all':
                getAllCourses()
                break;
            case 'recent':
                getRecentCourses()
                break;
            case 'trash':
                getTrashCourses()
                break;
            default:
                break;
        }

        //Listen socketi io for realtime
        socket.on('course:create', (newCourse) => {
            if (Array.isArray(newCourse)) {
                setCourses((prevCourses) => [...newCourse, ...prevCourses]);
            } else {
                setCourses((prevCourses) => [newCourse, ...prevCourses]);
            }
        });


        socket.on('course:update', (updatedCourse) => {
            setCourses((prevCourses) => {
                const updatedCourses = prevCourses.map(course =>
                    course._id === updatedCourse._id ? updatedCourse : course
                );
                setCourseEditedId(updatedCourse._id)
                return updatedCourses
            });
        });

        socket.on('course:soft-delete', (courseDeleteds) => {
            setCourses(prevCourses =>
                prevCourses.filter(course => {
                    if (Array.isArray(courseDeleteds)) {
                        return !courseDeleteds.some(courseDeleted =>
                            course._id === courseDeleted._id
                        )
                    } else {
                        return course._id !== courseDeleteds._id
                    }
                }
                )
            )
        })

        socket.on('course:restore', (courseRestoreds) => {
            setCourses(prevCourses =>
                prevCourses.filter(course => {
                    if (Array.isArray(courseRestoreds)) {
                        return !courseRestoreds.some(courseRestored =>
                            course._id === courseRestored._id
                        );
                    } else {
                        return course._id !== courseRestoreds._id;
                    }
                })
            )
        })

        return () => {
            socket.off('course:create');
            socket.off('course:update');
            socket.off('course:soft-delete');
            socket.off('course:restore');
            socket.disconnect()
        };
    }, [currentPage, activeButton]) // Theo dõi cả currentPage và activeButton

    const toggleIsShowCreateCourse = () => {
        setIsShowCreateCourse(!isShowCreateCourse)
    }

    const toggleIsShowEditCourse = (course) => {
        setSelectedCourse(course)
        setIsShowEditCourse(!isShowEditCourse)
    }

    const toggleIsShowFileCourse = () => {
        setIsShowFileCourse(!isShowFileCourse)
    }

    const handleSoftDelete = async (course) => {
        try {
            await axios.delete(`${process.env.REACT_APP_API_URL}/courses/${course._id}?updatedBy=${userId}`);
        } catch (error) {
            console.log(error);
        }
    }


    const handleRestore = async (course) => {
        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/courses/restore/${course._id}?updatedBy=${userId}`)
        } catch (error) {
            console.log(error);
        }
    }

    const handleSearch = async (e) => {
        try {
            setSearchQuery(e.target.value)
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/courses?title=${e.target.value}`)
            setCourses(response.data.courses)
        } catch (error) {
            console.log(error);
        }
    }

    const COURSE_ACTIONS = [
        {
            icon: TiEdit,
            title: "Chỉnh sửa",
            onClick: function (course) {
                toggleIsShowEditCourse(course)
            }
        },
        {
            icon: MdDeleteOutline,
            title: "Xoá",
            onClick: function (course) {
                handleSoftDelete(course)
            }
        }
    ]

    const handleActionForm = async (e, data) => {
        e.preventDefault();
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/courses/handle-form-action`, data)
    }

    return (
        <>
            <div className="home-page-wrapper bg-white rounded-md shadow-2xl px-5 py-4">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div>
                        <div className="flex items-center gap-x-3">
                            <h2 className="text-lg font-medium text-gray-800">Khoá học</h2>

                            <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full">3 khoá học</span>
                        </div>

                        <p className="mt-1 text-sm text-gray-500">Quản lý các khoá học</p>
                    </div>

                    <div className="flex items-center mt-4 gap-x-3">
                        <Button type="upload"
                            onClick={toggleIsShowFileCourse}
                        >
                            <CiFolderOn strokeWidth="1px" className="text-base text-slate-500" />
                            <span className="text-slate-500">Tệp</span>
                        </Button>

                        <button
                            onClick={toggleIsShowCreateCourse}
                            className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                            <span>Đăng khóa học</span>
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
                        courses ? (
                            <CourseTable
                                headers={["STT", "Lĩnh vực", "Tiêu đề", "Người đăng", "Lượt đăng ký", "Cập nhật"]}
                                data={courses}
                                activeButton={activeButton}
                                handleRestore={handleRestore}
                                itemEditedId={courseEditedId}
                                courseActions={COURSE_ACTIONS}
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
                        <CourseTable
                            headers={["STT", "Lĩnh vực", "Tiêu đề", "Người đăng", "Lượt đăng ký", "Ngày xoá"]}
                            data={courses}
                            activeButton={activeButton}
                            handleRestore={handleRestore}
                            itemEditedId={courseEditedId}
                            courseActions={COURSE_ACTIONS}
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
            {isShowCreateCourse && (
                <CreateCourseModal toggleIsShowCreateCourse={toggleIsShowCreateCourse} />
            )
            }
            {
                isShowEditCourse && (
                    <EditCourseModal course={selectedCourse} toggleIsShowEditCourse={toggleIsShowEditCourse} />
                )
            }
            {
                isShowFileCourse && (
                    <FileCourseModal toggleIsShowFileCourse={toggleIsShowFileCourse} />
                )
            }
        </>
    )
}

export default AdminCoursePage