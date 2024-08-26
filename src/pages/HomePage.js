import images from "../assets/images"
import { FaHeart, FaCommentDots, FaBookmark, FaShare } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import video from "../assets/video";
import Skeleton from "react-loading-skeleton";
import { useContext } from "react";
import { loadingContext } from "../App";

function HomePage() {

    const loadingContextValue = useContext(loadingContext)

    const ACTION_ITEMS = [
        {
            icon: FaHeart,
            title: '',
            data: {
                count: 555.6
            }
        },
        {
            icon: FaCommentDots,
            title: '',
            data: {
                count: 33.2
            }
        },
        {
            icon: FaBookmark,
            title: '',
            data: {
                count: 500
            }
        },
        {
            icon: FaShare,
            title: '',
            data: {
                count: 1237
            }
        }
    ]

    const VIDEO_ITEMS = Object.values(video)

    return (
        <>
            {VIDEO_ITEMS.map(item => (
                <div className="wrapper flex w-[692px] mt-[20px] pb-[25px] mx-auto border-b-[1px]">
                    <div className="video w-[435px] mr-[20px]">
                        {loadingContextValue ? (
                            <Skeleton className="rounded-3xl" height={841} />
                        ) : (
                            <video className="rounded-3xl" src={item} controls type="video/mp4"></video>
                        )}
                    </div>
                    <div className="social-interaction flex flex-col items-center justify-end ">
                        <div className="avatar relative mb-[16px]">
                            {loadingContextValue ? (
                                <Skeleton height={48} width={48} />
                            ) : (
                                <img className=" h-[48px] w-[48px] rounded-full" src={images.sony} />
                            )}
                            <FaCirclePlus className="absolute bottom-[-15%] translate-x-[50%] text-[#EA284E] text-[24px]" />
                        </div>
                        {ACTION_ITEMS.map((item, index) => (
                            <>
                                <button className="love-react flex text-[#000] my-[8px] justify-center items-center rounded-full h-[48px] w-[48px] bg-slate-300 text-[21px]">
                                    {loadingContextValue ? (
                                        <Skeleton />
                                    ) : (
                                        <item.icon />
                                    )}
                                </button>
                                <span className="text-[14px] font-semibold leading-[21px]">
                                    {!loadingContextValue && (
                                        <>{item.data.count}K</>
                                    )}
                                </span>
                            </>
                        ))}
                    </div>
                </div>
            ))}
        </>
    )
}

export default HomePage