import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import { useContext, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FaRegLightbulb, FaRegUser, FaRegBookmark, FaRegMoon } from "react-icons/fa";
import { FaRegKeyboard } from "react-icons/fa6";
import { IoLanguage, IoSettingsOutline } from "react-icons/io5";
import { MdOutlineContactSupport, MdLiveTv, MdLogout } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import { RiInboxArchiveLine } from "react-icons/ri";
import { TiMessages } from "react-icons/ti";
import { FaBell } from "react-icons/fa6";

import Menu from "../../../components/Popper/Menu";
import Button from "../../../components/Button";
import Search from './Search';
import Skeleton from "react-loading-skeleton";
import { AuthContext, LoadingContext } from '../../../context';
import { AuthModalContext } from '../../../context';
import LoginModal from '../../../components/Modal/LoginModal';
import SignUpModal from '../../../components/Modal/SignUpModal';
import { Link } from 'react-router-dom';

function Header() {
    const LoadingContextValue = useContext(LoadingContext);

    const AuthContextValue = useContext(AuthContext)
    const currentUser = AuthContextValue.user

    const AuthModalContextValue = useContext(AuthModalContext)

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
            <div className="header-wrapper fixed z-10 w-full flex justify-center drop-shadow bg-white/70 backdrop-blur-md border-[#1618231F]">
                <div className="header-inner w-[1426px] flex justify-between items-center h-[60px] pl-3 pr-6">
                    <div className="logo">
                        {LoadingContextValue ? (
                            <Skeleton width={118} height={42} />
                        ) : (
                            <Link to="/" className='text-base font-bold font-sans tracking-widest bg-gradient-to-r from-blue-400 to bg-sky-400 bg-clip-text text-transparent'>
                                vi education
                            </Link>
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
                                                <TiMessages className="text-slate-600 w-[25px] h-[25px] ml-[8px]" />
                                            </div>
                                        </Tippy>
                                        <Tippy content="Thông báo" placement='bottom'>
                                            <div className="notice relative">
                                                <FaBell className="text-slate-600 w-[25px] h-[25px]" />
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
                                        <Button size="medium" type={"primary"} onClick={AuthModalContextValue.toggleLoginModal}>Đăng nhập</Button>
                                        <Button size="medium" type={"outline-primary"} onClick={AuthModalContextValue.toggleSignUpModal}>Đăng ký</Button>
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
            {AuthModalContextValue.isShowLoginModal && <LoginModal toggleLoginModal={AuthModalContextValue.toggleLoginModal} />}
            {AuthModalContextValue.isShowSignUpModal && <SignUpModal toggleSignUpModal={AuthModalContextValue.toggleSignUpModal} />}
        </>
    );
}

export default Header;
