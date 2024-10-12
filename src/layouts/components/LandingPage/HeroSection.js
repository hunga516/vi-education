import React from 'react';

import { IoCheckmarkSharp } from "react-icons/io5";
import { GrFormNextLink } from "react-icons/gr";

const HeroSection = () => {
    return (
        <section className="self-stretch mt-48 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col items-start mt-3.5 w-full font-medium max-md:mt-10 max-md:max-w-full">
                        <h1 className="self-stretch text-6xl font-bold tracking-tight text-white leading-[70px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
                            Tự học <span className="bg-gradient-to-tr from-blue-700 to-purple-600 text-transparent bg-clip-text">lập trình</span> từ cơ bản đến nâng cao
                        </h1>
                        <p className="mt-3.5 text-base tracking-wide leading-7 text-neutral-300">
                            Vi Education có thể làm điều đó khi bạn có thể tìm thấy mọi khóa học ở đây.
                        </p>
                        <div className="flex gap-5 mt-7 max-w-full text-xl w-[465px]">
                            <button className="flex items-center bg-gradient-to-b to-[#1733ae] from-blue-600  justify-center gap-2 text-base gap-2.5 self-stretch px-5 py-1 text-white rounded-lg min-h-[41px] w-[300px]">
                                <IoCheckmarkSharp />
                                Đăng ký học ngay
                            </button>
                            <button className="flex items-center justify-center text-base gap-2.5 self-stretch px-5 py-1 rounded-lg border border-solid border-zinc-400 min-h-[41px] text-zinc-400 w-[300px]">
                                Xem lộ trình chi tiết
                                <GrFormNextLink />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="relative flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
                    <div className='absolute w-60 h-40 bg-blue-500 blur-3xl bottom-0 right-[-350px]'></div>
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/30d509b0753197949a4e2d3aa5307845a4524b87edd92578c41ea3ac9b47182b?placeholderIfAbsent=true&apiKey=0f38df9da2834ce78ff98df9da825ead" alt="Educational illustration" className="object-contain grow w-full aspect-[1.19] max-md:mt-10" />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;