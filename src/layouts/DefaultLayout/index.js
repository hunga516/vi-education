import images from "../../assets/images";
import Header from "../components/Header";
import SidebarLeft from "../components/SidebarLeft";
import SidebarRight from "../components/SidebarRight";

function DefaultLayout({ children }) {
    return (
        <div className="min-h-screen">
            <Header />
            <SidebarLeft className="fixed left-0 top-[61px] z-10 w-[250px]" />
            <div className="layout-wrapper wrapper flex justify-center bg-slate-200 backdrop-blur-md w-full px-2 relative">

                {/* Background Image */}
                {/* <img
                    src={images.background}
                    alt=""
                    className="absolute z-[-100] w-full left-1/2 -translate-x-1/2 transform scale-x-[-1]"
                /> */}

                {/* Content Wrapper */}
                <div className="w-full mt-20 p-8 rounded-md bg-white/80 shadow-md md:ml-64 ml-40 mr-[280px]">
                    {children}
                </div>
            </div>
            <SidebarRight className="fixed right-0 top-[63px] z-10 w-[280px]" />
        </div>
    );
}

export default DefaultLayout;