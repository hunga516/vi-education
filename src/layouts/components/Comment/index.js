import images from "../../../assets/images";
import { SlOptions } from "react-icons/sl";
import { FaPlus } from "react-icons/fa6";
import { IoText } from "react-icons/io5";
import { MdOutlineAttachFile } from "react-icons/md";
import { PiSmileySticker } from "react-icons/pi";
import { LuSendHorizonal } from "react-icons/lu";

function Comment({ comments, getAllCommentsByPostId, post_id }) {

    return (
        <div className="comment-wrapper rounded-bl-md rounded-br-md shadow-2xl pb-4 flex flex-1 flex-col w-[400p] ring-black/5 bg-white">
            <div
                className="text-bluePrimary py-2 px-4 text-xs tracking-wide leading-6 hover:underline hover:decoration-blue-500 hover:cursor-pointer"
                onClick={() => getAllCommentsByPostId(post_id)}
            >
                Xem tất cả bình luận
            </div>
            <div className="comments-section max-h-[400px] overflow-y-auto px-2">
                <div className="border-b-[1px] border-slate-200"></div>
                {comments.map((comment, index) => (
                    <div key={index} className="comment-item px-2 rounded-md mt-3 flex justify-between">
                        <div className="flex flex-row gap-2">
                            <div className="relative w-10 h-10">
                                <img
                                    src={comment.author.photoURL}
                                    alt=""
                                    className="w-full h-full rounded-full object-cover"
                                />
                                <div className="absolute bottom-0 right-0 w-2 h-2 ring-2 ring-white rounded-full bg-green-500"></div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-2">
                                    <h1 className="font-semibold text-sm">{comment.author.displayName}</h1>
                                    <p className="text-xs font-medium text-slate-600">{comment.createdAt}</p>
                                </div>
                                <div className="flex-1 relative bg-gray-200/70 rounded-lg px-4 py-2">
                                    <p className="text-base">{comment.content}</p>
                                    <button className="absolute right-0 bottom-0 translate-x-12 -translate-y-1 w-8 h-8">
                                        <SlOptions className="text-slate-500" />
                                    </button>
                                </div>
                                <div className="text-sm mt-1 px-4 flex gap-4 text-slate-600">
                                    <div className="flex gap-2">
                                        <button className="flex items-center gap-1 px-2 py-1 ring-1 ring-slate-300 rounded-md bg-slate-100">
                                            <img src={images.like} alt="" className="w-4 h-4" />
                                            <p>3</p>
                                        </button>
                                        <button className="flex items-center gap-1 px-2 py-1 ring-1 ring-slate-300 rounded-md bg-slate-100">
                                            <img src={images.love} alt="" className="w-4 h-4" />
                                            <p>5</p>
                                        </button>
                                    </div>
                                    <div className="w-[1px] h-4 my-auto bg-slate-300/80"></div>
                                    <button className="">Trả lời</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="comment-input relative flex gap-1 items-center mt-4 drop-shadow-md px-4">
                <input type="text" placeholder="Thêm bình luận..." className="w-full outline-none px-4 py-2 border rounded-md" />
                <div className="absolute text-xl text-slate-600 right-0 bottom-0 -translate-y-3 -translate-x-24 flex gap-2 items-center">
                    <FaPlus />
                    <IoText />
                    <MdOutlineAttachFile />
                    <PiSmileySticker />
                </div>
                <button className="w-16 h-[42px] rounded-md flex items-center justify-center bg-bluePrimary">
                    <LuSendHorizonal className="text-xl text-white" />
                </button>
            </div>
        </div>
    )
}

export default Comment;
