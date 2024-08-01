import images from "../../../../assets/images"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faEllipsisVertical, faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from "react";
function Header() {

    const searchRef = useRef(null)
    const searchIconRef = useRef(null)
    const inputRef = useRef(null)
    const [hasInput, setHasInput] = useState(false)

    const handleInput = (e) => {
        setHasInput(e.target.value.trim() !== '');
    };

    // const handleOver = () => {
    //     searchIconRef.current.classList.add('bg-[#1618231F]')
    //     searchRef.current.classList.add('border-[#1618231F]')
    //     searchRef.current.classList.remove('border-transparent')
    // }

    // const handleOut = () => {
    //     searchIconRef.current.classList.remove('bg-[#1618231F]')
    //     searchRef.current.classList.remove('border-[#1618231F]')
    //     searchRef.current.classList.add('border-transparent')
    // }

    // searchRef.current.addEventListener('mouseover', handleOver)
    // searchRef.current.addEventListener('mouseout', handleOut)

    return (
        <>
            <div className="wrapper flex justify-center border-b-[1px] border-[#1618231F]">
                <div className="flex justify-between items-center content h-[60px] w-[1380px]">
                    <div className="logo h-[42px] w-[118px]">
                        <img src={images.logo} alt="logo"></img>
                    </div>
                    <div
                        ref={searchRef}
                        className="search flex items-center w-[500px] h-[46px] border-[1px] border-transparent bg-[#1618230F] pl-[16px] py-[12px] rounded-[92px] focus-within:border-[#1618231F] hove">
                        <input
                            placeholder="Tìm kiếm"
                            className="input bg-transparent w-full h-[21px] outline-none caret-red-500 text-[#8a8b90] font-light text-[16px] tracking-wide"
                            ref={inputRef}
                            onInput={handleInput}
                        />
                        <button className="deleteIcon w-[40px] text-[#A6A7AB]">
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        {/* <FontAwesomeIcon icon={faCircle} /> */}
                        <span className="w-[1px] h-[28px] bg-[#1618231F]"></span>
                        <button
                            ref={searchIconRef}
                            className={`searchIcon pl-[11px] pr-[16px] py-[11px] rounded-r-[92px] ${hasInput ? 'text-[#565656]' : 'text-[#A6A7AB]'}`}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} style={{ width: '20px', height: '20px' }} />
                        </button>
                    </div>
                    <div className="action flex items-center gap-[16px]">
                        <button className="upload px-[16px] h-[36px] hover:bg-[#f8f8f8] border-[1px] border-[#1618231E]">
                            <i className="mr-[8px]">
                                <FontAwesomeIcon icon={faPlus} />
                            </i>
                            Tải lên
                        </button>
                        <button className="sign-in w-[100px] h-[36px] mx-auto my-auto hover:bg-[#ef2a51] rounded-[4px] bg-[#fe2c55] text-white">Đăng nhập</button>
                        <i className="px-[4px]">
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </i>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Header