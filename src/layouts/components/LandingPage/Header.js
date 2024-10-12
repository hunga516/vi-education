import React from 'react';

const Header = () => {
    return (
        <header className="flex flex-wrap gap-5 justify-between self-stretch w-full text-base max-md:max-w-full">
            <div className="relative text-nowrap my-auto font-bold text-white tracking-[4.5px]">
                vi education
                <div className='absolute w-60 h-40 bg-gradient-to-r from-blue-500 to-purple-500 blur-2xl top-[-170px] left-[350px] -rotate-12'></div>
            </div>
            <nav className="flex gap-10 items-center font-semibold tracking-widest text-zinc-400 max-md:max-w-full">
                <a href="#" className="text-white font-normal text-sm tracking-normal grow self-stretch my-auto">Khoá học</a>
                <a href="#" className="text-white font-normal text-sm tracking-normal self-stretch my-auto">Giảng viên</a>
                <a href="#" className="text-white font-normal text-sm tracking-normal self-stretch my-auto">Hỗ trợ</a>
                <button className="text-sm tracking-normal font-semibold bg-gradient-to-r from-blue-700 via-blue-700 via-60% to-purple-500 to-100% px-4 py-2.5 text-white rounded-md">
                    Bắt đầu ngay
                </button>
            </nav>
        </header>
    );
};

export default Header;