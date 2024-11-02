import { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

import { AuthContext, LoadingContext } from "../../../context";
import { Link } from "react-router-dom";
import axios from "axios";

import { AiOutlinePlus } from "react-icons/ai";
import { IoPlayCircle } from "react-icons/io5";
import { AiOutlineMinus } from "react-icons/ai";

function SidebarLeftLearn({ className }) {
    const LoadingContextValue = useContext(LoadingContext);
    const location = useLocation();
    const params = useParams()
    const { userId } = useContext(AuthContext)
    const [lessons, setLessons] = useState()
    const [lessonsLearned, setLessonsLearned] = useState()
    const [chapters, setChapters] = useState()
    const [isOpen, setIsOpenAccordion] = useState({
        accordion1: false,
        accordion2: false,
        accordion3: false
    });

    console.log(params);


    useEffect(() => {
        const getLessonsByCourseId = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/lessons?course_id=${params.course_id}&sort=lessonOrder&order=asc`)
                setLessons(response.data.lessons)

                const uniqueChapters = [...new Set(response.data.lessons.map((lesson) => lesson.chapter))]
                setChapters(uniqueChapters)
            } catch (error) {
                console.log(error);
            }
        }

        const getLessonsLearnedByUser = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/lessons/check-user-eligibility?lesson_id=${params.lesson_id}&user_id=${userId}`)

            } catch (error) {
                console.log(error);
            }
        }


        getLessonsByCourseId()
        // getLessonsLearnedByUser()
    }, [params.lesson_id])

    const toggleAccordion = (accordion) => {
        setIsOpenAccordion((prev) => ({ ...prev, [accordion]: !prev[accordion] }));
    };

    const handleGetLessonsOnChapter = (chapter) => {
        return lessons.filter(lesson => lesson.chapter === chapter)
    }

    return (
        <aside
            className={`${className} flex flex-col w-[250px] drop-shadow-md box-border`}
            style={{
                height: 'calc(100vh - 61px)',
                // backgroundImage: `url(${images.background})`
            }}
        >
            <div className="flex flex-col justify-between flex-1 pt-2 px-5 pb-4 border-r-[1px] border-gray-400/30">
                <nav className="-mx-3 space-y-3 ">
                    {LoadingContextValue ? (
                        <>
                            <Skeleton width={200} height={24} />
                            <Skeleton width={200} height={24} />
                            <Skeleton width={200} height={24} />
                            <Skeleton width={200} height={24} />
                            <Skeleton width={200} height={24} />
                            <Skeleton width={200} height={24} />
                            <Skeleton width={200} height={24} />
                        </>
                    ) : (
                        <>
                            <div className="container-accordion flex flex-col w-full pb-20">
                                {chapters && (
                                    chapters.map((chapter, index) => (
                                        <div className="accordion">
                                            <div onClick={() => toggleAccordion(`accordion${index + 1}`)} className="px-4 py-3 bg-gray-200/40 hover:bg-gray-200/80 rounded-md cursor-pointer">
                                                <div className="flex items-center gap-2">
                                                    {isOpen[`accordion${index + 1}`] ? (
                                                        <AiOutlineMinus className="text-bluePrimary flex-shrink-0" />
                                                    ) : (
                                                        <AiOutlinePlus className="text-bluePrimary flex-shrink-0" />
                                                    )}
                                                    <p className="text-sm text-slate-800 tracking-wide font-medium">{chapter}</p>
                                                </div>
                                            </div>
                                            <div className={`flex gap-1 flex-col mt-1 transition-all duration-300 ease-in-out overflow-hidden last:mb-1 ${isOpen[`accordion${index + 1}`] ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                                {handleGetLessonsOnChapter(chapter).map((lesson, index) => (
                                                    <Link to={`/courses/${params.course_id}/lessons/${lesson._id}`}>
                                                        <div className="flex gap-2 items-center h-16 pl-6 pr-4 py-3 border-b-[0.5px] rounded-md duration-300 hover:bg-gray-200/80" key={index}>
                                                            <IoPlayCircle className="text-bluePrimary/70 text-sm flex-shrink-0 w-4 h-4" />
                                                            <p className="text-sm">{lesson.title}</p>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </>
                    )}
                </nav>
            </div>
        </aside >
    )
}

export default SidebarLeftLearn