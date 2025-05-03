import images from "../../assets/images";
import Header from "../components/Header";
import SidebarLeft from "../components/SidebarLeft";
import SidebarRight from "../components/SidebarRight";

function OnSideLayout({ children }) {
    return (
        <div className="min-h-screen">
            {/* <Header /> */}
            {/*<SidebarLeft className="fixed left-0 top-[61px] z-10" />*/}
            <div className="layout-wrapper wrapper flex w-full px-2 relative">

                {/* Background Image */}
                {/* <img
                    src={images.background}
                    alt=""
                    className="absolute z-[-100] w-full left-1/2 -translate-x-1/2 transform scale-x-[-1]"
                /> */}
                {/* Content Wrapper */}
                <div className="min-w-96 flex-1">
                    {children}
                </div>
            </div>
        </div >
    );
}

export default OnSideLayout;
