import { createPortal } from "react-dom";
import { useContext, useEffect, useRef, useState } from "react";

import { RiPencilFill } from "react-icons/ri";
import { IoMdTrash } from "react-icons/io";
import { AuthContext } from "../../context/AuthContext";
import { FaPlus } from "react-icons/fa";

import axios from "axios";
import Skeleton from "react-loading-skeleton";
import { Editor } from "@tinymce/tinymce-react";
import { renderContentWithHighlight } from "../../utils/renderContentWithHighlight";

function CreateTakeNoteModal({ toggleIsShowCreateTakeNoteModal }) {
    const [isDropDown, setIsDropDown] = useState(false)
    // const { userId } = useContext(AuthContext)
    const userId = "66ed7b2fe7e1fe197f2599c2"
    const [takenotes, setTakeNotes] = useState()
    const [countTakeNotes, setCountTakeNotes] = useState(0)
    const [isShowCreateInput, setIsShowCreateInput] = useState(false)
    const editorRef = useRef(null);
    const [formData, setFormData] = useState({
        content: '',
        author: userId
    })

    console.log(formData);



    const toggleDropDown = () => {
        setIsDropDown(!isDropDown)
    }

    const toggleIsShowCreateInput = () => {
        setIsShowCreateInput(!isShowCreateInput)
    }

    useEffect(() => {
        const getAllTakeNotesByUserId = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/takenotes?user_id=${userId}`)
                setTakeNotes(response.data.takenotes)
                setCountTakeNotes(response.data.totalTakeNotes)
            } catch (error) {
                console.log(error);
            }
        }

        getAllTakeNotesByUserId()
    }, [])

    const handleOutsideClick = (event) => {
        if (event.target === event.currentTarget) {
            toggleIsShowCreateTakeNoteModal()
        }
    }

    const handleSubmitCreate = async () => {
        try {
            formData.content = editorRef.current.getContent()
            console.log(formData);

            const response = await axios.post(`${process.env.REACT_APP_API_URL}/takenotes`, formData)
            setIsShowCreateInput(false)
        } catch (error) {
            console.log(error);
        }
    }

    return createPortal(
        <div className="fixed inset-0 bg-slate-700/70 z-20" onClick={handleOutsideClick}>
            <div className="absolute left-0 top-0 bottom-0 w-[50vh] bg-white">
                <div className="px-4 py-6">
                    <div className="flex justify-between items-center">
                        <h1 className="text-2xl text-slate-800 font-semibold">Ghi chú của tôi</h1>
                        <div className="flex gap-2 items-center">
                            <button onClick={() => toggleIsShowCreateInput()}>
                                <FaPlus className="text-slate-600" />
                            </button>
                            <button onClick={() => toggleDropDown()} className="relative py-1 px-8 ring-1 rounded-md ring-slate-300/70 text-slate-600 text-xs">
                                Gần nhất
                                {/* {isDropDown && (
                                <ul className="absolute ring-1 rounded-md ring-slate-400/60 w-full left-0 bg-white mt-3">
                                    <li className="px-4 py-4 ">Gần nhất</li>
                                    <li className="px-4 py-4 ">Cũ nhất</li>
                                </ul>
                            )} */}
                            </button>
                        </div>
                    </div>
                    <div className="mt-4 flex flex-col gap-1">
                        {isShowCreateInput && (
                            <div className="">
                                <Editor
                                    apiKey='bzvtlkoota8hewyizr7ejk6wvqytmvudptgpviyat17odt93'
                                    onInit={(_evt, editor) => editorRef.current = editor}
                                    initialValue="<p></p>"
                                    init={{
                                        height: 500,
                                        menubar: false,
                                        plugins: [
                                            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                                            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                                        ],
                                        toolbar: 'undo redo | blocks | ' +
                                            'bold italic forecolor | alignleft aligncenter ' +
                                            'alignright alignjustify | bullist numlist outdent indent | ' +
                                            'removeformat | help',
                                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                                    }}
                                />
                                <div className="flex gap-2 mt-1 items-center justify-end">
                                    <button onClick={() => setIsShowCreateInput(false)} className="px-4 py-1 ring-1 ring-slate-300/70 text-slate-600 rounded-md">Hủy</button>
                                    <button onClick={handleSubmitCreate} className="px-4 py-1 text-white bg-gradient-to-tr from-blue-600 to-purple-600 rounded-md">Thêm</button>
                                </div>
                            </div>
                        )}
                        {takenotes ? (
                            takenotes.map((item, index) => (
                                <div className="p-4 rounded-lg bg-slate-300/30" key={index}>
                                    <div className="flex justify-between items-center">
                                        <p className="text-slate-600 text-xs">{item.updatedAt}</p>
                                        <div className="action text-slate-500 flex items-center gap-2">
                                            <button>
                                                <RiPencilFill />
                                            </button>
                                            <button>
                                                <IoMdTrash />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="content mt-2 text-slate-800 text-sm leading-4">
                                        {renderContentWithHighlight(item.content)}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <>
                                <Skeleton width={350} height={70} />
                                <Skeleton width={350} height={70} />
                                <Skeleton width={350} height={70} />
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
        , document.body
    )
}

export default CreateTakeNoteModal;