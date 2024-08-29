import Skeleton from "react-loading-skeleton";
import { useContext } from "react";
import { LoadingContext } from "../context";

import { FaHeart, FaCommentDots, FaBookmark, FaShare } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import { AiOutlinePlus } from "react-icons/ai";

import images from "../assets/images"
import video from "../assets/video";
import Comment from "../layouts/components/Comment";

function HomePage() {

    const LoadingContextValue = useContext(LoadingContext)

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
                <div className="wrapper-reel flex justify-between gap-3 ml-60 mt-[20px] pb-[25px] mx-auto border-b-[1px]">
                    <div className="video w-[600px]">
                        {LoadingContextValue ? (
                            <Skeleton className="rounded-3xl" height={718} />
                        ) : (
                            <video className="rounded-3xl h-[718px]" src={item} controls type="video/mp4"></video>
                        )}
                    </div>
                    <div className="social-interaction flex flex-col items-center justify-end ">
                        <div className="avatar relative mb-[16px]">
                            {LoadingContextValue ? (
                                <Skeleton height={48} width={48} />
                            ) : (
                                <img className="h-[48px] w-[48px] rounded-full" src={images.sony} alt="avatar" />
                            )}
                            <FaCirclePlus className="absolute bottom-[-15%] translate-x-[50%] text-[#EA284E] text-[24px]" />
                        </div>
                        {ACTION_ITEMS.map((item, index) => (
                            <>
                                <button className="love-react flex text-[#000] my-[8px] justify-center items-center rounded-full h-[48px] w-[48px] bg-slate-300 text-[21px]">
                                    {LoadingContextValue ? (
                                        <Skeleton />
                                    ) : (
                                        <item.icon />
                                    )}
                                </button>
                                <span className="text-[14px] font-semibold leading-[21px]">
                                    {!LoadingContextValue && (
                                        <>{item.data.count}K</>
                                    )}
                                </span>
                            </>
                        ))}
                    </div>
                    {LoadingContextValue ? (
                        <Skeleton height={718} width={400} />
                    ) : (
                        <Comment />
                    )}
                </div>
            ))}

        </>
    )
}

export default HomePage