import images from "../../../../assets/images"
import styles from './Header.module.css'
import Tippy from '@tippyjs/react/headless';
import Button from "../../../Button";
import Menu from "../../../Popper/Menu";
import { Wrapper as PopperWrapper } from "../../../Popper";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faEllipsisVertical, faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FaRegLightbulb } from "react-icons/fa";
import { FaRegKeyboard } from "react-icons/fa6";
import { IoLanguage } from "react-icons/io5";
import { MdOutlineContactSupport } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";

import { useEffect, useState } from "react";
function Header() {
    const [searchResult, setSearchResult] = useState([])
    // useEffect(() => {
    //     setTimeout(() => {
    //         if (searchResult.length === 0) {
    //             setSearchResult(["Ngoc Loc", "Bao Tran"])
    //         }
    //     }, 1000);
    // }, []);

    const MENU_ITEMS = [
        {
            icon: FaRegLightbulb,
            to: "/fa",
            title: "Trung tâm nhà sáng tạo LIVE"
        },
        {
            icon: IoLanguage,
            to: "/fa",
            title: "Ngôn ngữ",
            children: {
                title: "Ngôn ngữ",
                data: [
                    {
                        code: "vi",
                        title: "Tiếng Việt"
                    },
                    {
                        code: "en",
                        title: "Tiếng Anh"
                    }
                ]
            }
        },
        {
            icon: MdOutlineContactSupport,
            to: "/fa",
            title: "Phản hồi và trợ giúp"
        },
        {
            icon: FaRegKeyboard,
            to: "/fa",
            title: "Phím tắt trên bàn phím"
        },
    ]

    return (
        <>
            <div className="header-wrapper flex justify-center border-b-[1px] border-[#1618231F]">
                <div className="header-inner flex justify-between items-center w-[1380px] h-[60px] pl-4 pr-6">
                    <div className="logo h-[42px] w-[118px]">
                        <img src={images.logo} alt="logo"></img>
                    </div>
                    <div
                        className="search flex items-center w-[500px] h-[46px] border-[1px] border-transparent bg-[#1618230F] pl-[16px] py-[12px] rounded-[92px] focus-within:border-[#1618231F] hove">
                        <Tippy
                            className="bg-white min-w-[200px] h-full"
                            visible={false}
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
                                            <img className="avatar mr-[12px] w-[36px] h-[40px] rounded-[150px]" src="https://media.licdn.com/dms/image/D4E0BAQG-i2j7Q2WFIA/company-logo_200_200/0/1694593112031/img_logo?e=2147483647&v=beta&t=o1304VK0Zbh3CBA-8_LNYNZZCNrQjMIBS-nwKrAMzbY" alt=""></img>
                                            <div className="account-body flex-1">
                                                <h4 className="text-[16px] font-medium leading-[16px]">Ngoc Loc</h4>
                                                <span className="text-[14px] leading-[13px] font-medium text-gray-500/50 font-sans">ngloc156</span>
                                            </div>
                                        </div>
                                        <div className="account-item py-[9px] px-[16px] flex">
                                            <img className="avatar mr-[12px] w-[36px] h-[40px] rounded-[150px]" src="https://media.licdn.com/dms/image/D4E0BAQG-i2j7Q2WFIA/company-logo_200_200/0/1694593112031/img_logo?e=2147483647&v=beta&t=o1304VK0Zbh3CBA-8_LNYNZZCNrQjMIBS-nwKrAMzbY" alt=""></img>
                                            <div className="account-body flex-1">
                                                <h4 className="text-[16px] font-medium leading-[16px]">Ngoc Loc</h4>
                                                <span className="text-[14px] leading-[13px] font-medium text-gray-500/50 font-sans">ngloc156</span>
                                            </div>
                                        </div>
                                        <div className="account-item py-[9px] px-[16px] flex">
                                            <img className="avatar mr-[12px] w-[36px] h-[40px] rounded-[150px]" src="https://media.licdn.com/dms/image/D4E0BAQG-i2j7Q2WFIA/company-logo_200_200/0/1694593112031/img_logo?e=2147483647&v=beta&t=o1304VK0Zbh3CBA-8_LNYNZZCNrQjMIBS-nwKrAMzbY" alt=""></img>
                                            <div className="account-body flex-1">
                                                <h4 className="text-[16px] font-medium leading-[16px]">Ngoc Loc</h4>
                                                <span className="text-[14px] leading-[13px] font-medium text-gray-500/50 font-sans">ngloc156</span>
                                            </div>
                                        </div>
                                        <div className="account-item py-[9px] px-[16px] flex">
                                            <img className="avatar mr-[12px] w-[36px] h-[40px] rounded-[150px]" src="https://media.licdn.com/dms/image/D4E0BAQG-i2j7Q2WFIA/company-logo_200_200/0/1694593112031/img_logo?e=2147483647&v=beta&t=o1304VK0Zbh3CBA-8_LNYNZZCNrQjMIBS-nwKrAMzbY" alt=""></img>
                                            <div className="account-body flex-1">
                                                <h4 className="text-[16px] font-medium leading-[16px]">Ngoc Loc</h4>
                                                <span className="text-[14px] leading-[13px] font-medium text-gray-500/50 font-sans">ngloc156</span>
                                            </div>
                                        </div>
                                        <div className="account-item py-[9px] px-[16px] flex">
                                            <img className="avatar mr-[12px] w-[36px] h-[40px] rounded-[150px]" src="https://media.licdn.com/dms/image/D4E0BAQG-i2j7Q2WFIA/company-logo_200_200/0/1694593112031/img_logo?e=2147483647&v=beta&t=o1304VK0Zbh3CBA-8_LNYNZZCNrQjMIBS-nwKrAMzbY" alt=""></img>
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
                        <Button size="medium" type={"outline-dark"}>
                            <FontAwesomeIcon className="mr-[8px]" icon={faPlus} />
                            Tải lên
                        </Button>
                        <Button size="medium" type={"primary"} onClick={() => alert()}>Đăng nhập</Button>
                        <Menu items={MENU_ITEMS}>
                            <i className="menu-icon text-[20px] px-2">
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </i>
                        </Menu>
                        <div className="">
                            <button className="relative group">
                                My button
                                <div className="absolute hidden w-[200px] h-[200px] group-hover:block bg-red-500"></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Header