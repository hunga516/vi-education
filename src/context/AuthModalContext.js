import { createContext, useState } from "react";

export const AuthModalContext = createContext()

export function AuthModalProvider({ children }) {
    const [isShowLoginModal, setShowLoginModal] = useState(false)
    const [isShowSignUpModal, setIsShowSignUpModal] = useState(false)

    const toggleLoginModal = () => {
        setShowLoginModal(!isShowLoginModal)
    }
    const toggleSignUpModal = () => {
        setIsShowSignUpModal(!isShowSignUpModal)
    }

    return (
        <AuthModalContext.Provider value={{ isShowLoginModal, isShowSignUpModal, toggleLoginModal, toggleSignUpModal }}>
            {children}
        </AuthModalContext.Provider>
    );
}

