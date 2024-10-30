import Skeleton from "react-loading-skeleton";
import { useContext, useEffect, useState } from "react";
import { AuthContext, LoadingContext } from "../context";

import { FaHeart, FaCommentDots, FaBookmark, FaShare } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import { AiOutlinePlus } from "react-icons/ai";
import { BsCameraVideoFill } from "react-icons/bs";
import { BiImages } from "react-icons/bi";
import { FaRegSmile } from "react-icons/fa";

import images from "../assets/images"
import video from "../assets/video";
import Comment from "../layouts/components/Comment";
import UploadPostModal from "../components/Modal/UploadPostModal";
import axios from "axios";

function FeedPage() {
    const [isShowUploadPost, setIsShowUploadPost] = useState(false)
    const LoadingContextValue = useContext(LoadingContext)
    const { user } = useContext(AuthContext)
    const [posts, setPosts] = useState()

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

    useEffect(() => {
        const getAllPosts = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/posts`)
                setPosts(response.data.posts)
            } catch (error) {
                console.log(error);
            }
        }

        getAllPosts()
    }, [])

    const VIDEO_ITEMS = Object.values(video)

    const toggleIsShowUploadPost = () => {
        setIsShowUploadPost(!isShowUploadPost)
    }

    return (
        <>
            <div className="upload-feed-posts py-4 w-full bg-white backdrop-blur-md shadow-2xl rounded-md">
                <div className="flex gap-4 mx-4 pb-4 border-b-[1px] border-b-slate-300">
                    <img src={user?.photoURL} alt="" className="w-10 h-10 rounded-full" />
                    <div className="flex-1">
                        <input
                            type="text"
                            className="w-full px-4 py-2 ring-1 ring-slate-200 rounded-xl bg-gray-200 placeholder:text-slate-600 placeholder:text-base focus-visible:outline-none placeholder:font-sans"
                            placeholder="Hãy chia sẽ kiến thức của bạn"
                            onClick={toggleIsShowUploadPost}
                        />
                    </div>
                </div>
                <div className="px-4 mt-2 flex justify-between items-center">
                    <button className="flex items-center gap-2 p-2 rounded-md hover:bg-slate-200/40 ">
                        <BsCameraVideoFill className="text-red-600/70 text-2xl" />
                        Phát trực tiếp
                    </button>
                    <button className="flex items-center gap-2 p-2 rounded-md hover:bg-slate-200/40 ">
                        <BiImages className="text-green-600/70 text-2xl" />
                        Hình ảnh/Video
                    </button>
                    <button className="flex items-center gap-2 p-2 rounded-md hover:bg-slate-200/40 ">
                        <FaRegSmile className="text-yellow-500/70 text-2xl" />
                        Chia sẻ cảm xúc
                    </button>
                </div>
            </div>

            {posts.map((post, index) => (
                <div className="wrapper-feed-page mt-6 bg-white backdrop-blur-md shadow-2xl rounded-md">
                    <div key={index} className={`flex px-5 py-4 gap-3 mx-auto border-b-[1px] first:mt-0 mt-[20px]`}>
                        <div className="video-container relative w-[350px] h-auto">
                            {LoadingContextValue ? (
                                <Skeleton className="rounded-md" width={350} height={600} />
                            ) : (
                                <>
                                    <video
                                        className="rounded-md w-full object-cover"
                                        src={post.media}
                                        type="video/mp4"
                                        controls
                                    >
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
                        {LoadingContextValue ? (
                            <Skeleton height={600} width={400} />
                        ) : (
                            <Comment />
                        )}
                    </div>
                </div>
            ))}
            {isShowUploadPost && (
                <UploadPostModal toggleIsShowUploadPost={toggleIsShowUploadPost} />
            )}
        </>
    )
}

export default FeedPage