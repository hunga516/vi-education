import { createPortal } from "react-dom";
import images from "../../../assets/images";
import { useEffect, useState } from "react";
import axios from "axios";

function MessageModal({ room_id }) {
    const [messages, setMessages] = useState([])

    console.log(messages);

    useEffect(() => {
        const getAllMessagesInRoom = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/messages?room_id=${room_id}`)
                setMessages(response.data.messages)
            } catch (error) {
                console.log(error);
            }
        }

        getAllMessagesInRoom()
    }, [])

    return createPortal(
        <div className="fixed flex flex-col justify-between bottom-0 right-72 w-72 h-96 bg-white rounded-lg drop-shadow-lg z-10">
            <div className="flex px-4 py-2 rounded-tl-lg rounded-tr-lg w-full justify-between items-center bg-blue-700">
                <div className="flex items-center gap-2">
                    <img src={images.sony} className="w-8 h-8 object-cover rounded-full" alt="" />
                    <p className="text-white text-sm leading-4">Phuong phap khoa hoc ne</p>
                </div>
                <div className="text-white">X</div>
            </div>
            <div className="message-content flex-1 p-2">
                <div className="h-full w-full flex flex-col gap-2">
                    {messages.length > 0 && (
                        messages.map((message, index) => (
                            <div key={index} className="text-white max-w-48 flex p-1 items-center gap-2">
                                <img src={message.author?.photoURL} className="w-8 h-8  rounded-full object-cover" alt="" />
                                <p className="px-2 py-2 text-black text-xs bg-slate-50 rounded-md drop-shadow-md">{message.content}</p>
                            </div>
                        ))
                    )}
                    <div className=" text-white w-full flex justify-end p-1 items-center gap-2">
                        <p className="px-2 py-2 text-white text-xs bg-blue-500 rounded-md drop-shadow-md">ban ngu qua a</p>
                        <img src={images.sony} className="w-8 h-8  rounded-full object-cover" alt="" />
                    </div>
                </div>
            </div>
            <div className="p-2 flex justify-between items-center gap-2">
                <input type="text" className="flex-1 px-4 ring-1 outline-none ring-slate-300 rounded-3xl placeholder:text-slate-600" />
                <div>icon</div>
            </div>
        </div>
        , document.body
    );
}

export default MessageModal;