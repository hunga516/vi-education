import images from "../../../assets/images";

function Comment({ posts }) {
    console.log(posts);

    return (
        <div className="comment-wrapper shadow-2xl flex flex-1 flex-col w-[400p] ring-black/5 bg-white">
            <div className="text-bluePrimary py-2 px-4 text-xs tracking-wide leading-6">Xem tất cả bình luận</div>
            <div className="comments-section rounded-bl-md rounded-br-md px-2 ">
                <div className="comment-item px-2 rounded-md">
                    <div className="commenter-info flex items-center gap-2">
                        <img src={images.sony} alt="avatar" className="text-center rounded-full w-10" />
                        <h1 className="font-semibold">sonyseeder</h1>
                        <span className="text-sm opacity-80">3 giờ trước</span>
                    </div>
                    <div className="comment-content mt-1">
                        <span className="text-sm font-medium">Troi oi tai nghe dep qua</span>
                    </div>
                </div>
                <div className="comment-item p-2 rounded-md mt-1">
                    <div className="commenter-info flex items-center gap-2">
                        <img src={images.sony} alt="avatar" className="text-center rounded-full w-10" />
                        <h1 className="font-semibold">sonyseeder</h1>
                        <span className="text-sm opacity-80">3 giờ trước</span>
                    </div>
                    <div className="comment-content mt-1">
                        <span className="text-sm font-medium">Troi oi tai nghe dep qua</span>
                    </div>
                </div>
                <div className="comment-item p-2 rounded-md mt-1">
                    <div className="commenter-info flex items-center gap-2">
                        <img src={images.sony} alt="avatar" className="text-center rounded-full w-10" />
                        <h1 className="font-semibold">sonyseeder</h1>
                        <span className="text-sm opacity-80">3 giờ trước</span>
                    </div>
                    <div className="comment-content mt-1">
                        <span className="text-sm font-medium">Troi oi tai nghe dep qua</span>
                    </div>
                </div>
                <div className="comment-item p-2 rounded-md mt-1">
                    <div className="commenter-info flex items-center gap-2">
                        <img src={images.sony} alt="avatar" className="text-center rounded-full w-10" />
                        <h1 className="font-semibold">sonyseeder</h1>
                        <span className="text-sm opacity-80">3 giờ trước</span>
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
