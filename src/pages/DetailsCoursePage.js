import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"

import { FaFilm } from "react-icons/fa6";
import { IoTimeSharp } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { MdQuestionMark } from "react-icons/md";
import { FaClock } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { IoBook } from "react-icons/io5";
import { FaUserGraduate } from "react-icons/fa6";
import { AiOutlinePlus } from "react-icons/ai";
import { IoPlayCircle } from "react-icons/io5";

import Button from "../components/Button";

function DetailsCoursePage() {
    const params = useParams()
    const [course, setCourse] = useState({})
    const [authorCourses, setAuthorCourses] = useState([])
    const [lessons, setLessons] = useState()
    const [chapters, setChapters] = useState()

    useEffect(() => {
        const getCourseById = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/courses/${params.id}`)
                setCourse(response.data)
            } catch (error) {
                console.log(error);
            }
        }

        const getLessonsByCourseId = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/lessons?course_id=${params.id}&sort=createdAt&order=asc`)
                setLessons(response.data.lessons)

                const uniqueChapters = [...new Set(response.data.lessons.map((lesson) => lesson.chapter))]
                setChapters(uniqueChapters)
            } catch (error) {
                console.log(error);
            }
        }


        getCourseById()
        getLessonsByCourseId()
    }, [params.id])

    useEffect(() => {
        if (course.author) {
            const getAuthorCourses = async () => {
                try {
                    const response = await axios.get(`${process.env.REACT_APP_API_URL}/courses/?author=${course.author._id}`)
                    setAuthorCourses(response.data.courses)
                } catch (error) {
                    console.log(error);
                }
            }

            getAuthorCourses()
        }
    }, [course.author])

    const [isOpen, setIsOpenAccordion] = useState({
        accordion1: false,
        accordion2: false,
        accordion3: false
    });

    const toggleAccordion = (accordion) => {
        setIsOpenAccordion((prev) => ({ ...prev, [accordion]: !prev[accordion] }));
    };

    console.log(isOpen);

    const handleGetLessonsOnChapter = (chapter) => {
        return lessons.filter(lesson => lesson.chapter === chapter)
    }


    return (
        <div className="course-detail-wrapper bg-white shadow-2xl rounded-md">
            <div className="flex justify-between gap-4 p-4">
                <img
                    src={course.images}
                    className="w-64 h-64 rounded-lg object-cover"
                    alt=""
                />
                <div className="info-course flex flex-col justify-between p-2 flex-grow">
                    <h1 className="flex justify-between text-lg font-semibold leading-7 tracking-normal">
                        {course.title}
                        <MdQuestionMark className="text-slate-600" />
                    </h1>
                    <p className="text-sm font-normal leading-6 text-slate-600 text-justify">{course.description}</p>
                    <div className="info-2-course flex gap-4 items-center justify-between">
                        <div className="flex gap-4">
                            <div className="flex gap-2 items-center text-sm font-sans leading-6 text-slate-500">
                                <MdWork />
                                {course.role}
                            </div>
                            <div className="flex gap-2 items-center text-sm font-sans leading-6 text-slate-500">
                                <FaFilm />
                                26 bài học
                            </div>
                            <div className="flex gap-2 items-center text-sm font-sans leading-6 text-slate-500">
                                <IoTimeSharp />
                                120 tiếng học
                            </div>
                        </div>
                        <div className="relative w-96 bg-white pb-1 rounded-lg">
                            <div className="pb-1 w-full rounded-lg bg-slate-300">
                                <div className="absolute w-36 pb-1 bg-gradient-to-r from-blue-300 to-blue-500 rounded-lg"></div>
                                <div className="absolute w-96 mt-2 flex justify-between items-center">
                                    <p className="text-xs text-slate-400 tracking-wide">Giới thiệu</p>
                                    <p className="text-xs text-slate-400 tracking-wide">Cú pháp</p>
                                    <p className="text-xs text-slate-400 tracking-wide">Thực hành</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4 justify-between items-center">
                        <div className="flex gap-2">
                            <Button className={"px-4 text-sm leading-6 tracking-wide"} type="primary" >
                                <FaPlusCircle />
                                Đăng ký học ngay
                            </Button>
                            <Button className={"px-2 text-sm leading-6 tracking-wide bg-blue-100"} type="outline-primary">
                                Học thử
                            </Button>
                        </div>

                    </div>
                </div>
            </div>
            {course.author && (
                <div className="author-course mt-8 flex flex-row gap-4 p-4 rounded-lg flex-shrink-0">
                    <div className="w-full flex flex-col">
                        <div className="container-accordion mt-9 flex flex-col gap-1 w-full pb-20">
                            {chapters && (
                                chapters.map((chapter, index) => (
                                    <div className="accordion">
                                        <div onClick={() => toggleAccordion(`accordion${index + 1}`)} className="px-4 py-3 ring-1 ring-inset bg-slate-100 ring-slate-200 rounded-md cursor-pointer">
                                            <div className="flex items-center gap-2">
                                                <AiOutlinePlus className="text-bluePrimary" />
                                                <p className="text-sm text-slate-800 tracking-wide font-medium">{chapter}</p>
                                            </div>
                                        </div>
                                        <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen[`accordion${index + 1}`] ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                            {handleGetLessonsOnChapter(chapter).map((lesson, index) => (
                                                <div className="flex gap-2 items-center ml-8 px-4 py-3 border-b-[0.5px]" key={index}>
                                                    <IoPlayCircle strokeWidth={1} className="text-bluePrimary" />
                                                    {lesson.title}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: course.content }} className="w-full">
                        </div>
                    </div>
                    <div className="w-1/3 p-4 flex flex-col border-l border-1">
                        <div className="info-author text-center mt-2 relative">
                            <div>
                                <img
                                    src={course.author.photoURL}
                                    className="rounded-full w-16 h-16 mx-auto object-cover"
                                />
                                <h2 className="text-sm font-semibold leading-6 text-slate-700">{course.author.displayName}</h2>
                                <span className="text-sm font-light leading-6 text-slate-500">{course.author.email}</span>

                                <span className="mt-2 flex gap-1 items-center text-sm leading-4 text-slate-700">
                                    <FaClock />
                                    Tham gia 1 ngày trước
                                </span>
                                <span className="mt-2 flex gap-1 items-center text-sm leading-4 text-slate-700">
                                    <IoBook />
                                    {authorCourses.length} khoá học
                                </span>
                                <span className="mt-2 flex gap-1 items-center text-sm leading-4 text-slate-700">
                                    <FaUserGraduate />
                                    3 học viên
                                </span>
                            </div>

                            <h2 className="mt-8 text-md leading-7 text-slate-800">Khoá học nổi bật</h2>
                            <div className="h-[500px] overflow-hidden mt-2 grid grid-cols-2 gap-2">
                                {authorCourses.map((course) => (
                                    <Link to={`/courses/${course._id}`} className="info-course">
                                        <img className="rounded-md w-full h-[120px] object-cover" src={course.images} />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )
            }
        </div >
    )
}

export default DetailsCoursePage