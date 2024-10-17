function Wrapper({ children }) {
    return (
        <div className="max-w-[1000px] p-4 w-[270px] py-2 mt-2 bg-white drop-shadow-md rounded-lg">
            {children}
        </div>
    );
}

export default Wrapper;