import images from "../assets/images"

function HomePage() {

    return (
        <>
            <div className="wrapper flex w-[692px] mx-auto bg-red-500 pb-[800px]">
                <div className="avatar w-[64px] h-[64px] ">
                    <img
                        src={images.sony}
                        className="rounded-full"
                    />
                </div>
                <div className="content"></div>
            </div>
        </>
    )
}

export default HomePage