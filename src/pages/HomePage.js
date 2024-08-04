import images from "../assets/images"
import { FaHeart, FaCommentDots, FaBookmark, FaShare } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import video from "../assets/video";

function HomePage() {

    return (
        <>
            <div className="wrapper flex w-[692px] mt-[20px] mx-auto">
                <div className="video w-[473px] mr-[20px]">
                    <video className="rounded-3xl" src={video.sony} controls type="video/mp4" autoplay></video>
                </div>
                <div className="social-interaction flex flex-col items-center justify-end ">
                    <div className="avatar relative mb-[16px]">
                        <img className=" h-[48px] w-[48px] rounded-full" src={images.sony} />
                        <FaCirclePlus className="absolute bottom-[-15%] translate-x-[50%] text-[#EA284E] text-[24px]" />
                    </div>
                    <button className="love-react flex text-[#000] my-[8px] justify-center items-center rounded-full h-[48px] w-[48px] bg-slate-300 text-[21px]">
                        <FaHeart />
                    </button>
                    <span className="text-[14px] font-semibold leading-[21px]">555.6K</span>
                    <button className="love-react flex text-[#000] my-[8px] justify-center items-center rounded-full h-[48px] w-[48px] bg-slate-300 text-[21px]">
                        <FaCommentDots />
                    </button>
                    <span className="text-[14px] font-semibold leading-[21px]">33.2K</span>
                    <button className="love-react flex text-[#000] my-[8px] justify-center items-center rounded-full h-[48px] w-[48px] bg-slate-300 text-[21px]">
                        <FaBookmark />
                    </button>
                    <span className="text-[14px] font-semibold leading-[21px]">455</span>
                    <button className="love-react flex text-[#000] my-[8px] justify-center items-center rounded-full h-[48px] w-[48px] bg-slate-300 text-[21px]">
                        <FaShare />
                    </button>
                    <span className="text-[14px] font-semibold leading-[21px]">3223</span>
                </div>
            </div>
        </>
    )
}

export default HomePage