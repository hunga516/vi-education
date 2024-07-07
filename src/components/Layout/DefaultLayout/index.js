import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

function DefaultLayout({ children }) {

    return (
        <>
            <Header />
            <div className="flexbox">
                <Sidebar />
                <div className="content">{children}</div>
            </div>
        </>
    )
}

export default DefaultLayout;