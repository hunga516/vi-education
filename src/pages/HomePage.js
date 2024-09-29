import images from "../assets/images"

import { FaUsers } from "react-icons/fa"
import { BsFillClockFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import axios from "axios";
import request from "../utils/request";
import { Link } from "react-router-dom";

function HomePage() {
    const [courses, setCourses] = useState([])

    useEffect(() => {

        const getCourses = async () => {
            try {
                const response = await request.get('/courses')
                setCourses(response.data)
            } catch (error) {
                console.log(error);
            }
        }

        getCourses();
    }, [])

    return (
        <>
            <div className="home-page-wrapper bg-white rounded-md shadow-2xl px-5 py-4">
                <img
                    src={"https://caodang.fpt.edu.vn/wp-content/uploads/express-js-an-ideal-node-js-framework-to-develop-enterprise-web-applications.jpg"}
                    className="h-100 w-full rounded-2xl object-"
                    alt=""
                />
                <h1 className="font-semibold text-gray-900 leading-9 mt-6">Khoá học mới nhất</h1>
                {/* list courses */}
                <div className="flex flex-wrap gap-x-2 gap-y-4 items-center mt-2">
                    {courses.map((item, index) => (
                        <Link to={`/courses/${item._id}`} className="course-item-info" key={index}>
                            < img src={item.images} alt="course" className="w-64 h-[150px] object-cover rounded-tl-xl rounded-tr-xl" />
                            <div className="course-info-content flex flex-col gap-2 w-64 px-5 py-4 rounded-bl-xl rounded-br-xl bg-[#F7F7F7]"> {/* Thêm padding mà không thay đổi kích thước */}
                                <h3 className="text-lg font-medium leading-7 text-gray-800 overflow-hidden text-ellipsis">{item.title}</h3>
                                <span className="text-sm font-medium leading-6 text-gray-600 overflow-hidden text-ellipsis">{item.description}</span>
                                <div className="flex justify-between items-center mt-4">
                                    <div className="user-upload flex items-center gap-1">
                                        <img src={images.sony} alt="" className="w-[16px] rounded-full" />
                                        <span className="text-sm leading-6 font-medium text-gray-600">Sony Việt Nam</span>
                                    </div>
                                    <span className="flex gap-1 items-center text-sm font-medium leading-6 text-gray-600">
                                        120
                                        <FaUsers />
                                    </span>
                                    <span className="flex gap-1 items-center text-sm font-medium leading-6 text-gray-600">
                                        12
                                        <BsFillClockFill />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* list courses */}
                <div className="flex flex-wrap gap-x-2 gap-y-4 items-center mt-2">
                    <div className="course-item-info">
                        <img src={images.sony} alt="course" className="w-[260px] h-[150px] object-cover rounded-tl-xl rounded-tr-xl" />
                        <div className="course-info-content flex flex-col gap-2 px-5 py-4 rounded-bl-xl rounded-br-xl bg-[#F7F7F7]"> {/* Thêm padding mà không thay đổi kích thước */}
                            <h3 className="text-lg font-medium leading-7 text-gray-800">Sony Alpha 7 III</h3>
                            <span className="text-sm font-medium leading-6 text-gray-600">Sony</span>
                            <div className="flex justify-between items-center mt-4">
                                <div className="user-upload flex items-center gap-1">
                                    <img src={images.sony} alt="" className="w-[16px] rounded-full" />
                                    <span className="text-sm leading-6 font-medium text-gray-600">Sony Việt Nam</span>
                                </div>
                                <span className="flex gap-1 items-center text-sm font-medium leading-6 text-gray-600">
                                    120
                                    <FaUsers />
                                </span>
                                <span className="flex gap-1 items-center text-sm font-medium leading-6 text-gray-600">
                                    12
                                    <BsFillClockFill />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="course-item-info">
                        <img src={images.sony} alt="course" className="w-[260px] h-[150px] object-cover rounded-tl-xl rounded-tr-xl" />
                        <div className="course-info-content flex flex-col gap-2 px-5 py-4 rounded-bl-xl rounded-br-xl bg-[#F7F7F7]"> {/* Thêm padding mà không thay đổi kích thước */}
                            <h3 className="text-lg font-medium leading-7 text-gray-800">Sony Alpha 7 III</h3>
                            <span className="text-sm font-medium leading-6 text-gray-600">Sony</span>
                            <div className="flex justify-between items-center mt-4">
                                <div className="user-upload flex items-center gap-1">
                                    <img src={images.sony} alt="" className="w-[16px] rounded-full" />
                                    <span className="text-sm leading-6 font-medium text-gray-600">Sony Việt Nam</span>
                                </div>
                                <span className="flex gap-1 items-center text-sm font-medium leading-6 text-gray-600">
                                    120
                                    <FaUsers />
                                </span>
                                <span className="flex gap-1 items-center text-sm font-medium leading-6 text-gray-600">
                                    12
                                    <BsFillClockFill />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="course-item-info">
                        <img src={images.sony} alt="course" className="w-[260px] h-[150px] object-cover rounded-tl-xl rounded-tr-xl" />
                        <div className="course-info-content flex flex-col gap-2 px-5 py-4 rounded-bl-xl rounded-br-xl bg-[#F7F7F7]"> {/* Thêm padding mà không thay đổi kích thước */}
                            <h3 className="text-lg font-medium leading-7 text-gray-800">Sony Alpha 7 III</h3>
                            <span className="text-sm font-medium leading-6 text-gray-600">Sony</span>
                            <div className="flex justify-between items-center mt-4">
                                <div className="user-upload flex items-center gap-1">
                                    <img src={images.sony} alt="" className="w-[16px] rounded-full" />
                                    <span className="text-sm leading-6 font-medium text-gray-600">Sony Việt Nam</span>
                                </div>
                                <span className="flex gap-1 items-center text-sm font-medium leading-6 text-gray-600">
                                    120
                                    <FaUsers />
                                </span>
                                <span className="flex gap-1 items-center text-sm font-medium leading-6 text-gray-600">
                                    12
                                    <BsFillClockFill />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <h1 className="font-semibold text-gray-900 leading-9 mt-6">Khoá học mới nhất</h1>
                {/* list courses */}
                <div className="flex flex-wrap gap-x-2 gap-y-4 items-center mt-2">
                    <div className="course-item-info">
                        <img src={images.sony} alt="course" className="w-[260px] h-[150px] object-cover rounded-tl-xl rounded-tr-xl" />
                        <div className="course-info-content flex flex-col gap-2 px-5 py-4 rounded-bl-xl rounded-br-xl bg-[#F7F7F7]"> {/* Thêm padding mà không thay đổi kích thước */}
                            <h3 className="text-lg font-medium leading-7 text-gray-800">Sony Alpha 7 III</h3>
                            <span className="text-sm font-medium leading-6 text-gray-600">Sony</span>
                            <div className="flex justify-between items-center mt-4">
                                <div className="user-upload flex items-center gap-1">
                                    <img src={images.sony} alt="" className="w-[16px] rounded-full" />
                                    <span className="text-sm leading-6 font-medium text-gray-600">Sony Việt Nam</span>
                                </div>
                                <span className="flex gap-1 items-center text-sm font-medium leading-6 text-gray-600">
                                    120
                                    <FaUsers />
                                </span>
                                <span className="flex gap-1 items-center text-sm font-medium leading-6 text-gray-600">
                                    12
                                    <BsFillClockFill />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="course-item-info">
                        <img src={images.sony} alt="course" className="w-[260px] h-[150px] object-cover rounded-tl-xl rounded-tr-xl" />
                        <div className="course-info-content flex flex-col gap-2 px-5 py-4 rounded-bl-xl rounded-br-xl bg-[#F7F7F7]"> {/* Thêm padding mà không thay đổi kích thước */}
                            <h3 className="text-lg font-medium leading-7 text-gray-800">Sony Alpha 7 III</h3>
                            <span className="text-sm font-medium leading-6 text-gray-600">Sony</span>
                            <div className="flex justify-between items-center mt-4">
                                <div className="user-upload flex items-center gap-1">
                                    <img src={images.sony} alt="" className="w-[16px] rounded-full" />
                                    <span className="text-sm leading-6 font-medium text-gray-600">Sony Việt Nam</span>
                                </div>
                                <span className="flex gap-1 items-center text-sm font-medium leading-6 text-gray-600">
                                    120
                                    <FaUsers />
                                </span>
                                <span className="flex gap-1 items-center text-sm font-medium leading-6 text-gray-600">
                                    12
                                    <BsFillClockFill />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="course-item-info">
                        <img src={images.sony} alt="course" className="w-[260px] h-[150px] object-cover rounded-tl-xl rounded-tr-xl" />
                        <div className="course-info-content flex flex-col gap-2 px-5 py-4 rounded-bl-xl rounded-br-xl bg-[#F7F7F7]"> {/* Thêm padding mà không thay đổi kích thước */}
                            <h3 className="text-lg font-medium leading-7 text-gray-800">Sony Alpha 7 III</h3>
                            <span className="text-sm font-medium leading-6 text-gray-600">Sony</span>
                            <div className="flex justify-between items-center mt-4">
                                <div className="user-upload flex items-center gap-1">
                                    <img src={images.sony} alt="" className="w-[16px] rounded-full" />
                                    <span className="text-sm leading-6 font-medium text-gray-600">Sony Việt Nam</span>
                                </div>
                                <span className="flex gap-1 items-center text-sm font-medium leading-6 text-gray-600">
                                    120
                                    <FaUsers />
                                </span>
                                <span className="flex gap-1 items-center text-sm font-medium leading-6 text-gray-600">
                                    12
                                    <BsFillClockFill />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default HomePage