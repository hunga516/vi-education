function Wrapper({ children }) {
    return (
        <div className="max-w-[500px] w-[270px] py-2 mt-2 bg-white drop-shadow-md rounded-lg">
            {children}
        </div>
    );
}

export default Wrapper;