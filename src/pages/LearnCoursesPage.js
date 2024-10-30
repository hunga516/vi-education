import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { FaNoteSticky } from "react-icons/fa6";
import Button from "../components/Button";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { duotoneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

function LearnCoursesPage() {
    const params = useParams();
    const [lesson, setLesson] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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

    const renderContentWithHighlight = (content) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(content, 'text/html');

        const highlightElements = (element) => { //doc.body = element
            if (element.tagName === 'H6') {
                return (
                    <SyntaxHighlighter language="javascript" style={duotoneLight}>
                        {element.textContent}
                    </SyntaxHighlighter>
                );
            }
            else if (element.tagName === 'H1' || element.tagName === 'H2') {
                return React.createElement(element.tagName.toLowerCase(), {
                    className: 'text-slate-800 text-xl font-bold', // Class tùy ý
                    key: element.textContent // Đảm bảo mỗi thẻ có key duy nhất
                }, element.textContent);
            }
            else if (element.tagName === 'UL') {
                // Render thẻ ul
                return (
                    <ul className="list-inside list-image-[url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNCAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjMzhiZGY4Ij48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMy42ODUuMTUzYS43NTIuNzUyIDAgMCAxIC4xNDMgMS4wNTJsLTggMTAuNWEuNzUuNzUgMCAwIDEtMS4xMjcuMDc1bC00LjUtNC41YS43NS43NSAwIDAgMSAxLjA2LTEuMDZsMy44OTQgMy44OTMgNy40OC05LjgxN2EuNzUuNzUgMCAwIDEgMS4wNS0uMTQzWiIgLz48L3N2Zz4=)]" key={element.textContent}>
                        {Array.from(element.children).map(child => highlightElements(child))}
                    </ul>
                );
            }
            else if (element.tagName === 'LI') {
                // Render thẻ li
                return (
                    <li className="ml-4 text-slate-800 leading-8" key={element.textContent}>
                        {element.textContent}
                    </li>
                );
            }
            else if (element.tagName === 'P') {
                return React.createElement(element.tagName.toLowerCase(), {
                    className: 'text-slate-800 mt-2', // Class tùy ý
                    key: element.textContent // Đảm bảo mỗi thẻ có key duy nhất
                }, element.textContent);
            }
            else if (element.children) {
                return React.createElement(element.tagName.toLowerCase(), { key: element.textContent },
                    Array.from(element.children).map(child => highlightElements(child))
                );
            }
            return element.textContent;
        };

        return highlightElements(doc.body);
    };


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
                        <p className="text-sm leading-6">Thêm ghi chú</p>
                    </Button>
                </div>
                <div className="w-full mt-12">
                    {renderContentWithHighlight(lesson.content)}
                </div>
            </div>
        </div>
    );
}

export default LearnCoursesPage;
