import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse, faUserGroup } from "@fortawesome/free-solid-svg-icons"
import { faCompass, faUser, faCirclePlay, faClock } from "@fortawesome/free-regular-svg-icons"

function Sidebar() {

    return (
        <>
            <ul className="nav flex flex-col text-[19px] leading-[45px] py-[10px] font-sans font-semibold tracking-wide border-b-[1px] border-[#1618231F]">
                <li>
                    <i className="mr-[10px]">
                        <FontAwesomeIcon icon={faHouse} />
                    </i>
                    Dành cho bạn
                </li>
                <li>
                    <i className="mr-[10px]">
                        {/* <FontAwesomeIcon icon={faUserGroup} /> */}
                        <FontAwesomeIcon icon={faClock} />
                    </i>
                    Đang follow
                </li>
                <li>
                    <i className="mr-[10px]">
                        <FontAwesomeIcon icon={faCompass} />
                    </i>
                    Khám phá
                </li>
                <li>
                    <i className="mr-[10px]">
                        <FontAwesomeIcon icon={faCirclePlay} />
                    </i>
                    Live
                </li>
                <li>
                    <i className="mr-[10px]">
                        <FontAwesomeIcon icon={faUser} />
                    </i>
                    Hồ sơ
                </li>
            </ul>
            <div className="require-login py-[20px] border-b-[1px] border-[#1618231F]">
                <div className="text-[#8a8b90] font-light text-[16px] tracking-wide">Đăng nhập để follow các tác giả, thích video và xem bình luận.</div>
                <button className="w-full border-[1px] border-red-500 text-[18px] py-[6px] px-[8px] rounded-md mt-[15px]">
                    <h1 className="text-red-500">Đăng nhập</h1>
                </button>
            </div>
            <div className="container relative mt-[20px]">
                <img src="https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/webapp/main/webapp-desktop/8152caf0c8e8bc67ae0d.png" className="h-[52px] w-full"></img>
                <h4 className="absolute w-[141px] left-[56px] top-1/2 transfrom -translate-y-1/2 text-[#fff5c9] text-[14px] font-semibold leading-[16px] text-left tracking-[0.035em]">Tạo hiệu ứng Tiktok, nhận phần thưởng.</h4>
            </div >

        </>
    )
}

export default Sidebar