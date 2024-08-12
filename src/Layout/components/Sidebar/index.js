import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse, faUserGroup } from "@fortawesome/free-solid-svg-icons"
import { faCompass, faUser, faCirclePlay, faClock } from "@fortawesome/free-regular-svg-icons"
import { FaHome, FaRegHeart } from "react-icons/fa";
import { FaRegCompass } from "react-icons/fa6";
import { RiUserFollowLine } from "react-icons/ri";
import { IoMdTrendingUp } from "react-icons/io";
import Button from "../../../components/Button";

function Sidebar() {

    return (
        <>
            <ul className="sidebar-wrapper flex flex-col text-[19px] leading-[45px] py-[10px] font-sans font-semibold tracking-wide border-b-[1px] border-[#1618231F]">
                <li className="flex items-center gap-[16px]">
                    <FaHome size="24px" /> Dành cho bạn
                </li>
                <li className="flex items-center gap-[16px]">
                    <RiUserFollowLine size="24px" /> Đang theo dõi
                </li>
                <li className="flex items-center gap-[16px]">
                    <FaRegCompass size="24px" /> Khám phá
                </li>
                <li className="flex items-center gap-[16px]">
                    <FaRegHeart size="24px" /> Yêu thích
                </li>
                <li className="flex items-center gap-[16px]">
                    <IoMdTrendingUp size="24px" /> Thịnh hành
                </li>
            </ul>
            <div className="require-login py-[20px] border-b-[1px] border-[#1618231F]">
                <div className="text-[#8a8b90] font-light text-[16px] tracking-wide mb-[10px]">Đăng nhập để follow các tác giả, thích video và xem bình luận.</div>
                <Button className="w-full" size="large" type={"outline-primary"}>
                    Đăng nhập
                </Button>
            </div>
            <div className="container relative mt-[20px]">
                <img src="https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/webapp/main/webapp-desktop/8152caf0c8e8bc67ae0d.png" className="h-[52px] w-full"></img>
                <h4 className="absolute w-[141px] left-[56px] top-1/2 transfrom -translate-y-1/2 text-[#fff5c9] text-[13px] font-semibold leading-[16px] text-left tracking-[0.035em]">Tạo hiệu ứng Tiktok, nhận phần thưởng.</h4>
            </div >

        </>
    )
}

export default Sidebar