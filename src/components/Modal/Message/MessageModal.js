import { createPortal } from "react-dom";
import images from "../../../assets/images";
import { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../../context";
import { IoIosSend } from "react-icons/io";
import { io } from "socket.io-client";
import { MdCancel } from "react-icons/md";

function MessageModal({ room_id, toggleIsMessageModal }) {
    const [messages, setMessages] = useState([]);
    const { userId } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        content: '',
        author: userId,
        room: room_id
    });

    const messageEndRef = useRef(null);

    useEffect(() => {
        const socket = io(`${process.env.REACT_APP_API_URL}`, {
            reconnectionAttempts: 5, // Số lần thử kết nối lại
            timeout: 10000, // Thời gian timeout
            transports: ['polling'], // Sử dụng WebSocket nếu có thể để giảm thiểu lỗi kết nối
        });

        const getAllMessagesInRoom = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/messages?room_id=${room_id}`);
                setMessages(response.data.messages);
                setFormData({ ...formData, content: '' });
            } catch (error) {
                console.log(error);
            }
        };

        socket.on('message:create', newMessage => {
            setMessages(prevMessage => [...prevMessage, newMessage]);
        });

        getAllMessagesInRoom();

        return () => {
            socket.off('message:create');
        };
    }, []);

    useEffect(() => {
        messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleOnChange = (e) => {
        setFormData({ ...formData, content: e.target.value });
    };

    const handleSendMessage = async () => {
        if (formData.content.trim()) {
            try {
                await axios.post(`${process.env.REACT_APP_API_URL}/messages`, formData);
                setFormData({ ...formData, content: '' });
            } catch (error) {
                console.log(error);
            }
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return createPortal(
        <div className="fixed flex flex-col justify-between bottom-0 right-72 w-72 h-96 bg-white rounded-lg drop-shadow-lg z-10">
            <div className="flex px-4 py-2 rounded-tl-lg rounded-tr-lg w-full justify-between items-center bg-blue-700">
                <div className="flex items-center gap-2">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwVBCGAZHx-jTIwF4P76fQPWmYpQyctBIOjA&s" className="w-8 h-8 object-cover rounded-full" alt="" />
                    <p className="text-white text-sm leading-4">Những đứa trẻ thích Đà Lạt</p>
                </div>
                <div onClick={toggleIsMessageModal} className="text-white text-lg cursor-pointer">
                    <MdCancel />
                </div>
            </div>
            <div className="message-content h-[250px] overflow-y-auto flex-1 p-2">
                <div className="h-full w-full flex flex-col gap-2">
                    {messages.length > 0 && (
                        messages.map((message, index) => (
                            message.author._id !== userId ? (
                                <div key={index} className="text-white max-w-48 flex p-1 items-center gap-2">
                                    <img src={message.author?.photoURL} className="w-8 h-8 rounded-full object-cover" alt="" />
                                    <p className="px-2 py-2 text-black text-xs bg-slate-50 rounded-md drop-shadow-md">{message.content}</p>
                                </div>
                            ) : (
                                <div key={index} className="text-white w-full flex justify-end p-1 items-center gap-2">
                                    <p className="px-2 py-2 text-white text-xs bg-blue-500 rounded-md drop-shadow-md">{message.content}</p>
                                    <img src={message.author?.photoURL} className="w-8 h-8 rounded-full object-cover" alt="" />
                                </div>
                            )
                        ))
                    )}
                    <div ref={messageEndRef} />
                </div>
            </div>
            <div className="p-2 z-30 w-full flex justify-between items-center">
                <input
                    type="text"
                    onChange={handleOnChange}
                    onKeyDown={handleKeyDown}
                    className="flex-1 max-w-60 px-4 ring-1 outline-none ring-slate-300 rounded-3xl placeholder:text-slate-600"
                    value={formData.content}
                />
                <div className="" onClick={handleSendMessage}>
                    <IoIosSend className="text-2xl" />
                </div>
            </div>
        </div>
        , document.body
    );
}

export default MessageModal;
