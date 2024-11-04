import Skeleton from "react-loading-skeleton";
import { useContext } from "react";
import { LoadingContext } from "../context";

import { FaHeart, FaCommentDots, FaBookmark, FaShare } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import { AiOutlinePlus } from "react-icons/ai";

import images from "../assets/images"
import video from "../assets/video";
import Comment from "../layouts/components/Comment";

function ReelsPage() {

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
            {VIDEO_ITEMS.map((item, index) => (
                <div className="wrapper-reel-page bg-white backdrop-blur-md shadow-2xl rounded-md ">
                    <div key={index} className={`flex px-5 py-4 gap-3 mx-auto border-b-[1px] first:mt-0 mt-[20px]`}>
                        <div className="video-container relative w-[350px] h-auto">
                            {LoadingContextValue ? (
                                <Skeleton className="rounded-md" width={350} height={600} />
                            ) : (
                                <>
                                    <video className="rounded-md w-full object-cover" src={item} type="video/mp4">
                                    </video>
                                    <div className="social-interaction absolute bottom-0 right-0 flex flex-col items-center justify-end p-4">
                                        <div className="avatar relative mb-6">
                                            {LoadingContextValue ? (
                                                <Skeleton height={48} width={48} />
                                            ) : (
                                                <img className="h-[48px] w-[48px] rounded-full" src={images.sony} alt="avatar" />
                                            )}
                                            <FaCirclePlus className="absolute bottom-[-8%] right-[33%] text-bluePrimary text-[16px]" />
                                        </div>
                                        {ACTION_ITEMS.map((item, index) => (
                                            <div key={index} className="flex flex-col items-center mb-4">
                                                <button className="love-react flex text-white justify-center items-center rounded-full h-[40px] w-[40px] bg-black bg-opacity-50 text-[18px] mb-1">
                                                    {LoadingContextValue ? (
                                                        <Skeleton circle={true} height={40} width={40} />
                                                    ) : (
                                                        <item.icon />
                                                    )}
                                                </button>
                                                <span className="text-[12px] font-semibold text-white">
                                                    {!LoadingContextValue && (
                                                        <>{item.data.count}K</>
                                                    )}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                        {!LoadingContextValue ? (
                            <Skeleton height={600} width={400} />
                        ) : (
                            // <Comment />
                            <>
                            </>
                        )}
                    </div>
                </div>
            ))}
        </>
    )
}

export default ReelsPage