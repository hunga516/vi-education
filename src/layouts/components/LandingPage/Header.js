import React from 'react';

const Header = () => {
    return (
        <header className="flex flex-wrap gap-5 justify-between self-stretch w-full text-base max-md:max-w-full">
            <div className="relative text-nowrap my-auto font-bold text-white tracking-[4.5px]">
                vi education
                <div className='absolute w-20 h-20 bg-blue-500 blur-3xl top-[-40px]'></div>
            </div>
            <nav className="flex gap-10 items-center font-semibold tracking-widest text-zinc-400 max-md:max-w-full">
                <a href="#" className="font-light tracking-wide grow self-stretch my-auto">khóa học</a>
                <a href="#" className="font-light tracking-wide self-stretch my-auto">giảng viên</a>
                <a href="#" className="font-light tracking-wide self-stretch my-auto">hỗ trợ</a>
                <button className="text-sm tracking-wide font-light gap-2.5 self-stretch px-4 py-1 text-white bg-blue-500 rounded-md">
                    Đăng ký
                </button>
            </nav>
        </header>
    );
};

export default Header;