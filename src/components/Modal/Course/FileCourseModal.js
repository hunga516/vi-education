import { useContext, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import axios from 'axios';

import { IoArrowBack } from "react-icons/io5";
import { VscLoading } from "react-icons/vsc";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { CiImport } from "react-icons/ci";
import { CiFileOn } from "react-icons/ci";

import Button from '../../Button';
import { AuthContext } from '../../../context/AuthContext';


function FileCourseModal({ toggleIsShowFileCourse }) {
    const { userId } = useContext(AuthContext)
    const [files, setFiles] = useState()
    const [searchedUsers, setSearchedUsers] = useState([])
    const [formData, setFormData] = useState({})

    const [isLoadingSubmit, setIsLoadingSubmit] = useState(false)

    const handleChange = (e) => {
        if (e.target.name === "files") {
            setFiles(e.target.files[0])
            setFormData({ ...formData, [e.target.name]: e.target.value })
        }
    }



    const handleSubmitImport = async () => {
        const DataSend = new FormData()

        DataSend.append('files', formData.files)

        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/courses/import-csv`, DataSend, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        } catch (error) {
            console.log(error);

        }
    }



    return createPortal(
        <div className="relative">
            {/* Wrapper Disable */}
            <div className="fixed h-[100vh] inset-0 bg-gray-500 opacity-75 z-20">
            </div>

            {/* Modal */}
            <form id='createPostForm' className="fixed flex justify-center items-center inset-0 z-20">
                <div className="overflow-auto overscroll-y-contain h-[80vh] w-[50vw] bg-white rounded-xl">
                    <div className="relative px-12 py-4">
                        <div
                            className="back-action z-10 flex justify-between items-center gap-2 sticky top-0 h-16 w-full bg-white "
                        >
                            <button onClick={toggleIsShowFileCourse} className="flex items-center gap-2">
                                <IoArrowBack />
                                <h2 className="text-base font-normal text-gray-700 leading-9">Trở về</h2>
                            </button>

                            <div className="container-action flex items-center gap-2">
                                <Button size='medium' type='upload'>
                                    <CiImport strokeWidth={"1px"} />
                                    Tải xuống
                                </Button>
                                {isLoadingSubmit ? (
                                    <Button
                                        className="px-4 w-48 opacity-70" type='primary'
                                        onClick={handleSubmitImport}
                                    >
                                        <VscLoading className='animate-spin' />
                                        <span>Đang tải</span>
                                    </Button>
                                ) : (
                                    <Button
                                        className="px-4 w-48" type='primary'
                                        onClick={handleSubmitImport}
                                    >
                                        <AiOutlineCloudUpload className='text-lg' />
                                        <span>Tải lên</span>
                                    </Button>
                                )}
                            </div>
                        </div>
                        <div class="border-b border-gray-900/10 pb-12 mt-4">
                            <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                {files ? (
                                    <div className='relative'>
                                        <img src={files} alt='' className='' />
                                        <label for="file-upload" class="absolute bottom-0 w-full p-4  cursor-pointer rounded-tl-md rounded-tr-md bg-gray-400/60 text-white font-normal">
                                            <span>Đổi tệp khác</span>
                                        </label>
                                        <input id="file-upload" type="file" class="sr-only" name='files' placeholder='test' onChange={handleChange} />
                                    </div>
                                ) : (
                                    <div class="text-center">
                                        <CiFileOn className='mx-auto text-5xl text-slate-500' strokeWidth={"0.5px"} />
                                        <div class="mt-4 flex text-sm leading-6 text-gray-600">
                                            <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                                <span>Tải tệp lên</span>
                                                <input id="file-upload" type="file" class="sr-only" name='files' onChange={handleChange} />
                                            </label>
                                            <p class="pl-1">bằng kéo hoặc thả</p>
                                        </div>
                                        <p class="text-xs leading-5 text-gray-600">.csv dưới 10MB</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div >
            </form >
        </div >,
        document.body
    );
}

export default FileCourseModal;