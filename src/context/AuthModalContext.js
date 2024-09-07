import { createContext, useState } from "react";

export const AuthModalContext = createContext()

export function AuthModalProvider({ children }) {
    const [isShowLoginModal, setShowLoginModal] = useState(false)

    const toggleLoginModal = () => {
        setShowLoginModal(!isShowLoginModal)
    }
    return (
        <AuthModalContext.Provider value={{ isShowLoginModal, toggleLoginModal }}>
            {children}
        </AuthModalContext.Provider>
    );
}

