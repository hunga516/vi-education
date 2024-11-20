import Header from "../components/Header"

function NoneLayout({ children }) {
    return (
        <>
            <Header />
            <div className="">
                {children}
            </div>
        </>
    )
}

export default NoneLayout