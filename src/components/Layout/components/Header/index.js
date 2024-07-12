import React, { useRef } from 'react';
import images from '../../../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { useEffect } from 'react';

function Header() {
    const search = useRef()
    const searchIconRef = useRef()

    useEffect(() => {
        const handleOver = () => {
            searchIconRef.current.classList.add('bg-[#1618230f]')
            search.current.classList.add('border-[1px]', 'border-[#1618230f]')
        }
        const handleOut = () => {
            searchIconRef.current.classList.remove('bg-[#1618230f]')
            search.current.classList.remove('border-[1px]', 'border-[#1618230f]')
        }
        search.current.addEventListener('mouseover', handleOver)
        search.current.addEventListener('mouseout', handleOut)
        return () => {
            search.current.removeEventListener('mouseover', handleOver)
            search.current.removeEventListener('mouseout', handleOut)
        }
    }, [])


    return (
        <header className="wrapper h-default-layout-header flex justify-center bg-white border-b-2 border-black">
            <div className="inner flex justify-between h-full w-default-layout-width">
                <div className="logo w-64 h-[58px]">
                    <img src={images.logo} alt="tiktok" />
                </div>
                <div
                    ref={search}
                    className="search flex items-center content-center border-[2px] border-transparent pl-[16px] bg-[#F1F1F2] self-center w-[361px] h-[46px] rounded-[92px]"
                >
                    <input
                        className="input focus:outline-none h-full bg-transparent w-full"
                        placeholder="Tìm video hoặc người dùng..."
                    />
                    <button className="clear">
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon icon={faCircle} />
                    <button
                        ref={searchIconRef}
                        className="search-icon  w-[52px] py-[11px] pl-[12px] pr-[16px] color-[#a7a7ab] rounded-r-[92px] hover:bg-[#1618230f]"
                    >
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className="menu w-[200px] bg-slate-500"></div>
            </div>
        </header>
    );
}

export default Header;
