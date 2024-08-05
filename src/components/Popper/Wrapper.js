function Wrapper({ children }) {
    return (
        <div className="max-w-[500px] w-[270px] py-[10px] mt-[10px] bg-white drop-shadow-md rounded-lg">
            {children}
        </div>
    );
}

export default Wrapper;