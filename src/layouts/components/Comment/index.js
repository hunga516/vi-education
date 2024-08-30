import { AiOutlinePlus } from "react-icons/ai";
import images from "../../../assets/images";
import Button from "../../../components/Button";
import { PiMusicNotesSimpleFill } from "react-icons/pi";

function Comment() {
    return (
        <div className="comment-wrapper flex flex-col p-4 w-[600px] h-[718px] ring-black/5 bg-white">
            <div className="video-info-comment flex flex-col gap-4 p-4 bg-white drop-shadow-md rounded-md">
                <div className="video-info-container flex justify-between items-center">
                    <div className="user-info flex flex-row gap-3">
                        <img src={images.sony} alt="avatar" className="rounded-full w-12" />
                        <div className="user-details flex flex-col justify-between">
                            <h1 className="font-semibold">sonymusic</h1>
                            <h2 className="text-sm">Sony Viet Nam</h2>
                        </div>
                    </div>
                    <Button className="" type="outline-primary" size="small">
                        <AiOutlinePlus />
                        Theo dõi
                    </Button>
                </div>
                <p className="video-description tracking-wide text-gray-600 ">Bạn đã nghe thử SONY XM5 chưaaaaa. Từ ngày 2/9 hãy ghé Nhà Ngọc Lộc để trải nghiệm toàn bộ tai nghe mới nhất nhé!</p>
                <div className="music-info flex items-center gap-2">
                    <PiMusicNotesSimpleFill />
                    <span className="text-sm opacity-80">nhạc nền - Dò lẩu dò quẩy</span>
                </div>
            </div>
            <div className="comments-section ROUND mt-4 p-2 ">
                <div className="comment-item p-2 rounded-md mt-1 bg-slate-100 ">
                    <div className="commenter-info flex items-center gap-2">
                        <img src={images.sony} alt="avatar" className="text-center rounded-full w-10" />
                        <h1 className="font-semibold">sonyseeder</h1>
                    </div>
                    <div className="comment-content mt-1">
                        <span className="text-sm font-medium">Troi oi tai nghe dep qua</span>
                    </div>
                </div>
                <div className="comment-item p-2 rounded-md mt-1 bg-slate-100/20">
                    <div className="commenter-info flex items-center gap-2">
                        <img src={images.sony} alt="avatar" className="text-center rounded-full w-10" />
                        <h1 className="font-semibold">sonyseeder</h1>
                    </div>
                    <div className="comment-content mt-1">
                        <span className="text-sm font-medium">Troi oi tai nghe dep qua</span>
                    </div>
                </div>
                <div className="comment-item p-2 rounded-md mt-1 bg-slate-100">
                    <div className="commenter-info flex items-center gap-2">
                        <img src={images.sony} alt="avatar" className="text-center rounded-full w-10" />
                        <h1 className="font-semibold">sonyseeder</h1>
                    </div>
                    <div className="comment-content mt-1">
                        <span className="text-sm font-medium">Troi oi tai nghe dep qua</span>
                    </div>
                </div>
                <div className="comment-item p-2 rounded-md mt-1 bg-slate-100/20">
                    <div className="commenter-info flex items-center gap-2">
                        <img src={images.sony} alt="avatar" className="text-center rounded-full w-10" />
                        <h1 className="font-semibold">sonyseeder</h1>
                    </div>
                    <div className="comment-content mt-1">
                        <span className="text-sm font-medium">Troi oi tai nghe dep qua</span>
                    </div>
                </div>
            </div>
            <div className="comment-input mt-auto drop-shadow-md">
                <input type="text" placeholder="Thêm bình luận..." className="w-full p-2 border rounded-md" />
            </div>
        </div>
    )
}

export default Comment;
