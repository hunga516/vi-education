import React from 'react';

const PracticeSection = () => {
    return (
        <section className="mt-44 w-full max-w-[1121px] max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col items-start mt-20 w-full font-medium tracking-wide text-white max-md:mt-10 max-md:max-w-full">
                        <h2 className="self-stretch text-5xl font-semibold leading-[55px] max-md:max-w-full max-md:text-4xl max-md:leading-[49px]">
                            Chạy code ngay trên trình duyệt
                        </h2>
                        <p className="mt-6 text-2xl leading-7 text-neutral-300 max-md:max-w-full">
                            Thực hành mọi nơi trên mọi thiết bị từ desktop đến thiết bị di động ngay trên Vi Education compiler
                        </p>
                        <button className="gap-2.5 self-stretch px-5 py-2.5 mt-6 text-xl rounded-xl border border-white border-solid min-h-[41px] w-[258px]">
                            Thực hành các bài tập ngay
                        </button>
                    </div>
                </div>
                <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/226a98cac579ad2ae51de46a2d9caee3009dcdcc07c30d8a02d3e56c10ccf911?placeholderIfAbsent=true&apiKey=0f38df9da2834ce78ff98df9da825ead" alt="Practice illustration" className="object-contain grow w-full aspect-[1.14] max-md:mt-10 max-md:max-w-full" />
                </div>
            </div>
        </section>
    );
};

export default PracticeSection;