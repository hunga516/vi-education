import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

import { FaFilm } from "react-icons/fa6";
import { IoTimeSharp } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { MdQuestionMark } from "react-icons/md";

import Button from "../components/Button";

function DetailsCoursePage() {
    const params = useParams()
    const [course, setCourse] = useState('')
    const [author, setAuthor] = useState('')

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
    }, [])

    console.log(course);

    return (
        <div className="course-detail-wrapper bg-white shadow-2xl rounded-md">
            <div className="flex justify-between gap-4 p-4">
                <img
                    src={course.images}
                    className="w-64 h-64 rounded-lg"
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
                    <Button className={"mt-6 px-2 text-sm leading-6 tracking-wide"} type="primary" >Đăng ký học ngay</Button>
                </div>
            </div>
            {course.author && (
                <div className="author-course flex flex-row items-center gap-4 p-4 rounded-lg flex-shrink-0">
                    <div className="w-2/3">
                        <div class="flex items-center mb-2">
                            <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg class="w-4 h-4 text-gray-300 me-1 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">4.95</p>
                            <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">out of</p>
                            <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">5</p>
                        </div>
                        <p class="text-sm font-medium text-gray-500 dark:text-gray-400">1,745 global ratings</p>
                        <div class="flex items-center mt-4">
                            <a href="#" class="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">5 star</a>
                            <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded-3xl dark:bg-gray-700">
                                <div class="h-5 bg-yellow-300 rounded-3xl" style={{ width: "70%" }}></div>
                            </div>
                            <span class="text-sm font-medium text-gray-500 dark:text-gray-400">70%</span>
                        </div>
                        <div class="flex items-center mt-4">
                            <a href="#" class="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">4 star</a>
                            <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded-3xl dark:bg-gray-700">
                                <div class="h-5 bg-yellow-300 rounded-3xl" style={{ width: "17%" }}></div>
                            </div>
                            <span class="text-sm font-medium text-gray-500 dark:text-gray-400">17%</span>
                        </div>
                        <div class="flex items-center mt-4">
                            <a href="#" class="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">3 star</a>
                            <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded-3xl dark:bg-gray-700">
                                <div class="h-5 bg-yellow-300 rounded-3xl" style={{ width: "8%" }}></div>
                            </div>
                            <span class="text-sm font-medium text-gray-500 dark:text-gray-400">8%</span>
                        </div>
                        <div class="flex items-center mt-4">
                            <a href="#" class="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">2 star</a>
                            <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded-3xl dark:bg-gray-700">
                                <div class="h-5 bg-yellow-300 rounded-3xl" style={{ width: "4%" }}></div>
                            </div>
                            <span class="text-sm font-medium text-gray-500 dark:text-gray-400">4%</span>
                        </div>
                        <div class="flex items-center mt-4">
                            <a href="#" class="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">1 star</a>
                            <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded-3xl dark:bg-gray-700">
                                <div class="h-5 bg-yellow-300 rounded-3xl" style={{ width: "1%" }}></div>
                            </div>
                            <span class="text-sm font-medium text-gray-500 dark:text-gray-400">1%</span>
                        </div>

                    </div>
                    <div className="flex flex-col w-1/3 items-center ">
                        <img
                            src={course.author.photoURL}
                            className="rounded-full w-8 h-8"
                        />
                        <div className="info-author text-center mt-2 relative">
                            <h2 className="text-sm font-semibold leading-6 text-slate-700">{course.author.displayName}</h2>
                            <span className="text-sm font-light leading-6 text-slate-500">{course.author.email}</span>
                            <div className="absolute bottom-[-4px] w-full h-[1px] bg-gray-300"></div>
                        </div>
                        <span className="text-sm font-light leading-6 text-slate-500">{course.author.email}</span>
                        <span className="text-sm font-light leading-6 text-slate-500">{course.author.email}</span>
                        <span className="text-sm font-light leading-6 text-slate-500">{course.author.email}</span>
                    </div>
                </div>
            )}
        </div>

    )
}

export default DetailsCoursePage