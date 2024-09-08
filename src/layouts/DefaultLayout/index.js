import images from "../../assets/images"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <Sidebar className="z-10 mt-[61px]" />
            <div className="relative wrapper mx-auto flex justify-center bg-white/70 backdrop-blur-md w-full pl-4 pr-6">
                <img
                    src={images.background}
                    alt=""
                    className="absolute z-[-100] w-full left-1/2 -translate-x-1/2 transform scale-x-[-1]"
                />
                <div className="w-[1170px] mt-[80px]">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DefaultLayout