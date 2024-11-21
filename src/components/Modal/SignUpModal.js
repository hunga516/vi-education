import images from "../../assets/images";
import { useContext, useState } from "react";
import { createPortal } from "react-dom";
import { AuthContext, AuthModalContext } from "../../context";

import { PiBookOpenUserFill } from "react-icons/pi";
import { IoArrowBack } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import axios from "axios";

function SignUpModal({ className, toggleSignUpModal }) {
    const AuthContextValue = useContext(AuthContext)
    const AuthModalContextValue = useContext(AuthModalContext)
    const [formData, setFormData] = useState({})
    const [errorMessage, setErrorMessage] = useState()

    const handleOnChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    console.log(formData);

    console.log(errorMessage);



    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/users/sign-up`, formData)
            switch (response.status) {
                case 200:
                    window.location.reload()
                    break;
                default:
                    setErrorMessage('Đăng ký thất bại, vui lòng kiểm tra lại!')
                    break;
            }
        } catch (error) {
            switch (error.response.status) {
                case 409:
                    setErrorMessage('Email đã tồn tại với một tài khoản khác trong hệ thống. Vui lòng đăng nhập!')
                    break;
                default:
                    console.log(error);
                    break;
            }
        }
    }


    return createPortal(
        <div className={"relative z-10"}>
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
            <div class="fixed inset-y-0 right-0 z-10 flex max-w-[500px] flex-col gap-2 justify-center px-8 pb-12 lg:px-16 bg-white">
                <button onClick={toggleSignUpModal} className="flex  items-center">
                    <IoArrowBack />
                    <span className="">Trở về</span>
                </button>
                <div class="sm:mx-auto sm:w-full sm:max-w-sm mt-10">
                    <span>
                        <PiBookOpenUserFill className="mx-auto font-[30px] text-[47px] text-bluePrimary" />
                    </span>
                    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Đăng ký tài khoản</h2>
                    <span className="text-sm opacity-60">Đăng ký để có trải nghiệm trọn vẹn với Vi Education</span>
                </div>
                <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <div>
                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email hoặc số điện thoại</label>
                        <div class="mt-2">
                            <input id="username" onChange={handleOnChange} name="email" type="email" autocomplete="email" required class="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div>
                        <div class="flex items-center justify-between mt-2">
                            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Mật khẩu</label>
                        </div>
                        <div class="mt-2">
                            <input id="password" onChange={handleOnChange} name="password" type="password" autocomplete="current-password" required class="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div className="flex justify-between mt-4">
                        <div className="flex gap-2 items-center">
                            <input id="forgotCheckbox" aria-describedby="helper-checkbox-text" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label className="font-normal text-sm opacity-60" for="forgotCheckbox">Ghi nhớ tài khoản</label>
                        </div>
                        <div class="text-sm">
                            <a href="#" class="font-semibold text-indigo-600 hover:text-bluePrimary">Quên mật khẩu?</a>
                        </div>
                    </div>

                    <div>
                        <button type="submit" onClick={AuthContextValue.handleSignIn} class="flex mt-2 w-full justify-center rounded-md bg-bluePrimary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-bluePrimary hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Đăng ký</button>
                    </div>

                    {errorMessage && (
                        <p className="text-sm text-red-600">{errorMessage}</p>
                    )}

                    <p class="mt-10 text-center text-sm text-gray-500">
                        Đã có tài khoản ?
                        <button onClick={AuthModalContextValue.toggleLoginModal} class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> Đăng nhập</button>
                    </p>

                    <div className="line-container flex items-center mt-4">
                        <div className="w-full border-t border-1"></div>
                        <span className="z-1 px-2 py-1.5 text-sm opacity-60 text-nowrap">Hoặc</span>
                        <div className="w-full border-t border-1"></div>
                    </div>

                    <div className="mt-4 flex items-center gap-2">
                        <button
                            onClick={AuthContextValue.handleSignUp}
                            className="flex flex-1 items-center justify-center gap-2 px-3 py-2 bg-slate-200 rounded-3xl ring-inset ring-1 ring-slate-300">
                            <FcGoogle className="text-2xl" />
                            <div className="font-normal">Google</div>
                        </button>
                        <button className="flex flex-1 items-center justify-center gap-2 px-3 py-2 bg-slate-200 rounded-3xl ring-inset ring-1 ring-slate-300">
                            <FaFacebook className="text-2xl text-blue-600" />
                            <div className="font-normal">Facebook</div>
                        </button>
                    </div>

                </div>
            </div>
        </div>,
        document.body
    );
}

export default SignUpModal;
