import Header from "./Header";
import Sidebar from "./SideBar";

function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">
                    {children}
                </div>
            </div>
        </>
    );
}

export default DefaultLayout;