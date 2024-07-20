import images from "../../../../assets/images"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faCircle, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef } from "react";
function Header() {

    const searchRef = useRef(null)
    const searchIconRef = useRef(null)
    useEffect(() => {
        const handleOver = () => {
            searchIconRef.current.classList.add('bg-[#1618231F]')
            searchRef.current.classList.add('border-[#1618231F]')
            searchRef.current.classList.remove('border-transparent')
        }

        const handleOut = () => {
            searchIconRef.current.classList.remove('bg-[#1618231F]')
            searchRef.current.classList.remove('border-[#1618231F]')
            searchRef.current.classList.add('border-transparent')
        }

        searchRef.current.addEventListener('mouseover', handleOver)
        searchRef.current.addEventListener('mouseout', handleOut)
    }, [])

    return (
        <>
            <div className="wrapper flex justify-center">
                <div className="flex justify-between items-center content h-[60px] w-[1380px]">
                    <div className="logo h-[42px] w-[118px]">
                        <img src={images.logo}></img>
                    </div>
                    <div
                        ref={searchRef}
                        className="search flex items-center w-[500px] h-[46px] border-[1px] border-transparent bg-[#1618230F] pl-[16px] py-[12px] rounded-[92px]">
                        <input
                            placeholder="Nhap noi dung tim kiem ..."
                            className="input bg-transparent w-full text-[16px] h-[21px]"
                        />
                        <button className="deleteIcon w-[40px] text-[#A6A7AB]">
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        {/* <FontAwesomeIcon icon={faCircle} /> */}
                        <span className="w-[1px] h-[28px] bg-[#1618231F]"></span>
                        <button
                            ref={searchIconRef}
                            className="searchIcon pl-[11px] pr-[16px] py-[11px] rounded-r-[92px] text-[#4D4E57]">
                            <FontAwesomeIcon icon={faMagnifyingGlass} style={{ width: '20px', height: '20px' }} />
                        </button>
                    </div>
                    <div className="action"></div>
                </div>
            </div>
        </>
    )
}

export default Header