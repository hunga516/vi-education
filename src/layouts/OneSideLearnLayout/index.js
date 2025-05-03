import images from "../../assets/images";
import BottomBarLearn from "../components/BottomBarLearn";
import Header from "../components/Header";
import SidebarLeftLearn from "../components/SidebarLeftLearn";

function OneSideLearnLayout({ children }) {
    return (
        <div className="min-h-screen">
            {/* <Header /> */}
            {/* <SidebarLeftLearn className="fixed left-0 top-[61px] z-10 w-[250px]" /> */}
            <div className="layout-wrapper wrapper w-full px-4 relative">

                {/* Background Image
                <img
                    src={images.background}
                    alt=""
                    className="absolute z-[-100] w-full left-1/2 -translate-x-1/2 transform scale-x-[-1]"
                /> */}

                {/* Content Wrapper */}
                <div className="mt-4">
                    {children}
                </div>
            </div>
            <BottomBarLearn />
        </div>
    );
}

export default OneSideLearnLayout;
