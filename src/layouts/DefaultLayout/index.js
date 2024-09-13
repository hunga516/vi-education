import images from "../../assets/images"
import Header from "../components/Header"
import SidebarLeft from "../components/SidebarLeft"
import SidebarRight from "../components/SidebarRight"

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <SidebarLeft className="fixed z-10 mt-[61px]" />
            <div className="layout-wrapper relative wrapper flex justify-center bg-white/70 backdrop-blur-md w-full pl-4 pr-6">
                <img
                    src={images.background}
                    alt=""
                    className="absolute repeat z-[-100] w-full left-1/2 -translate-x-1/2 transform scale-x-[-1]"
                />
                <div className="w-[900px] mt-[80px] px-8">
                    {children}
                </div>
            </div>
            <SidebarRight className="fixed right-0 top-0 z-10 mt-[61px]" />
        </div>
    )
}

export default DefaultLayout