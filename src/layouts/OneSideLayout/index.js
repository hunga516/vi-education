import images from "../../assets/images";
import Header from "../components/Header";
import SidebarLeft from "../components/SidebarLeft";
import SidebarRight from "../components/SidebarRight";

function OnSideLayout({ children }) {
    return (
        <div className="min-h-screen">
            <Header />
            <SidebarLeft className="fixed left-0 top-[61px] z-10 w-[250px]" />
            <div className="layout-wrapper wrapper flex justify-center bg-white/70 backdrop-blur-md w-full pl-4 pr-6 relative">

                {/* Background Image */}
                <img
                    src={images.background}
                    alt=""
                    className="absolute z-[-100] w-full left-1/2 -translate-x-1/2 transform scale-x-[-1]"
                />

                {/* Content Wrapper */}
                <div className="w-full mt-[80px] px-8 ml-[250px]">
                    {children}
                </div>

            </div>
        </div>
    );
}

export default OnSideLayout;