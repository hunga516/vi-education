import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

function OnlyHeaderLayout({ children }) {

    return (
        <>
            <Header />
            <div className="content">{children}</div>
        </>
    )
}

export default OnlyHeaderLayout;