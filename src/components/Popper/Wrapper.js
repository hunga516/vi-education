function Wrapper({ children }) {
    return (
        <div className="w-full bg-white drop-shadow-md rounded-lg px-4 py-3">
            {children}
        </div>
    );
}

export default Wrapper;