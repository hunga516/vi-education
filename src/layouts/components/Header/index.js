import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import { useContext } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FaRegLightbulb, FaRegUser, FaRegBookmark, FaRegMoon } from "react-icons/fa";
import { FaRegKeyboard } from "react-icons/fa6";
import { IoLanguage, IoSettingsOutline } from "react-icons/io5";
import { MdOutlineContactSupport, MdLiveTv, MdLogout } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import { RiInboxArchiveLine } from "react-icons/ri";

import Menu from "../../../components/Popper/Menu";
import Button from "../../../components/Button";
import images from "../../../assets/images";
import Search from './Search';
import Skeleton from "react-loading-skeleton";
import { AuthContext, LoadingContext } from '../../../context';

function Header() {
    const LoadingContextValue = useContext(LoadingContext);
    const AuthContextValue = useContext(AuthContext)
    const currentUser = AuthContextValue.user

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
            to: "",
            title: "Đăng xuất",
            separate: true,
            onClick: AuthContextValue.handleSignOut
        }
    ];

    const handleOnChange = (menuItem) => {
        console.log('Selected Item:', menuItem);
    };


    return (
        <>
            <div className="header-wrapper fixed w-full flex justify-center border-b-[1px] bg-white border-[#1618231F]">
                <div className="header-inner flex justify-between items-center w-full h-[60px] pl-4 pr-6">
                    <div className="logo h-[42px] w-[118px]">
                        {LoadingContextValue ? (
                            <Skeleton width={118} height={42} />
                        ) : (
                            <img src={images.logo} alt="logo" />
                        )}
                    </div>

                    <Search />

                    <div className="action flex items-center gap-[24px]">
                        {LoadingContextValue ? (
                            <>
                                <Skeleton circle width={32} height={32} />
                                <Skeleton width={100} height={40} />
                            </>
                        ) : (
                            <>
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
                                        <Tippy content="Thông báo" placement='bottom'>
                                            <div className="notice relative">
                                                <RiInboxArchiveLine className="w-[25px] h-[25px]" />
                                                <span className="absolute top-[-4px] right-[-4px] w-[16px] h-[16px] bg-primary text-white text-xs flex items-center justify-center rounded-full">
                                                    9
                                                </span>
                                            </div>
                                        </Tippy>
                                        <Menu items={AVATAR_ITEMS} onChange={handleOnChange}>
                                            <img className="avatar-img w-[32px] h-[32px] rounded-full" src={AuthContextValue.user.photoURL} />
                                        </Menu>
                                    </>
                                ) : (
                                    <>
                                        <Button size="medium" type={"primary"} onClick={() => alert()}>Đăng nhập</Button>
                                        <Menu items={MENU_ITEMS} onChange={handleOnChange}>
                                            <i className="menu-icon text-[20px] px-2">
                                                <FontAwesomeIcon icon={faEllipsisVertical} />
                                            </i>
                                        </Menu>
                                    </>
                                )}
                            </>
                        )}
                    </div>
                </div >
            </div >
        </>
    );
}

export default Header;
