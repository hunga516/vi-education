import Skeleton from "react-loading-skeleton";
import { useContext, useEffect, useState } from "react";
import { AuthContext, LoadingContext } from "../context";

import { FaHeart, FaCommentDots, FaBookmark, FaShare } from "react-icons/fa";
import { BsCameraVideoFill } from "react-icons/bs";
import { BiImages } from "react-icons/bi";
import { FaRegSmile } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
import { BiRepost } from "react-icons/bi";
import { FaRegChartBar } from "react-icons/fa";
import { CiSaveDown2 } from "react-icons/ci";
import { FaRegStickyNote } from "react-icons/fa";
import { MdOutlineFileUpload } from "react-icons/md";

import images from "../assets/images"
import video from "../assets/video";
import Comment from "../layouts/components/Comment";
import UploadPostModal from "../components/Modal/UploadPostModal";
import axios from "axios";
import { renderContentWithHighlight } from "../utils/renderContentWithHighlight.js";
import { io } from "socket.io-client";

function FeedPage() {
    const [isShowUploadPost, setIsShowUploadPost] = useState(false)
    const LoadingContextValue = useContext(LoadingContext)
    const { user } = useContext(AuthContext)
    const [posts, setPosts] = useState()
    const [comments, setComments] = useState()
    const [commentsOfPost_id, setCommentsOfPost_id] = useState()
    const [isShowComments, setIsShowComments] = useState()

    useEffect(() => {
        const socket = io(`${process.env.REACT_APP_API_URL}`, {
            reconnectionAttempts: 5, // Số lần thử kết nối lại
            timeout: 10000, // Thời gian timeout
            transports: ['polling'], // Sử dụng WebSocket nếu có thể để giảm thiểu lỗi kết nối
        });


        socket.on('comments:create', (newComment) => {
            if (commentsOfPost_id === newComment.post_id) {
                setComments((prevComments) => [...prevComments, newComment]);
            }
        });

        return () => {
            socket.off('comments:create')
        }
    }, [])

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

    const toggleIsShowUploadPost = () => {
        setIsShowUploadPost(!isShowUploadPost)
    }

    const handleShowComments = async () => {
        setIsShowComments(true)
    }

    const getCommentsByPostId = async (post_id) => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/comments?post_id=${post_id}&limit=1`)
            setComments(response.data.comments)
            setCommentsOfPost_id(response.data.post_id)
        } catch (error) {
            console.log(error);
        }
    }

    const getAllCommentsByPostId = async (post_id) => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/comments?post_id=${post_id}`)
            setComments(response.data.comments)
            setCommentsOfPost_id(response.data.post_id)
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className="">
            <div className="upload-feed-posts py-4 w-full bg-white backdrop-blur-md shadow-sm ring-1 ring-slate-200/70 rounded-md">
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
            <div className="hot-posts mt-4 grid grid-cols-6 gap-2">
                <div className="item-grid relative rounded-lg bg-slate-300">
                    <img className="h-56 rounded-lg" src="https://plus.unsplash.com/premium_photo-1664117436431-aaa0d75814fe?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbHBhcGVyJTIwZm9yJTIwbW9iaWxlJTIwNGt8ZW58MHx8MHx8fDA%3D" alt="" />
                </div>
                <div className="item-grid relative rounded-lg bg-slate-300">
                    <img className="h-56 rounded-lg" src="https://plus.unsplash.com/premium_photo-1664117436431-aaa0d75814fe?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbHBhcGVyJTIwZm9yJTIwbW9iaWxlJTIwNGt8ZW58MHx8MHx8fDA%3D" alt="" />
                </div>
                <div className="item-grid relative rounded-lg bg-slate-300">
                    <img className="h-56 rounded-lg" src="https://plus.unsplash.com/premium_photo-1664117436431-aaa0d75814fe?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbHBhcGVyJTIwZm9yJTIwbW9iaWxlJTIwNGt8ZW58MHx8MHx8fDA%3D" alt="" />
                </div>
                <div className="item-grid relative rounded-lg bg-slate-300">
                    <img className="h-56 rounded-lg" src="https://plus.unsplash.com/premium_photo-1664117436431-aaa0d75814fe?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbHBhcGVyJTIwZm9yJTIwbW9iaWxlJTIwNGt8ZW58MHx8MHx8fDA%3D" alt="" />
                </div>
                <div className="item-grid relative rounded-lg bg-slate-300">
                    <img className="h-56 rounded-lg" src="https://plus.unsplash.com/premium_photo-1664117436431-aaa0d75814fe?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbHBhcGVyJTIwZm9yJTIwbW9iaWxlJTIwNGt8ZW58MHx8MHx8fDA%3D" alt="" />
                </div>
                <div className="item-grid relative rounded-lg bg-slate-300">
                    <img className="h-56 rounded-lg" src="https://plus.unsplash.com/premium_photo-1664117436431-aaa0d75814fe?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbHBhcGVyJTIwZm9yJTIwbW9iaWxlJTIwNGt8ZW58MHx8MHx8fDA%3D" alt="" />
                </div>
            </div>
            {posts ? (
                posts?.map((post, index) => (
                    <div className="">
                        <div key={index} className={`w-full mx-auto rounded-bl-md rounded-br-md border-b-[1px] first:mt-4`}>
                            <div className="video-info-comment flex gap-4 p-4 bg-white rounded-tr-md rounded-tl-md shadow-sm ring-1 ring-slate-200/70">
                                <img src={post.author.photoURL} alt="avatar" className="rounded-full w-10 h-10" />
                                <div className="video-container rounded-lg w-full h-auto">
                                    <div className="text-sm font-medium">{post.author.displayName}</div>
                                    <div className="text-slate-1000 mb-4">{renderContentWithHighlight(post.content)}</div>
                                    {post.media ? (
                                        <video
                                            className="w-full rounded-lg object-cover"
                                            src={post.media}
                                            type="video/mp4"
                                            controls
                                        >
                                        </video>
                                    ) : (
                                        <Skeleton width={500} height={557} />
                                    )}
                                    <div className="w-full py-2 mt-2 grid grid-cols-5">
                                        <div className="flex items-center gap-2 mx-auto cursor-pointer">
                                            <FaRegHeart className="text-sm text-slate-600" />
                                            <p className="text-sm text-slate-600">22</p>
                                        </div>
                                        <div onClick={() => getCommentsByPostId(post._id)} className="flex items-center gap-2 mx-auto cursor-pointer">
                                            <FiMessageSquare className="text-sm text-slate-600" />
                                            <p className="text-sm text-slate-600">22</p>
                                        </div>
                                        <div className="flex items-center gap-2 mx-auto cursor-pointer">
                                            <BiRepost className="text-[18px] text-slate-600" />
                                            <p className="text-sm text-slate-600">22</p>
                                        </div>
                                        <div className="flex items-center gap-2 mx-auto cursor-pointer">
                                            <FaRegChartBar className="text-sm text-slate-600" />
                                            <p className="text-sm text-slate-600">1.88k</p>
                                        </div>
                                        <div className="flex items-center gap-2 mx-auto cursor-pointer">
                                            <FaRegStickyNote className="text-sm font-medium text-slate-600" />
                                            <MdOutlineFileUpload className="text-base font-medium text-slate-600" />
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        {comments && commentsOfPost_id === post._id && (
                                            <Comment post_id={post._id} comments={comments} getAllCommentsByPostId={getAllCommentsByPostId} />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div className="wrapper-feed-page p-4 mt-6 bg-white backdrop-blur-md shadow-sm ring-1 ring-slate-200/70 rounded-md">
                    <Skeleton height={500} width={810} />
                </div>
            )
            }
            {isShowUploadPost && (
                <UploadPostModal toggleIsShowUploadPost={toggleIsShowUploadPost} />
            )}
        </div>
    )
}

export default FeedPage