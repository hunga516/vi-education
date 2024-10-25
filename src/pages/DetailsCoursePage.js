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

import Button from "../components/Button";

function DetailsCoursePage() {
    const params = useParams()
    const [course, setCourse] = useState({})
    const [authorCourses, setAuthorCourses] = useState([])

    useEffect(() => {
        const getCourseById = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/courses/${params.id}`)
                setCourse(response.data)
            } catch (error) {
                console.log(error);
            }
        }

        getCourseById()
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

    const [isOpen, setIsOpen] = useState({
        accordion1: true,
        subAccordion1: true,
        subAccordion2: false,
        subAccordion3: false,
        accordion2: false,
        accordion3: false
    });

    const toggleAccordion = (accordion) => {
        setIsOpen((prev) => ({ ...prev, [accordion]: !prev[accordion] }));
    };

    return (
        <div className="course-detail-wrapper bg-white shadow-2xl rounded-md">
            <div className="flex justify-between gap-4 p-4">
                <img
                    src={course.images}
                    className="w-64 h-64 rounded-lg object-cover"
                />
                <div className="info-course flex flex-col justify-between p-2 flex-grow">
                    <h1 className="flex justify-between text-lg font-semibold leading-7 tracking-normal">
                        {course.title}
                        <MdQuestionMark className="text-slate-600" />
                    </h1>
                    <p className="text-sm font-normal leading-6 text-slate-600 text-justify">{course.description}</p>
                    <div className="info-2-course mt-2 flex gap-12 items-center">
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
                    <div className="flex gap-4">
                        <Button className={"mt-6 px-4 text-sm leading-6 tracking-wide"} type="primary" >
                            <FaPlusCircle />
                            Đăng ký học ngay
                        </Button>
                        <Button className={"mt-6 px-2 text-sm leading-6 tracking-wide"} type="outline-primary">Học thử</Button>
                    </div>
                </div>
            </div>
            {course.author && (
                <div className="author-course mt-8 flex flex-row gap-4 p-4 rounded-lg flex-shrink-0">
                    <div className="w-full flex flex-col">
                        <div className="hs-accordion-group">
                            {/* Accordion #1 */}
                            <div className={`hs-accordion ${isOpen.accordion1 ? 'active' : ''}`} id="hs-basic-nested-heading-one">
                                <button
                                    className="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 focus:outline-none focus:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none"
                                    // aria-expanded={isOpen.accordion1}
                                    aria-controls="hs-basic-nested-collapse-one"
                                    onClick={() => toggleAccordion('accordion1')}
                                >
                                    <svg className={`${isOpen.accordion1 ? 'hidden' : 'block'} size-3.5`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5v14"></path>
                                    </svg>
                                    <svg className={`${isOpen.accordion1 ? 'block' : 'hidden'} size-3.5`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14"></path>
                                    </svg>
                                    Accordion #1
                                </button>
                                <div
                                    id="hs-basic-nested-collapse-one"
                                    className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${isOpen.accordion1 ? '' : 'hidden'}`}
                                    role="region"
                                    aria-labelledby="hs-basic-nested-heading-one"
                                >
                                    <div className="hs-accordion-group pl-6">
                                        {/* Sub accordion #1 */}
                                        <div className={`hs-accordion ${isOpen.subAccordion1 ? 'active' : ''}`} id="hs-basic-nested-sub-heading-one">
                                            <button
                                                className="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 focus:outline-none focus:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none"
                                                aria-expanded={isOpen.subAccordion1}
                                                aria-controls="hs-basic-nested-sub-collapse-one"
                                                onClick={() => toggleAccordion('subAccordion1')}
                                            >
                                                <svg className={`${isOpen.subAccordion1 ? 'hidden' : 'block'} size-3`} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                                    <path d="M2.624 7.86L13.624 7.86" strokeLinecap="round"></path>
                                                    <path d="M8.124 13.36V2.36" strokeLinecap="round"></path>
                                                </svg>
                                                <svg className={`${isOpen.subAccordion1 ? 'block' : 'hidden'} size-3`} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                                    <path d="M2.624 7.86L13.624 7.86" strokeLinecap="round"></path>
                                                </svg>
                                                Sub accordion #1
                                            </button>
                                            <div
                                                id="hs-basic-nested-sub-collapse-one"
                                                className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${isOpen.subAccordion1 ? '' : 'hidden'}`}
                                                role="region"
                                                aria-labelledby="hs-basic-nested-sub-heading-one"
                                            >
                                                <p className="text-gray-800">
                                                    <em>This is the third item's accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.
                                                </p>
                                            </div>
                                        </div>

                                        {/* Sub accordion #2 */}
                                        <div className={`hs-accordion ${isOpen.subAccordion2 ? 'active' : ''}`} id="hs-basic-nested-sub-heading-two">
                                            <button
                                                className="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 focus:outline-none focus:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none"
                                                aria-expanded={isOpen.subAccordion2}
                                                aria-controls="hs-basic-nested-sub-collapse-two"
                                                onClick={() => toggleAccordion('subAccordion2')}
                                            >
                                                <svg className={`${isOpen.subAccordion2 ? 'hidden' : 'block'} size-3`} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                                    <path d="M2.624 7.86L13.624 7.86" strokeLinecap="round"></path>
                                                    <path d="M8.124 13.36V2.36" strokeLinecap="round"></path>
                                                </svg>
                                                <svg className={`${isOpen.subAccordion2 ? 'block' : 'hidden'} size-3`} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                                    <path d="M2.624 7.86L13.624 7.86" strokeLinecap="round"></path>
                                                </svg>
                                                Sub accordion #2
                                            </button>
                                            <div
                                                id="hs-basic-nested-sub-collapse-two"
                                                className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${isOpen.subAccordion2 ? '' : 'hidden'}`}
                                                role="region"
                                                aria-labelledby="hs-basic-nested-sub-heading-two"
                                            >
                                                <p className="text-gray-800">
                                                    <em>This is the second item's accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes.
                                                </p>
                                            </div>
                                        </div>

                                        {/* Sub accordion #3 */}
                                        <div className={`hs-accordion ${isOpen.subAccordion3 ? 'active' : ''}`} id="hs-basic-nested-sub-heading-three">
                                            <button
                                                className="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 focus:outline-none focus:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none"
                                                aria-expanded={isOpen.subAccordion3}
                                                aria-controls="hs-basic-nested-sub-collapse-three"
                                                onClick={() => toggleAccordion('subAccordion3')}
                                            >
                                                <svg className={`${isOpen.subAccordion3 ? 'hidden' : 'block'} size-3`} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                                    <path d="M2.624 7.86L13.624 7.86" strokeLinecap="round"></path>
                                                    <path d="M8.124 13.36V2.36" strokeLinecap="round"></path>
                                                </svg>
                                                <svg className={`${isOpen.subAccordion3 ? 'block' : 'hidden'} size-3`} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                                    <path d="M2.624 7.86L13.624 7.86" strokeLinecap="round"></path>
                                                </svg>
                                                Sub accordion #3
                                            </button>
                                            <div
                                                id="hs-basic-nested-sub-collapse-three"
                                                className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${isOpen.subAccordion3 ? '' : 'hidden'}`}
                                                role="region"
                                                aria-labelledby="hs-basic-nested-sub-heading-three"
                                            >
                                                <p className="text-gray-800">
                                                    <em>This is the first item's accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Accordion #2 */}
                            <div className={`hs-accordion ${isOpen.accordion2 ? 'active' : ''}`} id="hs-basic-nested-heading-two">
                                <button
                                    className="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 focus:outline-none focus:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none"
                                    aria-expanded={isOpen.accordion2}
                                    aria-controls="hs-basic-nested-collapse-two"
                                    onClick={() => toggleAccordion('accordion2')}
                                >
                                    <svg className={`${isOpen.accordion2 ? 'hidden' : 'block'} size-3.5`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5v14"></path>
                                    </svg>
                                    <svg className={`${isOpen.accordion2 ? 'block' : 'hidden'} size-3.5`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14"></path>
                                    </svg>
                                    Accordion #2
                                </button>
                                <div
                                    id="hs-basic-nested-collapse-two"
                                    className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${isOpen.accordion2 ? '' : 'hidden'}`}
                                    role="region"
                                    aria-labelledby="hs-basic-nested-heading-two"
                                >
                                    <p className="text-gray-800">
                                        <em>This is the second item's accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.
                                    </p>
                                </div>
                            </div>

                            {/* Accordion #3 */}
                            <div className={`hs-accordion ${isOpen.accordion3 ? 'active' : ''}`} id="hs-basic-nested-heading-three">
                                <button
                                    className="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 focus:outline-none focus:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none"
                                    aria-expanded={isOpen.accordion3}
                                    aria-controls="hs-basic-nested-collapse-three"
                                    onClick={() => toggleAccordion('accordion3')}
                                >
                                    <svg className={`${isOpen.accordion3 ? 'hidden' : 'block'} size-3.5`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5v14"></path>
                                    </svg>
                                    <svg className={`${isOpen.accordion3 ? 'block' : 'hidden'} size-3.5`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14"></path>
                                    </svg>
                                    Accordion #3
                                </button>
                                <div
                                    id="hs-basic-nested-collapse-three"
                                    className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${isOpen.accordion3 ? '' : 'hidden'}`}
                                    role="region"
                                    aria-labelledby="hs-basic-nested-heading-three"
                                >
                                    <p className="text-gray-800">
                                        <em>This is the third item's accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: course.content }} className="w-full">
                        </div>
                    </div>
                    <div className="w-1/3 p-4 flex flex-col border-l border-1">
                        <div className="info-author text-center mt-2 relative">
                            <img
                                src={course.author.photoURL}
                                className="rounded-full w-16 h-16 mx-auto object-cover"
                            />
                            <h2 className="text-sm font-semibold leading-6 text-slate-700">{course.author.displayName}</h2>
                            <span className="text-sm font-light leading-6 text-slate-500">{course.author.email}</span>

                            <div className="w-full mt-2 border-b border-1"></div>

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