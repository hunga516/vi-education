import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { FaNoteSticky } from "react-icons/fa6";
import Button from "../components/Button";
import { renderContentWithHighlight } from "../utils/renderContentWithHighlight";
import CreateTakeNoteModal from "../components/Modal/CreateTakeNoteModal";


function LearnCoursesPage() {
    const params = useParams();
    const [lesson, setLesson] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isShowCreateTakeNoteModal, setIsShowCreateTakeNoteModal] = useState(false)

    useEffect(() => {
        const getLesson = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/lessons/${params.lesson_id}`);
                setLesson(response.data);
            } catch (error) {
                setError("Lỗi khi tải bài học.");
            } finally {
                setLoading(false);
            }
        };

        getLesson();
    }, [params.lesson_id]);

    const toggleIsShowCreateTakeNoteModal = () => {
        setIsShowCreateTakeNoteModal(!isShowCreateTakeNoteModal)
    }

    if (loading) return <Skeleton height={600} width={1140} />;
    if (error) return <div>{error}</div>;

    return (
        <div className="learn-courses-wrapper bg-white rounded-md">
            <iframe
                className="rounded-md w-full h-[70vh]"
                src="https://www.youtube.com/embed/ph65TPiNmKo?controls=0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            <div className="px-8 pb-36">
                <div className="flex py-4 mt-10 justify-between items-center">
                    <div>
                        <h1 className="text-slate-800 text-xl font-bold">{lesson.title}</h1>
                        <p className="text-slate-600 text-sm mt-2">{lesson.description}</p>
                    </div>
                    <Button className="note-button text-slate-600 ring-red-800" type="upload">
                        <FaNoteSticky className="text-sm text-slate-600" />
                        <p onClick={() => toggleIsShowCreateTakeNoteModal()} className="text-sm leading-6">Thêm ghi chú</p>
                    </Button>
                </div>
                <div className="w-full mt-12">
                    {renderContentWithHighlight(lesson.content)}
                </div>
            </div>
            {isShowCreateTakeNoteModal && (
                <CreateTakeNoteModal toggleIsShowCreateTakeNoteModal={toggleIsShowCreateTakeNoteModal} />
            )}
        </div>
    );
}

export default LearnCoursesPage;
