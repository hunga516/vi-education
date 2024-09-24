import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import axios from "axios";

import { FaRegTrashAlt } from "react-icons/fa";
import { TiEdit } from "react-icons/ti";
import { MdDeleteOutline } from "react-icons/md";

import Menu from "../../components/Popper/Menu";
import CreateCourseModal from "../../components/Modal/Course/CreateCourseModal";
import EditCourseModal from "../../components/Modal/Course/EditCourseModal";

function AdminHomePage() {
    const [courses, setCourses] = useState([])
    const [isShowCreateCourse, setIsShowCreateCourse] = useState(false)
    const [isShowEditCourse, setIsShowEditCourse] = useState(false)
    const [selectedCourse, setSelectedCourse] = useState(null) //for render courses
    const [isActiveButton, setIsActiveButton] = useState('all')
    const socket = io('http://localhost:3001');
    useEffect(() => {

        const getAllCourses = async () => {
            try {
                const response = await axios.get('http://localhost:3001/courses')
                setCourses(response.data)
            } catch (error) {
                console.log(error);
            }
        }

        const getRecentCourses = async () => {
            try {
                const response = await axios.get('http://localhost:3001/courses')
                setCourses(response.data)
            } catch (error) {
                console.log(error);
            }
        }

        const getTrashCourses = async () => {
            try {
                const response = await axios.get('http://localhost:3001/courses')
                setCourses(response.data)
            } catch (error) {
                console.log(error);
            }
        }

        //For active button (all,recent,trash)
        switch (isActiveButton) {
            case 'all':
                getAllCourses()
                break;
            case 'recent':
                getRecentCourses()
                break;
            case 'all':
                getTrashCourses()
                break;
            default:
                break;
        }

        //Listen socketi io for realtime
        socket.on('course_added', (newCourse) => {
            setCourses((prevCourses) => [...prevCourses, newCourse]);
        });

        socket.on('course_edited', (updatedCourse) => {
            setCourses((prevCourses) => {
                return prevCourses.map(course =>
                    course.courseId === updatedCourse.courseId ? updatedCourse : course
                )
            })
        })


        return () => {
            socket.off('course_added');
        };
    }, [])

    const toggleIsShowCreateCourse = () => {
        setIsShowCreateCourse(!isShowCreateCourse)
    }

    const toggleIsShowEditCourse = (course) => {
        setSelectedCourse(course)
        setIsShowEditCourse(!isShowEditCourse)
    }

    const COURSE_ACTIONS = [
        {
            icon: TiEdit,
            title: "Chỉnh sửa",
            onClick: course => {
                toggleIsShowEditCourse(course)
            }
        },
        {
            icon: MdDeleteOutline,
            title: "Xoá"
        }
    ]


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
                            onClick={toggleIsShowCreateCourse}
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
                            className="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 bg-gray-100 sm:text-sm"
                            onClick={() => setIsActiveButton('all')}
                        >
                            Tất cả
                        </button>

                        <button
                            className="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm  hover:bg-gray-100"
                            onClick={() => setIsActiveButton('recent')}
                        >
                            Gần đây
                        </button>

                        <button
                            className="flex items-center gap-2 px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm  hover:bg-gray-100"
                            onClick={() => setIsActiveButton('trash')}
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

                        <input type="text" placeholder="Tìm bài viết" className="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                </div>

                <div className="tagble flex flex-col mt-6 drop-shadow-md">
                    <div className="">
                        <div className="inline-block min-w-full py-2 align-middle">
                            <div className="overflow-hidden border border-gray-200  md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200 ">
                                    <thead className="bg-slate-50">
                                        <tr>
                                            <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                                                STT
                                            </th>

                                            <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                                                <button className="flex items-center gap-x-3 focus:outline-none">
                                                    <span>Lĩnh vực</span>

                                                    <svg className="h-3" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z" fill="currentColor" stroke="currentColor" strokeWidth="0.1" />
                                                        <path d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z" fill="currentColor" stroke="currentColor" strokeWidth="0.1" />
                                                        <path d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z" fill="currentColor" stroke="currentColor" strokeWidth="0.3" />
                                                    </svg>
                                                </button>
                                            </th>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                                                Tiêu đề
                                            </th>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                                                Người đăng
                                            </th>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal  text-center rtl:text-right text-gray-500 ">Lượt đăng ký</th>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal  text-center rtl:text-right text-gray-500 ">Cập nhật</th>

                                            <th scope="col" className="relative py-3.5 px-4">
                                                <span className="sr-only">Edit</span>
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody class="bg-white divide-y divide-gray-200">
                                        {courses.map((course, index) => (
                                            <tr className="even:bg-slate-50">
                                                <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                                    <h2 class="font-medium text-gray-800">{course.courseId}</h2>
                                                </td>

                                                <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                                    <div>
                                                        <h2 class="font-medium text-gray-800">{course.role}</h2>
                                                        <p class="text-sm font-normal text-gray-600"></p>
                                                    </div>
                                                </td>
                                                <td class="px-4 py-4 text-sm font-medium text-ellipsis overflow-hidden whitespace-nowrap">
                                                    <div class="py-1 text-sm font-normal rounded-full">
                                                        {course.title}
                                                    </div>
                                                </td>

                                                <td class="px-4 py-4 text-sm font-medium text-ellipsis overflow-hidden whitespace-nowrap">
                                                    <div className="flex gap-2 items-center py-1 text-sm font-normal rounded-full">
                                                        <img src={course.author.photoURL} className="w-4 rounded-full object-cover" alt="avatar" />
                                                        {course.author.displayName}
                                                    </div>
                                                </td>

                                                <td class="px-4 py-4 text-sm whitespace-nowrap">
                                                    <div>
                                                        <h4 class="text-gray-700 text-center">{course.upvote}</h4>
                                                    </div>
                                                </td>

                                                <td class="px-4 py-4 text-sm whitespace-nowrap">
                                                    <div>
                                                        <h4 class="text-gray-700 text-center">{course.downvote}</h4>
                                                    </div>
                                                </td>

                                                <Menu items={COURSE_ACTIONS} payload={course}>
                                                    <td class="px-4 py-4 text-sm whitespace-nowrap">
                                                        <button
                                                            class="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg hover:bg-gray-100"
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                                            </svg>
                                                        </button>
                                                    </td>
                                                </Menu>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-6 sm:flex sm:items-center sm:justify-between ">
                    <div class="text-sm text-gray-500">
                        Trang <span class="font-medium text-gray-700">1 / 10</span>
                    </div>

                    <div class="flex items-center mt-4 gap-x-4 sm:mt-0">
                        <a href="#" class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100-800">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 rtl:-scale-x-100">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                            </svg>

                            <span>
                                Trước
                            </span>
                        </a>

                        <a href="#" class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100-800">
                            <span>
                                Kế tiếp
                            </span>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 rtl:-scale-x-100">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            {isShowCreateCourse && (
                <CreateCourseModal toggleIsShowCreateCourse={toggleIsShowCreateCourse} />
            )}
            {isShowEditCourse && (
                <EditCourseModal course={selectedCourse} toggleIsShowEditCourse={toggleIsShowEditCourse} />
            )}
        </>
    )
}

export default AdminHomePage