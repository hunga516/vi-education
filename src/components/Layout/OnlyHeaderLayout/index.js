import Header from "../components/Header";

function OnlyHeaderLayout({ children }) {

    return (
        <>
            <Header />
            <div className="content">{children}</div>
        </>
    )
}

export default OnlyHeaderLayout;