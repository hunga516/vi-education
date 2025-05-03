import images from "../assets/images"

import { FaUsers } from "react-icons/fa"
import { BsFillClockFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import axios from "axios";
import request from "../utils/request";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Skeleton from "react-loading-skeleton";


function HomePage() {
    const [courses, setCourses] = useState([])

    useEffect(() => {

        const getCourses = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/courses`)
                setCourses(response.data.courses)
            } catch (error) {
                console.log(error);
            }
        }

        getCourses();
    }, [])

    console.log(courses);

    return (
        <>
            <div className="home-page-wrapper w-full p-2 mt-2">
                {/* <div className="w-full h-full container rounded-2xl">
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={20}
                        slidesPerView={1}
                        loop={true}
                        navigation // Đảm bảo có dòng này
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img
                                src={"https://aptech.vn/wp-content/uploads/2021/05/lap-trinh-java.png"}
                                loading="lazy" // Thêm thuộc tính này
                                className="rounded-2xl"
                                alt=""
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src={"https://aptech.vn/wp-content/uploads/2021/05/lap-trinh-java.png"}
                                loading="lazy" // Thêm thuộc tính này
                                className=" rounded-2xl"
                                alt=""
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src={"https://aptech.vn/wp-content/uploads/2021/05/lap-trinh-java.png"}
                                loading="lazy" // Thêm thuộc tính này
                                className=" rounded-2xl"
                                alt=""
                            />
                        </SwiperSlide>
                    </Swiper>
                </div> */}
                <h1 className="font-semibold text-gray-900 leading-9 mt-6">Khoá học mới nhất</h1>
                {/* list courses */}
                <div className="flex flex-col md:grid md:grid-cols-4 lg:grid lg:grid-cols-4 gap-2 mt-2">
                    {courses && courses.length > 0 ? (
                        courses.map((item, index) => (
                            <Link to={`/courses/${item._id}`} className="course-item-info" key={index}>
                                <img src={item.images} alt="course" className="object-cover w-full rounded-tl-xl rounded-tr-xl" />
                                <div className="course-info-content flex flex-col justify-between gap-2 h-40 px-5 py-4 rounded-bl-xl rounded-br-xl bg-[#F7F7F7]"> {/* Thêm padding mà không thay đổi kích thước */}
                                    <h3 className="text-sm font-semibold text-gray-800 overflow-hidden text-ellipsis">{item.title}</h3>
                                    <p className="text-pink-600 font-medium">2.399.000 vnđ</p>
                                    <div className="flex justify-between items-center mt-4">
                                        <div className="user-upload flex items-center gap-1">
                                            {item.author && (
                                                <>
                                                    <img src={item.author.photoURL} alt="" className="w-[16px] rounded-full" />
                                                    <span className="text-sm leading-6 font-medium text-gray-600">{item.author.displayName}</span>
                                                </>
                                            )}
                                        </div>
                                        <span className="flex gap-1 items-center text-sm font-medium leading-6 text-gray-600">
                                            <FaUsers />
                                            120
                                        </span>
                                        <span className="flex gap-1 items-center text-sm font-medium leading-6 text-gray-600">
                                            <BsFillClockFill />
                                            12
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <>
                            <Skeleton height={250} width="100%" />
                            <Skeleton height={250} />
                            <Skeleton height={250} />
                            <Skeleton height={250} />
                        </>
                    )}
                </div>
            </div >
        </>
    )
}

export default HomePage