import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FaRegLightbulb, FaRegUser, FaRegBookmark, FaRegMoon } from "react-icons/fa";
import { FaRegKeyboard } from "react-icons/fa6";
import { IoLanguage, IoSettingsOutline } from "react-icons/io5";
import { MdOutlineContactSupport, MdLiveTv, MdLogout } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import { RiInboxArchiveLine } from "react-icons/ri";

import Menu from "../../../components/Popper/Menu";
import Button from "../../../components/Button";
import images from "../../../assets/images"
import Search from './Search';
function Header() {


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

    const AVATAR_ITEMS = [
        {
            icon: FaRegUser,
            to: "/",
            title: "Xem hồ sơ"
        },
        {
            icon: FaRegBookmark,
            to: "/",
            title: "Yêu thích"
        },
        {
            icon: MdLiveTv,
            to: "/",
            title: "LIVE Studio"
        },
        {
            icon: IoSettingsOutline,
            to: "/",
            title: "Cài đặt"
        },
        {
            icon: FaRegMoon,
            to: "/",
            title: "Chế độ tối"
        },
        ...MENU_ITEMS,
        {
            icon: MdLogout,
            to: "/",
            title: "Đăng xuất",
            separate: true
        }
    ]

    const handleOnChange = (menuItem) => {
        console.log('Selected Item:', menuItem);
    };


    const currentUser = true

    return (
        <>
            <div className="header-wrapper flex justify-center border-b-[1px] border-[#1618231F]">
                <div className="header-inner flex justify-between items-center w-[1380px] h-[60px] pl-4 pr-6">
                    <div className="logo h-[42px] w-[118px]">
                        <img src={images.logo} alt="logo"></img>
                    </div>

                    <Search />

                    <div className="action flex items-center gap-[24px]">
                        <Button size="medium" type={"outline-dark"}>
                            <FontAwesomeIcon className="mr-[8px]" icon={faPlus} />
                            Tải lên
                        </Button>
                        {currentUser ? (
                            <>
                                <Tippy content="Tin nhắn" placement='bottom'>
                                    <div className="messages">
                                        <FiSend className="w-[25px] h-[25px] ml-[8px]" />
                                    </div>
                                </Tippy>
                                <Tippy content="Thông báo" placement='bottom' >
                                    <div className="notice relative">
                                        <RiInboxArchiveLine className="w-[25px] h-[25px]" />
                                        <span className="absolute top-[-4px] right-[-4px] w-[16px] h-[16px] bg-primary text-white text-xs flex items-center justify-center rounded-full">
                                            9
                                        </span>
                                    </div>
                                </Tippy>
                                <Menu items={AVATAR_ITEMS} onChangeeee={handleOnChange}>
                                    <img className="avatar-img w-[32px] h-[32px] rounded-full" src="https://scontent.fhan4-3.fna.fbcdn.net/v/t1.15752-9/453596637_1136257037437506_6512093711973103295_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=9f807c&_nc_ohc=ve4AfuynBTgQ7kNvgH5tnsd&_nc_ht=scontent.fhan4-3.fna&oh=03_Q7cD1QGYDQ6rj1YKY8r6DmEttuC0a2VdcIjhk9zvMKEUhZolGA&oe=66DC340E"></img>
                                </Menu>
                            </>
                        ) : (
                            <>
                                <Button size="medium" type={"primary"} onClick={() => alert()}>Đăng nhập</Button>
                                <Menu items={MENU_ITEMS} onChangeeee={handleOnChange}>
                                    <i className="menu-icon text-[20px] px-2">
                                        <FontAwesomeIcon icon={faEllipsisVertical} />
                                    </i>
                                </Menu>
                            </>
                        )}
                    </div>
                </div >
            </div >
        </>
    )
}

export default Header