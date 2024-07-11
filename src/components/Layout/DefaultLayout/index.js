import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function DefaultLayout({ children }) {

    return (
        <div className="">
            <Header />
            <div className="flex justify-center" >
                <div className="flex w-default-layout-width h-[1000px]">
                    <Sidebar />
                    <div className="w-[70%]">{children}</div>
                </div>
            </div>
        </div>

    )
}

export default DefaultLayout;