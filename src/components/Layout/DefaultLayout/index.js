import Header from "../components/Header"

function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <div className="content">
                {children}
            </div>
        </>
    )
}

export default DefaultLayout