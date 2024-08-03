function Wrapper({ children }) {
    return (
        <div className="w-[500px] py-[10px] mt-[10px] bg-white drop-shadow-md rounded-lg">
            {children}
        </div>
    );
}

export default Wrapper;