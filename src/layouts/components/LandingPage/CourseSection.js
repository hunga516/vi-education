import React from 'react';

const CourseSection = () => {
    return (
        <section className="mt-56 w-full max-w-[1116px] max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a7108ed36fae172eb064f3c2860726a71c74b8184c97f0dc6fbc09ae48aaa47?placeholderIfAbsent=true&apiKey=0f38df9da2834ce78ff98df9da825ead" alt="Course illustration" className="object-contain w-96 grow w-full aspect-[1.25] max-md:mt-10 max-md:max-w-full" />
                </div>
                <div className="flex flex-col ml-5 w-[75%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col items-start self-stretch my-auto w-full font-medium text-white max-md:mt-10">
                        <h2 className="self-stretch text-5xl font-semibold tracking-tight leading-[48px] max-md:text-4xl max-md:leading-10">
                            Tất cả khóa học trong trong <span className='bg-gradient from-red-600 to-orange-600'>một nơi</span>
                        </h2>
                        <p className="mt-5 text-base tracking-wide leading-7 text-neutral-200">
                            Vi Education có thể làm điều đó khi bạn có thể tìm thấy mọi khóa học ở đây.
                        </p>
                        <button className="text-sm text-zinc-400 gap-2.5 self-stretch px-5 py-2.5 mt-6 rounded-md border border-zinc-400 border-solid min-h-[41px] w-[174px]">
                            Xem lộ trình chi tiết
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseSection;