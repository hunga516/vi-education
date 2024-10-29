import 'tippy.js/dist/tippy.css'; // optional
import { useContext, useState } from 'react';

import { AuthContext, LoadingContext } from '../../../context';
import { AuthModalContext } from '../../../context';

import { MdNavigateBefore } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";

function BottomBarLearn() {
    const LoadingContextValue = useContext(LoadingContext);

    const AuthContextValue = useContext(AuthContext)
    const currentUser = AuthContextValue.user

    const AuthModalContextValue = useContext(AuthModalContext)


    return (
        <>
            <div className="bottom-learn-wrapper flex flex-row items-center justify-center fixed z-10 bottom-0 w-full h-16 drop-shadow bg-white/70 backdrop-blur-md border-[#1618231F]">
                <div className="flex flex-row items-center justify-center">
                    <div className=''></div>
                    <div className='flex'>
                        <button className='flex gap-2 items-center text-slate-600 px-4'>
                            <MdNavigateBefore className='text-2xl' />
                            Bài trước
                        </button>
                        <button className='flex gap-2 items-center text-blue-600 px-4 py-2'>
                            Tiếp theo
                            <MdNavigateNext className='text-2xl' />
                        </button>
                    </div>
                    <div className=''></div>
                </div>
            </div >
        </>
    );
}

export default BottomBarLearn;
