import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Skeleton from "react-loading-skeleton";

import { FaNoteSticky } from "react-icons/fa6";
import Button from "../components/Button";


function LearnCoursesPage() {
    const params = useParams()
    const [lesson, setLesson] = useState()

    useEffect(() => {
        const getLesson = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/lessons/${params.lesson_id}`)
                setLesson(response.data)
            } catch (error) {
                console.log(error);
            }
        }

        getLesson()
    }, [params.course_id, params.lesson_id])

    return (
        <div className="learn-courses-wrapper bg-white rounded-md">
            {lesson ? (
                <>
                    {/* <img src={lesson.images} alt="" className="w-full h-[600px] object-cover rounded-md" /> */}
                    <iframe width="1140" height="700" src="https://www.youtube.com/embed/ph65TPiNmKo?si=F9804kfPLkZ08si_&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                    <div className="px-8">
                        <div className="flex py-4 mt-10 justify-between items-center">
                            <div className="">
                                <h1 className="text-slate-800 text-xl font-bold">{lesson.title}</h1>
                                <p className="text-slate-600 text-sm">{lesson.description}</p>
                            </div>
                            <Button className="note-button text-slate-600 ring-red-800" type="upload">
                                <FaNoteSticky className="text-sm text-slate-600" />
                                <p className="text-sm leading-6">Thêm ghi chú</p>
                            </Button>
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: lesson.content }} className="w-full mt-12">
                        </div>
                    </div>
                </>
            ) : (
                <Skeleton />
            )}
        </div>
    )
}

export default LearnCoursesPage