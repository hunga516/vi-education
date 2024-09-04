import Header from "../components/Header"
import Sidebar from "../components/Sidebar"

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="wrapper mx-auto flex justify-center w-full pl-4 pr-6">
                <div className="mt-[60px]">
                    <Sidebar />
                </div>
                <div className="w-[1170px] mt-[68px] ml-[256px]">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DefaultLayout