import images from "../../../../assets/images"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faEllipsisVertical, faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";
import styles from './Header.module.css'
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from "../../../Popper";
function Header() {
    const [searchResult, setSearchResult] = useState([])
    // useEffect(() => {
    //     setTimeout(() => {
    //         if (searchResult.length === 0) {
    //             setSearchResult(["Ngoc Loc", "Bao Tran"])
    //         }
    //     }, 1000);
    // }, []);


    return (
        <>
            <div className="wrapper flex justify-center border-b-[1px] border-[#1618231F]">
                <div className="flex justify-between items-center content h-[60px] w-[1380px]">
                    <div className="logo h-[42px] w-[118px]">
                        <img src={images.logo} alt="logo"></img>
                    </div>
                    <div
                        className="search flex items-center w-[500px] h-[46px] border-[1px] border-transparent bg-[#1618230F] pl-[16px] py-[12px] rounded-[92px] focus-within:border-[#1618231F] hove">
                        <Tippy
                            className="bg-white min-w-[200px] h-full"
                            visible={true}
                            placement="bottom"
                            interactive={true}
                            render={attrs => (
                                <PopperWrapper>
                                    <div className="search-result" tabIndex="-1" {...attrs}>
                                        <ul>
                                            {searchResult.map(item => (
                                                <li>{item}</li>
                                            ))}
                                        </ul>

                                        <h2 className="">Accounts</h2>
                                        <div className="account-item py-[9px] px-[16px] flex">
                                            <img className="avatar mr-[12px] w-[36px] h-[40px] rounded-3xl" src="https://cdn.vjshop.vn/may-anh/mirrorless/sony/sony-alpha-7cr/1693312284-img-2072181-500x500.jpg" alt=""></img>
                                            <div className="account-body flex-1">
                                                <h4 className="text-[16px] font-medium leading-[16px]">Ngoc Loc</h4>
                                                <span className="text-[14px] leading-[13px] font-medium text-gray-500/50 font-sans">ngloc156</span>
                                            </div>
                                        </div>
                                        <div className="account-item py-[9px] px-[16px] flex">
                                            <img className="avatar mr-[12px] w-[36px] h-[40px] rounded-3xl" src="https://cdn.vjshop.vn/may-anh/mirrorless/sony/sony-alpha-7cr/1693312284-img-2072181-500x500.jpg" alt=""></img>
                                            <div className="account-body flex-1">
                                                <h4 className="text-[16px] font-medium leading-[16px]">Ngoc Loc</h4>
                                                <span className="text-[14px] leading-[13px] font-medium text-gray-500/50 font-sans">ngloc156</span>
                                            </div>
                                        </div>
                                        <div className="account-item py-[9px] px-[16px] flex">
                                            <img className="avatar mr-[12px] w-[36px] h-[40px] rounded-3xl" src="https://cdn.vjshop.vn/may-anh/mirrorless/sony/sony-alpha-7cr/1693312284-img-2072181-500x500.jpg" alt=""></img>
                                            <div className="account-body flex-1">
                                                <h4 className="text-[16px] font-medium leading-[16px]">Ngoc Loc</h4>
                                                <span className="text-[14px] leading-[13px] font-medium text-gray-500/50 font-sans">ngloc156</span>
                                            </div>
                                        </div>
                                        <div className="account-item py-[9px] px-[16px] flex">
                                            <img className="avatar mr-[12px] w-[36px] h-[40px] rounded-3xl" src="https://cdn.vjshop.vn/may-anh/mirrorless/sony/sony-alpha-7cr/1693312284-img-2072181-500x500.jpg" alt=""></img>
                                            <div className="account-body flex-1">
                                                <h4 className="text-[16px] font-medium leading-[16px]">Ngoc Loc</h4>
                                                <span className="text-[14px] leading-[13px] font-medium text-gray-500/50 font-sans">ngloc156</span>
                                            </div>
                                        </div>
                                        <div className="account-item py-[9px] px-[16px] flex">
                                            <img className="avatar mr-[12px] w-[36px] h-[40px] rounded-3xl" src="https://cdn.vjshop.vn/may-anh/mirrorless/sony/sony-alpha-7cr/1693312284-img-2072181-500x500.jpg" alt=""></img>
                                            <div className="account-body flex-1">
                                                <h4 className="text-[16px] font-medium leading-[16px]">Ngoc Loc</h4>
                                                <span className="text-[14px] leading-[13px] font-medium text-gray-500/50 font-sans">ngloc156</span>
                                            </div>
                                        </div>
                                    </div>
                                </PopperWrapper>
                            )}>
                            <input
                                placeholder="Tìm kiếm"
                                className={`${styles.input} bg-transparent w-full h-[21px] outline-none caret-red-500  text-[#8a8b90] font-light text-[16px] tracking-wide`}
                            />
                        </Tippy>
                        <button className="deleteIcon w-[40px] text-[#777778]">
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        {/* <FontAwesomeIcon icon={faCircle} /> */}
                        <span className="w-[1px] h-[28px] bg-[#1618231F]"></span>
                        <button
                            className={`${styles.searchIcon} pl-[12px] pr-[16px] py-[11px] rounded-r-[92px] text-[#A6A7AB] hover:bg-gray-200`}>
                            <div style={{ width: '24px', height: '24px' }} >
                                <FontAwesomeIcon icon={faMagnifyingGlass} style={{ width: '22px', height: '22px', strokeWidth: "0px" }} />
                            </div>
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